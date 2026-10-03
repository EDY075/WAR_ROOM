/* Editorial overlay. EPISODES, STORIES and INTEL_INDEX are intentionally untouched. */
window.WarRoomDocumentaries=(function(){
  var reconstruction='Reconstituição ilustrativa gerada por IA para WAR ROOM. Contexto editorial; não é arquivo nem prova do incidente.';
  var cases={
    'morris-worm':{
      art:'unix-1988',source:['FBI · investigação e retrospectiva do Morris Worm','https://www.fbi.gov/history/cases-and-criminals/morris-worm'],
      titles:['A primeira grande interrupção.','Uma rede construída sobre confiança.','O código encontra outras máquinas.','Disponibilidade também é segurança.','A resposta passa a ter uma organização.'],
      text:[
        'Em novembro de 1988, um worm atingiu sistemas Unix de universidades e centros de pesquisa. Antes da Web, a comunidade da internet já precisava lidar com um problema coletivo: o funcionamento de uma máquina dependia da segurança das outras.',
        'Robert Tappan Morris desenvolveu o programa enquanto estudava em Cornell. O registro do FBI descreve sua execução inicial por um computador do MIT. A narrativa acompanha o ambiente acadêmico da época sem transformar a intenção declarada em justificativa para o acesso não autorizado.',
        'O worm combinou diferentes formas de acesso a sistemas Unix. Cópias adicionais consumiam recursos e dificultavam o trabalho dos administradores. A região marcada no mapa representa o contexto acadêmico dos EUA; não pretende localizar cada host afetado.',
        'O dano central foi a perda de disponibilidade. O FBI descreve e-mails atrasados, instituições desconectadas e esforço de limpeza. Estimativas de custo variam; os números do catálogo original ficam visíveis como registro do projeto, separados da retrospectiva oficial.',
        'O episódio contribuiu para a criação de uma resposta organizada a emergências computacionais. A investigação também levou à primeira condenação sob o CFAA de 1986. A lição operacional liga correção técnica, cooperação entre administradores e responsabilidade pelo acesso a sistemas.'
      ]
    },
    melissa:{
      art:'email-1999',source:['FBI · The Melissa Virus · retrospectiva de 2019','https://www.fbi.gov/news/stories/melissa-virus-20th-anniversary-032519'],
      titles:['Uma mensagem aparentemente familiar.','O documento era o vetor.','A agenda vira rede de distribuição.','O custo de confiar no anexo.','Investigar os rastros, reduzir a exposição.'],
      text:[
        'Em março de 1999, Melissa transformou um documento do Word em uma crise para redes de e-mail. O incidente mostrou como uma rotina de escritório podia ampliar um ataque: receber um arquivo, abrir e confiar no remetente.',
        'O FBI relata que David Lee Smith publicou um documento em um grupo de notícias usando uma conta da AOL. O conteúdo oferecido atraía o download. O ponto de entrada era a combinação de um arquivo executável por macros com a disposição de abri-lo.',
        'A distribuição por e-mail fez os contatos se tornarem parte do mecanismo de propagação. O problema atravessava usuários e organizações. O mapa situa o contexto da investigação nos EUA; não representa um percurso comprovado entre caixas de entrada.',
        'O FBI estimou US$ 80 milhões para limpeza e reparo dos sistemas atingidos. Esse recorte ajuda a entender que o custo incluía trabalho humano e recuperação de serviços, além das máquinas. Não é uma medida de todos os efeitos indiretos possíveis.',
        'A investigação contou com a AOL e autoridades de Nova Jersey. Smith foi preso e posteriormente condenado. Na defesa, anexos, macros e o comportamento do cliente de e-mail passaram a exigir controles explícitos; reconhecer um nome de remetente não bastava.'
      ]
    },
    iloveyou:{
      art:'manila-2000',source:['GAO · depoimento sobre ILOVEYOU · 10/05/2000','https://www.gao.gov/products/t-aimd-00-171'],
      titles:['O assunto convidava a abrir.','Uma extensão escondia o risco.','A confiança viaja com a mensagem.','Um incidente em muitas organizações.','Segurança precisa de prática contínua.'],
      text:[
        'Em maio de 2000, uma mensagem com o assunto ILOVEYOU se tornou um incidente internacional. A linguagem pessoal e o anexo aparentemente simples revelaram uma fragilidade: a interface podia sugerir um documento quando o sistema executaria um script.',
        'O catálogo situa a origem nas Filipinas. O depoimento do GAO, apresentado poucos dias depois, registra o incidente e a necessidade de melhorar a segurança das agências. A narrativa distingue o contexto do anexo da ideia de que toda mensagem enviada por um contato seja confiável.',
        'O worm usou o e-mail para ampliar seu alcance. A visualização marca Manila como contexto de origem, sem inventar conexões individuais. Na cronologia do dossiê, cada evento mantém sua data; na leitura técnica, o foco está no que fazia uma abertura virar novas mensagens.',
        'Interrupção, limpeza e recuperação atravessaram diferentes organizações. As estimativas históricas do projeto são mantidas no catálogo, com seu caráter de estimativa. O documento contemporâneo do GAO oferece um ponto de consulta sobre o problema de segurança governamental.',
        'A resposta envolve controle de scripts, tratamento de anexos e programas de segurança que sobrevivam à crise. A lição permanece concreta: não depender só de atenção individual quando o desenho dos sistemas e das rotinas permite executar conteúdo recebido.'
      ]
    },
    estonia:{
      art:'tallinn-2007',source:['Rain Ottis / CCDCOE · análise dos ataques de 2007','https://ccdcoe.org/library/publications/analysis-of-the-2007-cyber-attacks-against-estonia-from-the-information-warfare-perspective/'],
      titles:['Quando os serviços deixaram de responder.','Um conflito político, uma superfície digital.','Pressão distribuída contra a disponibilidade.','A dependência de uma sociedade conectada.','Defender exige cooperação.'],
      text:[
        'Na primavera de 2007, serviços estonianos enfrentaram uma campanha de ataques. Um país com forte adoção de serviços digitais se tornou um caso de estudo sobre disponibilidade: manter bancos, comunicação e governo acessíveis era uma questão de continuidade nacional.',
        'A campanha ocorreu no contexto da transferência de um monumento soviético em Tallinn. A análise de Rain Ottis discute o ambiente político e os limites das evidências disponíveis. Relação temporal, motivação política e atribuição de autoria são perguntas diferentes.',
        'Os ataques incluíram negação de serviço distribuída contra sites, e-mail, bancos e DNS. A análise descreve mudanças de alvo e intensidade durante a campanha. O mapa marca a Estônia como região afetada; não identifica a origem de cada pacote.',
        'A consequência documentada inclui degradação ou perda temporária de serviços. O caso permite observar como indisponibilidade técnica afeta atividades cotidianas. Os valores do catálogo são estimativas históricas, enquanto a pesquisa vinculada discute fatos e limites de investigação.',
        'A resposta combinou mitigação técnica e coordenação entre organizações. A leitura defensiva enfatiza capacidade de filtrar tráfego, compartilhar informação e manter serviços críticos. A autoria não é resolvida pela aparência do mapa nem por uma reivindicação política.'
      ]
    },
    stuxnet:{
      art:'industrial-controls',source:['ICS-CERT / CISA · Primary Stuxnet Advisory · ICSA-10-272-01','https://www.cisa.gov/uscert/ics/advisories/ICSA-10-272-01'],
      titles:['O software encontra o processo físico.','Um ambiente industrial como alvo.','Da infecção à lógica de controle.','Integridade é mais que um arquivo intacto.','Recuperar a confiança no processo.'],
      text:[
        'Stuxnet levou o debate sobre malware para sistemas de controle industrial. O caso articula duas perguntas: o que acontece no computador e o que esse computador comanda? A narrativa acompanha essa passagem sem apresentar a reconstituição visual como registro de Natanz.',
        'O advisory do ICS-CERT descreve malware que visava software de controle Siemens. O catálogo preserva o contexto iraniano e as atribuições debatidas. A análise técnica de um componente não equivale a uma confirmação pública de todos os autores e objetivos.',
        'É preciso separar os meios de espalhamento do código e a atuação sobre um processo industrial específico. O mapa oferece contexto regional. Os marcos da cronologia e o documento técnico mostram por que máquinas infectadas e equipamentos efetivamente afetados não são medidas equivalentes.',
        'Em um sistema industrial, integridade inclui comando, observação e confiança nos sinais. Os números históricos do catálogo são apresentados à parte. O significado operacional do caso está na possibilidade de o comportamento físico divergir daquilo que uma interface sugere.',
        'A recuperação requer validar estações, lógica de controle e o próprio processo. A defesa do dossiê destaca segmentação e controle de acesso. O advisory histórico serve à compreensão do incidente; as recomendações de operação atuais devem seguir os responsáveis pelo ambiente.'
      ]
    },
    sony:{
      art:'hollywood-2014',source:['FBI · Update on Sony Investigation · dezembro de 2014','https://www.fbi.gov/news/press-releases/update-on-sony-investigation'],
      titles:['A produção encontrou uma tela de crise.','Dados corporativos viram instrumento de pressão.','Destruição e divulgação caminham juntas.','O impacto alcança pessoas.','Conter, recuperar e distinguir atribuições.'],
      text:[
        'Em 2014, o ataque à Sony Pictures atingiu sistemas e expôs informação corporativa. O episódio aproximou segurança digital, trabalho cotidiano e pressão pública. A narrativa situa o estúdio e seus funcionários como contexto humano, sem reconstruir diálogos não documentados.',
        'A investigação pública do FBI trata do comprometimento e da destruição de dados. O contexto do filme The Interview faz parte da história do catálogo. Contexto e motivação alegada são apresentados junto da atribuição oficial, com acesso ao documento que a sustenta.',
        'O caso combina interrupção interna e divulgação de material obtido dos sistemas. São efeitos diferentes e pedem respostas distintas. O mapa situa a operação do estúdio nos EUA; não representa a localização de atacantes nem a rota de exfiltração.',
        'Exposição de dados afeta empregados, relações comerciais e confiança. Restaurar sistemas não recolhe automaticamente o que foi divulgado. As estimativas do catálogo permanecem identificadas como registro histórico, enquanto a investigação é a referência para a atribuição pública.',
        'A resposta exige proteger pessoas e comunicação, além de recuperar equipamentos. O dossiê conserva medidas de defesa e efeitos institucionais. A atribuição anunciada pelo FBI é apresentada como avaliação da agência; a imagem editorial não acrescenta evidência à investigação.'
      ]
    },
    wannacry:{
      art:'hospital-2017',source:['Mandiant / Google · análise de WannaCry · maio de 2017','https://cloud.google.com/blog/topics/threat-intelligence/wannacry-malware-profile'],
      titles:['A indisponibilidade chegou ao atendimento.','Uma correção disponível, uma exposição persistente.','O worm não espera um novo clique.','A recuperação tem consequências humanas.','Corrigir é parte da continuidade.'],
      text:[
        'Em maio de 2017, WannaCry atingiu organizações em diversos países. O contexto do NHS torna o problema concreto: indisponibilidade de sistemas pode interferir no trabalho de quem precisa prestar um serviço, mesmo quando o ataque se manifesta primeiro em uma tela.',
        'O incidente explorou a exposição de sistemas Windows. O catálogo registra EternalBlue e o intervalo entre a correção da Microsoft e a campanha. Entender esse intervalo ajuda a separar descoberta de vulnerabilidade, disponibilidade de correção e aplicação efetiva nos ambientes.',
        'A propagação como worm ampliou o alcance sem depender de uma nova abertura de anexo em cada máquina. O mapa usa o Reino Unido como recorte do impacto em saúde. É contexto de um episódio global, sem simular a velocidade nem as rotas reais.',
        'A interrupção se traduz em filas de recuperação, remanejamento de trabalho e risco à continuidade. Os totais históricos variam conforme a fonte. A análise mantém os valores originais do projeto e evita usar uma fotografia de hospital como prova do incidente.',
        'Inventário, correções, segmentação e recuperação testada fazem parte da defesa. A análise contemporânea da Mandiant documenta o comportamento do ransomware. A leitura coloca a correção dentro de um processo de operação, sem sugerir que um único controle resolve toda a continuidade.'
      ]
    },
    notpetya:{local:'assets/images/notpetya/port-reconstruction.webp',credit:reconstruction,source:['Microsoft · análise técnica de NotPetya','https://www.microsoft.com/en-us/security/blog/2017/06/27/new-ransomware-old-techniques-petya-adds-worm-capabilities/']},
    solarwinds:{
      art:'software-supply',source:['CISA · AA20-352A · publicação oficial de 17/12/2020','https://content.govdelivery.com/accounts/USDHSCISA/bulletins/2b1b32d'],
      titles:['A confiança entrou pela atualização.','O fornecedor estava dentro da superfície de risco.','Receber o software não significa o mesmo impacto.','O trabalho de descobrir o alcance.','A defesa acompanha toda a cadeia.'],
      text:[
        'Divulgado em 2020, o caso SolarWinds mostrou o risco de um componente confiável levar código malicioso ao ambiente. Não bastava procurar uma entrada externa óbvia: a atualização de uma ferramenta de monitoramento fazia parte da rotina autorizada.',
        'O software Orion estava no centro da investigação da cadeia de fornecimento. O advisory da CISA descreve a campanha e caminhos de comprometimento. A assinatura e a origem esperada de um pacote não garantem que sua cadeia de produção permaneceu íntegra.',
        'Distribuição de uma atualização comprometida e atividade posterior em um alvo precisam ser distinguidas. O mapa dá contexto a alvos governamentais nos EUA, sem limitar a campanha a esse país. A cronologia acompanha descoberta, divulgação e resposta.',
        'A apuração exigiu avaliar acessos, contas e persistência. O número de organizações que receberam um componente não pode ser tratado automaticamente como o número de vítimas de todas as etapas. Os valores do catálogo são preservados em seu registro histórico.',
        'A resposta vai além de retirar um pacote: é preciso verificar o ambiente e sua confiança. O dossiê relaciona segurança de fornecedores e transparência de componentes. O advisory funciona como registro da investigação, com separação entre escopo observado e exposição potencial.'
      ]
    },
    colonial:{
      art:'pipeline-context',source:['CISA / FBI · DarkSide Ransomware · AA21-131A · PDF','https://www.cisa.gov/sites/default/files/publications/AA21-131A_Darkside_Ransomware.pdf'],
      titles:['Uma interrupção digital afeta o abastecimento.','Acesso corporativo e operação física.','Conter o incidente muda a operação.','A continuidade depende de muitos sistemas.','Identidade, segmentação e recuperação.'],
      text:[
        'Em maio de 2021, a Colonial Pipeline interrompeu operações após um incidente de ransomware. A história expõe a relação entre sistemas corporativos e continuidade de infraestrutura. A imagem do oleoduto é contexto reconstituído, sem representar o local do acesso inicial.',
        'O catálogo registra o acesso por uma VPN sem autenticação multifator. O aviso conjunto da CISA e do FBI descreve DarkSide e medidas de mitigação. O alcance nos sistemas de TI deve ser distinguido de uma alegação de controle direto dos equipamentos operacionais.',
        'Decisões de contenção podem interromper uma operação física mesmo quando a investigação se concentra em TI. O mapa situa o sudeste dos EUA como contexto. Os eventos do dossiê mostram a sequência do incidente; não são uma simulação do fluxo de combustível.',
        'O efeito foi sentido no abastecimento e na organização do trabalho de recuperação. Resgate, custo de resposta e impacto indireto são categorias diferentes. O catálogo original fica preservado, acompanhado desta distinção para evitar somar medidas incompatíveis.',
        'A defesa conecta autenticação, redução de acessos e continuidade testada. O caso pede verificar dependências entre TI e operação antes de uma crise. A resposta institucional permanece no dossiê; o aviso contemporâneo oferece a referência para o tratamento do ransomware.'
      ]
    },
    log4j:{
      art:'logging-context',source:['Apache · Log4j Security · CVE-2021-44228 e advisories','https://logging.apache.org/security.html'],
      titles:['Uma dependência pequena, uma exposição extensa.','O registro de uma mensagem virou fronteira de confiança.','A biblioteca estava além do inventário.','Exposição não é comprometimento confirmado.','Localizar, corrigir e verificar.'],
      text:[
        'Log4Shell colocou uma biblioteca de logging no centro da resposta de segurança em 2021. O incidente não corresponde a um único atacante ou campanha. É a história de uma vulnerabilidade cujo alcance dependia de onde o componente estava embutido.',
        'O catálogo identifica CVE-2021-44228 no Apache Log4j. Os avisos do projeto Apache são a referência técnica. A narrativa destaca a diferença entre registrar conteúdo recebido e permitir que esse conteúdo provoque uma ação fora da confiança prevista.',
        'Dependências diretas, componentes de fornecedores e aplicações antigas tornam o inventário parte do problema. O mapa indica alcance global, sem atribuir uma origem única ao incidente. O mecanismo técnico e as etapas de correção devem ser consultados nos advisories.',
        'Um servidor vulnerável, uma tentativa de exploração e uma intrusão confirmada são registros diferentes. Os valores históricos do catálogo são mantidos sem transformá-los em um total oficial. A leitura de impacto precisa conservar essa distinção.',
        'A resposta exige localizar dependências, atualizar componentes e conferir o resultado. O dossiê relaciona o tema a SBOM e transparência. Para qualquer ambiente atual, a referência é a orientação vigente do mantenedor, não apenas uma versão de correção citada em 2021.'
      ]
    },
    mgm:{
      art:'hospitality-context',source:['MGM Resorts · comunicado e 8-K · 05/10/2023','https://investors.mgmresorts.com/2023-10-05-MGM-RESORTS-UPDATE-ON-RECENT-CYBERSECURITY-ISSUE'],
      titles:['A hospitalidade encontrou a interrupção.','A identidade também tem um processo.','A operação revela suas dependências.','O número precisa de uma definição.','Recuperar serviços e proteger clientes.'],
      text:[
        'Em setembro de 2023, a MGM Resorts identificou um incidente que afetou seus sistemas. Em hotéis e cassinos, a dependência digital envolve reservas, atendimento e operação. A imagem editorial representa esse contexto, sem pretender registrar uma propriedade atingida.',
        'O catálogo relata engenharia social e a atribuição pública a grupos. O comunicado da empresa confirma o incidente, mas não comprova sozinho toda a narrativa do acesso inicial. Esta diferença mantém a história legada e a divulgação corporativa em seus respectivos escopos.',
        'A resposta incluiu a interrupção de sistemas para reduzir risco e investigar. A região marcada é Las Vegas, um contexto importante das operações. Ela não delimita todas as propriedades ou dados afetados, nem mostra o percurso de quem acessou a rede.',
        'A empresa estimou impacto negativo de aproximadamente US$ 100 milhões no Adjusted Property EBITDAR do período, além de despesas pontuais. Não se trata de um total mundial de ransomware. A definição da métrica acompanha a referência corporativa.',
        'A recuperação de serviços e a proteção de informação de clientes são tarefas relacionadas. O dossiê conserva medidas contra engenharia social e reforço de identidade. Validar pedidos de acesso exige um processo verificável, sobretudo quando a pressão por atender rápido é alta.'
      ]
    },
    'ukraine-war':{
      local:'assets/images/ep13-russia-ukraine/preview.jpg',credit:'National Police of Ukraine / Sneeuwschaap · CC BY 4.0 · infraestrutura energética após bombardeio, 2022. Arquivo de contexto do conflito; não é prova de ataque digital.',
      titles:['A infraestrutura digital entrou na linha de frente.','Um precedente que atravessou fronteiras.','Campanhas não são um incidente único.','A continuidade civil está em jogo.','Resiliência se constrói antes da crise.'],
      text:[
        'Entre 2022 e 2024, o catálogo acompanha a pressão sobre energia, telecomunicações e serviços públicos ucranianos. A narrativa reúne episódios documentados, sem tratar o intervalo inteiro como um ataque contínuo nem transformar todas as reivindicações em fatos confirmados.',
        'NotPetya permanece um precedente de dano internacional. A invasão em larga escala ampliou a relevância da defesa digital dos serviços civis. O capítulo mantém separados o contexto militar, os incidentes técnicos e os anúncios públicos de autoria.',
        'Em abril de 2022, CERT-UA anunciou ter impedido uma tentativa contra o setor de energia. O mapa situa a infraestrutura ucraniana; não simula deslocamento de ataques. Wipers, DDoS e espionagem têm mecanismos e evidências distintos.',
        'Energia e comunicação afetam diretamente a vida civil. O dossiê não fornece um total financeiro consolidado. A fotografia mostra contexto físico do conflito e é creditada como tal; não documenta uma interrupção causada pelo episódio cibernético descrito.',
        'Segmentação entre TI e OT, recuperação testada e cooperação entre CERTs compõem a leitura operacional. A narrativa separa reivindicações de grupos das avaliações técnicas. O acesso às fontes permite acompanhar quais afirmações foram documentadas por cada organização.'
      ]
    },
    'volt-typhoon':{
      local:'assets/images/ep14-volt-typhoon/preview.jpg',credit:'Leon Brooks · domínio público · antenas de telecomunicação. Arquivo de contexto; não mostra infraestrutura confirmada como vítima.',
      titles:['O risco permaneceu em silêncio.','Acesso preparado para uma crise.','Ferramentas legítimas, comportamento suspeito.','Persistência também tem impacto.','Olhar para o que parece administração.'],
      text:[
        'O intervalo 2021–2024 representa a campanha registrada no catálogo, não uma data única de divulgação. Volt Typhoon foi associado publicamente a intrusões em setores críticos dos EUA e de Guam. A história privilegia a permanência discreta e o significado estratégico do acesso.',
        'Agências caracterizaram a atividade como pré-posicionamento. Essa avaliação é apresentada com sua referência pública, sem afirmar que uma interrupção futura já ocorreu. O risco está na possibilidade de acesso persistente se tornar capacidade operacional em outra circunstância.',
        'Credenciais e ferramentas nativas dificultam separar administração legítima de atividade hostil. O mapa mostra Guam como um dos contextos citados, sem limitar a campanha ao território. O advisory reúne comportamentos e indicadores para consulta.',
        'Não há no dossiê uma perda financeira consolidada. O impacto discutido é a exposição de serviços essenciais e a incerteza sobre acessos persistentes. A fotografia de antenas é ilustrativa do setor, não de uma instalação comprometida.',
        'A defesa depende de inventário de borda, revisão de privilégio e logs úteis. Procurar apenas um nome de malware não cobre o comportamento descrito. A leitura operacional mantém os indicadores nas fontes oficiais, com contexto de data e investigação.'
      ]
    },
    'salt-typhoon':{
      local:'assets/images/ep15-salt-typhoon/preview.jpg',credit:'Nikolai Twin · CC0 · torre de telecomunicações. Contexto de setor; não é uma operadora confirmada como vítima.',
      titles:['A camada que conecta pode observar.','Uma campanha, diferentes recortes públicos.','Roteadores no centro da persistência.','Privacidade e alcance se encontram.','A gestão da rede precisa ser verificável.'],
      text:[
        'O catálogo acompanha Salt Typhoon em um intervalo de 2021 a 2025. A narrativa trata da atividade divulgada contra telecomunicações e infraestrutura de rede. O tempo da campanha e as datas dos avisos públicos permanecem distintos.',
        'Relatórios oficiais associam a atividade a atores patrocinados pela RPC. Nomes de clusters são rótulos de investigação e não substituem a evidência descrita. A leitura preserva o nome público do caso e os limites das atribuições das agências.',
        'O registro enfatiza roteadores, conexões confiáveis e persistência. O mapa usa os EUA como recorte de contexto de telecomunicações, sem representar o alcance internacional completo nem atribuir o tráfego mostrado a uma operadora específica.',
        'Acesso à camada de comunicação cria riscos de privacidade e de observação em escala. O dossiê não oferece um valor financeiro consolidado. A fotografia de torre indica o setor; ela não identifica alvos de espionagem.',
        'Gestão fora de banda, revisão de chaves e observação de configurações compõem a defesa. Avisos de 2024 e 2025 fazem parte da cronologia. A leitura exige confirmar cada comportamento na fonte, evitando concluir comprometimento só por semelhança de um indicador.'
      ]
    },
    'lazarus-modern':{
      local:'assets/images/ep16-lazarus-group/preview.jpg',credit:'Marko Ahtisaari · CC BY 2.0 · instalação de mineração de Bitcoin. Arquivo de contexto; não identifica vítima ou atividade ilícita.',
      titles:['A confiança também movimenta ativos.','Um nome guarda-chuva, várias operações.','Pessoas, pacotes e transações.','O prejuízo depende da investigação.','Verificação fora da confiança automática.'],
      text:[
        'O recorte 2022–2024 relaciona operações norte-coreanas, empresas de blockchain e cadeia de software. Lazarus é tratado como um nome guarda-chuva. A narrativa acompanha padrões documentados sem fundir todas as atividades em uma única organização perfeitamente definida.',
        'As agências usam diferentes nomes para clusters. O aviso TraderTraitor ancora o recorte de empresas de blockchain em 2022. A taxonomia ajuda a organizar pesquisa, mas a defesa depende dos comportamentos e dos acessos descritos.',
        'A cronologia reúne engenharia social e comprometimento de software confiável, incluindo o caso 3CX em 2023. O mapa marca a Coreia do Norte como contexto de atribuição; os alvos são internacionais. Não é um mapa de saída de fundos.',
        'Roubo de ativos, custos de resposta e perda de confiança têm escopos próprios. Os valores variam por investigação, como preservado no catálogo. A fotografia de mineração é contexto do ecossistema e não prova de envolvimento em qualquer incidente.',
        'Validar contatos, dependências e transações fora de banda reduz confiança automática. A defesa também exige proteção de chaves e observação de comportamento. Referências e IOCs ficam vinculados às publicações, sem reproduzir infraestrutura ativa de ataque.'
      ]
    },
    'israel-iran':{
      local:'assets/images/ep17-israel-iran/preview.jpg',credit:'sirdle / TheImaCow · CC BY-SA 2.0 · painel PLC. Arquivo de contexto industrial; não é equipamento confirmado como vítima.',
      titles:['O conflito alcança sistemas de controle.','Separar reivindicação e evidência.','Interfaces expostas, alcance internacional.','O digital tem consequências operacionais.','Reduzir exposição, preservar continuidade.'],
      text:[
        'O recorte 2023–2025 relaciona conflito regional e segurança industrial. A narrativa se ancora no que as agências documentaram sobre PLCs e HMIs Unitronics. Reivindicações de sabotagem e campanhas de influência não são apresentadas automaticamente como resultados técnicos confirmados.',
        'Atores associados ao IRGC e rastreados como CyberAv3ngers aparecem no advisory conjunto. A origem israelense de uma tecnologia não delimita onde ela é usada. A narrativa separa o contexto regional da localização internacional dos equipamentos.',
        'Sistemas expostos e credenciais padrão fazem parte da leitura operacional do advisory. O mapa mostra Israel e Irã como contexto, sem inventar rotas. Cada evento mantém sua data na cronologia e sua ligação às fontes disponíveis.',
        'O risco envolve continuidade de água, energia e outros serviços. Não há um total financeiro oficial consolidado no catálogo. A fotografia de um painel é contexto industrial, identificada e creditada, sem alegar que registra o ataque.',
        'A defesa prioriza remover OT da exposição pública, revisar credenciais e preparar resposta conjunta de TI e operação. O advisory reúne mitigação e indicadores. A leitura preserva a distinção entre risco potencial, comprometimento documentado e alegação pública.'
      ]
    }
  };
  function get(id){return cases[id];}
  function cover(id){var c=get(id);return {src:c.local||'assets/images/documentaries/'+c.art+'.webp',caption:c.credit||reconstruction};}
  function sources(id){var c=get(id);return c.source?[{title:c.source[0],href:c.source[1]}]:[];}
  return {get:get,cover:cover,sources:sources};
})();
