/* Development-only export from the existing six-chapter reading experience. */
const { chromium } = require('playwright');
const fs = require('node:fs');
(async()=>{
  const browser=await chromium.launch({channel:'msedge',headless:true});
  try {
    const page=await browser.newPage();
    await page.route('https://upload.wikimedia.org/**',route=>route.abort());
    await page.goto('http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-notpetya');
    const cases=await page.evaluate(()=>EPISODES.map(ep=>({id:ep.id,title:ep.title,year:ep.year,confidence:ep.confidence})));
    for (const item of cases) {
      await page.evaluate(id=>WarRoomExperience.open(id,'story',true),item.id);
      item.chapters=[];
      for(let index=0;index<6;index++){
        await page.locator('.pilot-chapters button').nth(index).click();
        const chapter=await page.evaluate(({index,id})=>{
          const node=document.querySelector('.pilot-scene>div');
          const href=node.querySelector('.pilot-source a').href;
          const episode=EPISODES.find(item=>item.id===id);
          const references=WarRoomDocumentaries.sources(id).concat(episode.references||[]);
          const reference=references.find(item=>item.href===href);
          const pilotSources={
            'https://www.microsoft.com/en-us/security/blog/2017/06/27/new-ransomware-old-techniques-petya-adds-worm-capabilities/':'Microsoft · análise técnica de NotPetya · 27 de junho de 2017',
            'https://www.gov.uk/government/news/foreign-office-minister-condemns-russia-for-notpetya-attacks':'Governo britânico · atribuição pública de NotPetya · 15 de fevereiro de 2018',
            'https://www.justice.gov/archives/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and':'Departamento de Justiça dos Estados Unidos · acusação de oficiais do GRU · 19 de outubro de 2020'
          };
          return {
            id:['opening','origin','spread','impact','response','sources'][index],
            name:['Abertura','Origem','Propagação','Impacto','Resposta','Fontes'][index],
            title:node.querySelector('h3').textContent,
            body:node.querySelector('p').textContent,
            source:{title:pilotSources[href]||(reference&&reference.title)||'Referência documental vinculada ao dossiê',href}
          };
        },{index,id:item.id});
        // Only documented chapter prose, with explicit source-reading instructions.
        chapter.script=(index===0?`${item.title}. ${chapter.name}. `:`${chapter.name}. `)+chapter.title+' '+chapter.body;
        if(index===5)chapter.script+=' A referência deste capítulo é '+chapter.source.title+'. Consulte a aba Fontes para verificar autoria, datas, atribuição e escopo. Você pode reler a História e consultar a cronologia completa na aba Análise.';
        item.chapters.push(chapter);
      }
    }
    fs.mkdirSync('assets/media/narrations',{recursive:true});
    fs.writeFileSync('assets/media/narrations/scripts.json',JSON.stringify({language:'pt-BR',narrator:'Voz do autor, síntese autorizada a partir de gravação própria',cases},null,2)+'\n');
    console.log(`${cases.length} cases, ${cases.reduce((n,c)=>n+c.chapters.length,0)} source-linked chapter scripts exported`);
  }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exitCode=1});
