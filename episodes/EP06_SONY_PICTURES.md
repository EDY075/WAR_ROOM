# WAR ROOM — Episódio 06
# SONY PICTURES (2014)
## Gênero: Hollywood Heist / International Espionage
## Voz: Narrador irônico — quebra a quarta parede, estilo *The Big Short*

---

## CAPÍTULO I: AMEAÇA — *"Die Hard"*

### 1. PRÓLOGO — Abertura cinematográfica

Era para ser uma comédia.

Em junho de 2014, a Sony Pictures Entertainment — um dos seis maiores estúdios de Hollywood, com 6.797 computadores, 1.555 servidores e US$ 8 bilhões em receita anual — finalizava a pós-produção de um filme chamado *The Interview*. A premissa era simples: dois jornalistas americanos são recrutados pela CIA para assassinar Kim Jong-un, o líder supremo da Coreia do Norte, durante uma entrevista. Seth Rogen e James Franco no elenco. Comédia pastelão. Nada que Hollywood já não tivesse feito antes.

Exceto que desta vez alguém levou a história a sério.

Em 24 de novembro de 2014, os funcionários da Sony chegaram ao escritório em Culver City, Califórnia, e se depararam com uma tela vermelha. Uma caveira digital. Uma mensagem ameaçadora:

> "Este é o fim do mundo para a Sony."

E então os dados começaram a vazar. Não apenas dados — 100 terabytes deles. Filmes inéditos. Contratos de atores. Salários de executivos. Senhas de e-mails corporativos. Negociações confidenciais. Tudo.

Hollywood não sabia ainda, mas estava prestes a descobrir que sua maior ameaça não era o cinema pirata. Era um governo que não gostou da piada.

---

### 2. CONTEXTO HISTÓRICO — O mundo na época

Novembro de 2014. O mundo estava processando o massacre do Estado Islâmico no Oriente Médio. Ebola assustava a África Ocidental. O Ebola deixou 11 mil mortos — mas o que parou o mundo foi um e-mail vazado de Hollywood.

A Coreia do Norte era, em 2014, um dos países mais isolados do planeta. Kim Jong-un havia assumido o poder em 2011 após a morte de seu pai, Kim Jong-il. Seu regime era caracterizado por testes nucleares (o terceiro havia ocorrido em 2013), violações de direitos humanos sistemáticas e uma economia que dependia de ajuda internacional para sobreviver.

Mas a Coreia do Norte tinha uma arma secreta: uma unidade cibernética chamada Bureau 121, uma divisão do Reconnaissance General Bureau (RGB), a inteligência militar norte-coreana. Localizada em Shenyang, China, a unidade operava sob cobertura diplomática e recrutava hackers desde a adolescência. Estima-se que o Bureau 121 tinha entre 3.000 e 6.000 agentes em 2014.

O governo norte-coreano já havia negado qualquer envolvimento em crimes cibernéticos. Mas isso estava prestes a mudar.

---

### 3. CONTEXTO TECNOLÓGICO — Estado da tecnologia

Em 2014, a segurança cibernética corporativa ainda era tratada como custo, não como investimento. Hollywood, em particular, era notoriamente negligente. A Sony mantinha senhas em planilhas compartilhadas. Funcionários usavam "password" como senha de rede. O departamento de TI era subdimensionado e subfinanciado.

O ransomware ainda não era uma ameaça global dominante — isso viria em 2017 com WannaCry. Em 2014, o principal vetor de ataque corporativo era o phishing. E era exatamente isso que os norte-coreanos usariam para entrar.

A infraestrutura de TI da Sony era fragmentada. A empresa tinha crescido por aquisições — cada estúdio, cada divisão, cada subsidiária mantinha seus próprios sistemas. Não havia uma política unificada de segurança. A rede interna era um labirinto de permissões excessivas, servidores sem patch e backups não verificados.

O resultado era uma orgia de vulnerabilidades esperando para ser explorada.

---

### 4. CONTEXTO POLÍTICO — Cenário geopolítico

O contexto político do ataque à Sony é, acima de tudo, uma história de mal-entendido diplomático — ou talvez de um regime que não entendeu a diferença entre Hollywood e Washington.

**A provocação:** Em 11 de junho de 2014, a Sony lançou o trailer de *The Interview*. A premissa satirizava a Coreia do Norte de forma escancarada. Kim Jong-un era retratado como um bufão obsessivo e paranoico. O departamento de relações públicas da Coreia do Norte, até então inexistente, emitiu uma declaração oficial: o filme era "um ato de guerra" e "um patrocínio estatal ao terrorismo."

**A escalada:** Em 25 de junho, o governo norte-coreano enviou uma carta ao Secretário-Geral da ONU Ban Ki-moon, exigindo que os Estados Unidos impedissem o lançamento do filme. A carta chamava o filme de "produto de ódio" e ameaçava "medidas imprevisíveis" se o filme fosse exibido.

**O alvo:** A Sony não era apenas um estúdio. Era uma multinacional japonesa com operações globais. O ataque a ela enviava uma mensagem: qualquer empresa que desrespeitasse a Coreia do Norte pagaria um preço.

**O timing:** O ataque aconteceu em um momento de tensão crescente entre EUA e Coreia do Norte. Pyongyang havia realizado seu terceiro teste nuclear em 2013. As sanções econômicas estavam em vigor. A administração Obama tentava conter o regime, mas não havia uma estratégia clara para o ciberespaço.

---

### 5. PRIMEIROS SINAIS — Como começou

Os primeiros sinais do que estava por vir foram detectados em setembro de 2014. Analistas de segurança da Symantec notaram atividade suspeita na rede da Sony — comunicações com servidores de comando e controle na Coreia do Norte. Mas a Sony não respondeu aos alertas.

Em 21 de novembro, três dias antes do ataque principal, os hackers testaram as defesas. Um pequeno grupo de funcionários recebeu e-mails de phishing que pareciam vir do departamento de TI da Sony. Os e-mails pediam que os funcionários clicassem em um link para "atualizar suas credenciais". Vários clicaram.

Aqueles cliques entregaram as chaves do reino aos invasores. Os hackers obtiveram acesso a contas de administrador de rede. A partir daí, moveram-se lateralmente pela infraestrutura da Sony — acessando servidores de e-mail, bancos de dados, sistemas de arquivos, tudo.

O mais assustador é que os hackers estavam lá dentro há meses. Eles observavam. Ouviam. Coletavam. E esperavam o momento certo para atacar.

---

### 6. ESCALADA — Como se expandiu

Na madrugada de 24 de novembro de 2014, os hackers executaram o ataque em três fases:

**Fase 1 — Destruição:** Um wiper personalizado, chamado posteriormente de "Shamoon 2.0" ou "Destover" pelos analistas, foi implantado em 3.062 dos 6.797 computadores da Sony e em 837 dos 1.555 servidores. O malware sobrescrevia o setor de boot (MBR) com uma caveira vermelha e a mensagem "Hacked by #GOP". Depois, apagava todos os dados do disco rígido e o tornava inutilizável.

**Fase 2 — Vazamento:** 100 terabytes de dados foram copiados para servidores externos antes do wiper ser ativado. Esses dados incluíam:

- 5 filmes inéditos (incluindo *Annie*, *Mr. Turner*, *Fury*)
- Roteiros de filmes não lançados
- Contratos de atores e executivos
- E-mails corporativos de centenas de funcionários
- Senhas de contas de e-mail e redes sociais
- Informações médicas de funcionários
- Dados financeiros detalhados

**Fase 3 — Extorsão:** O grupo "Guardians of Peace" (GOP) exigiu que a Sony cancelasse o lançamento de *The Interview* — caso contrário, mais dados seriam vazados e ameaças físicas seriam feitas contra cinemas que exibissem o filme.

O vazamento foi orquestrado como uma série de bombas de dados — cada dia, um novo lote de arquivos era liberado no domínio público via Pastebin, sites de compartilhamento e torrents.

---

### 7. MOMENTO CRÍTICO — Ponto de virada

O ponto de virada do ataque à Sony não foi a destruição técnica — foi a decisão de uma empresa de cancelar um filme por medo.

Em 16 de dezembro de 2014, os hackers publicaram uma ameaça direta: "Lembrem-se do 11 de setembro de 2001. Recomendamos que se mantenham distantes [dos cinemas] na época do lançamento do filme." A ameaça mencionava explicitamente o World Trade Center e pedia que as pessoas "não fossem ao cinema" no dia do lançamento.

O Departamento de Segurança Interna dos EUA (DHS) emitiu um alerta. Mas a decisão final foi da Sony.

Em 17 de dezembro, a Sony Pictures anunciou que havia cancelado o lançamento de *The Interview* nos cinemas. Nenhum filme — uma comédia pastelão sobre dois jornalistas — estrearia. O estúdio havia se curvado a ameaças de um regime que mal reconhecia a existência da internet.

A reação foi imediata e furiosa. O presidente Obama criticou a decisão em uma coletiva de imprensa: "Lamento que a Sony tenha tomado essa decisão. Acho que cometeram um erro."

---

### 8. INVESTIGAÇÃO — Como descobriram os responsáveis

A investigação do FBI foi rápida e controversa.

**Evidência técnica:**
- O código do wiper compartilhava assinaturas com malwares atribuídos anteriormente à Coreia do Norte (especificamente o malware usado contra a mídia sul-coreana em 2013, operação "DarkSeoul").
- Os IPs de comando e controle rastreados pertenciam a servidores na Coreia do Norte e na China.
- O código parava de funcionar se detectasse que o sistema estava em coreano — uma precaução para evitar danos colaterais à Coreia do Sul.

**Evidência operacional:**
- A cronologia do ataque coincidia exatamente com as declarações públicas norte-coreanas contra *The Interview*.
- A infraestrutura usada tinha ligações conhecidas com o Bureau 121.

**A controvérsia:**
Mas a atribuição não foi unânime. Empresas de segurança independentes questionaram a conclusão do FBI. O grupo "Guardians of Peace" usava inglês fluente, não coreano. As horas de operação eram consistentes com fusos horários do Leste Europeu, não da Ásia. Havia quem argumentasse que a Coreia do Norte estava assumindo a responsabilidade por um ataque que poderia ter sido obra de insiders (ex-funcionários) ou de grupos hacktivistas independentes.

A Snowden apoiou a tese alternativa: "A evidência mais forte contra a Coreia do Norte é que a Sony disse que era a Coreia do Norte, e o governo dos EUA concordou."

Mesmo assim, em 19 de dezembro de 2014, o FBI anunciou oficialmente: a Coreia do Norte era responsável. Obama impôs sanções adicionais contra Pyongyang.

---

### 9. RESPOSTA MUNDIAL — Reação de governos e empresas

**Estados Unidos:** Obama classificou o ataque como "vandalismo cibernético" — não ato de guerra, mas vandalismo. A diferença importa: ato de guerra justificaria retaliação militar. Vandalismo justificou sanções. A administração evitou escalar o conflito.

**Sony Pictures:** O então CEO Michael Lynton navegou por uma crise existencial. A empresa eventualmente reverteu a decisão de cancelar o filme — *The Interview* foi lançado em cinemas independentes e plataformas digitais em 25 de dezembro de 2014. A Sra. Lynton, aliás, pediu demissão dois meses depois.

**Coreia do Norte:** Pyongyang negou veementemente o ataque. O governo norte-coreano ridicularizou o FBI, chamando a investigação de "farsa" e oferecendo-se para investigar o ataque junto com os EUA — uma oferta que Washington recusou.

**Hollywood:** Os estúdios acordaram para a segurança cibernética da pior forma possível. A indústria cinematográfica, que tratava segurança como problema de TI, passou a tratá-la como problema de diretoria. Conselhos de segurança foram criados. Seguros cibernéticos se tornaram obrigatórios.

**O público:** Recebeu 100 terabytes de fofocas salgadas. E-mails de executivos foram devorados por jornalistas. A revelação de que Amy Pascal havia se referido a Barack Obama como "fã de filmes de negros" (numa troca de e-mails com a produtora Scott Rudin sobre convidar o presidente para um evento) causou enorme constrangimento. Pascal foi demitida em fevereiro de 2015.

---

### 10. CONSEQUÊNCIAS — Resultados imediatos

**Para a Sony:**
- US$ 15 milhões em custos de investigação forense e reparação
- US$ 35 milhões em custos de TI (substituição de 3.000 computadores e 800 servidores)
- US$ 50 milhões em perda de receita de bilheteria (lançamento prejudicado de *The Interview* e outros filmes)
- Amy Pascal, co-presidente da Sony Pictures, foi demitida em fevereiro de 2015 (embora recebesse um pacote de US$ 40 milhões)
- O estúdio levou dois anos para se recuperar completamente

**Para Hollywood:**
- A segurança cibernética deixou de ser custo para ser prioridade
- Seguros cibernéticos dispararam em preço e se tornaram obrigatórios
- A MPAA (Motion Picture Association of America) criou um centro de compartilhamento de inteligência de ameaças

**Para a Coreia do Norte:**
- Sanções adicionais foram impostas pelo governo Obama
- O Bureau 121 ganhou notoriedade global
- O ataque à Sony se tornou um modelo para futuras operações norte-coreanas (Bangladesh Bank 2016, WannaCry 2017)

**Para o mundo:**
- O precedente estava estabelecido: estados-nação atacavam corporações por conteúdo cultural
- O debate sobre censura, liberdade de expressão e segurança cibernética ganhou nova dimensão

---

### 11. IMPACTO FINANCEIRO — Tabela de custos

| Entidade | Custo Estimado | Descrição |
|----------|---------------|-----------|
| **Sony Pictures (reparação)** | US$ 15 milhões | Investigação forense, limpeza de sistemas, consultoria jurídica |
| **Sony Pictures (substituição)** | US$ 35 milhões | Troca de 3.062 computadores, 837 servidores, infraestrutura de rede |
| **Sony (perda de receita)** | US$ 50 milhões | Cancelamento de lançamentos, atrasos em produções, perda de bilheteria |
| **Sony (valor de mercado)** | US$ 200 milhões | Queda no valor das ações da Sony Corporation pós-ataque |
| **Hollywood (investimento em segurança)** | US$ 500 milhões+ | Novos sistemas, treinamento, seguros, consultorias |
| **Coreia do Norte (sanções)** | Incalculável | Sanções adicionais dos EUA, isolamento diplomático |
| **Custo total estimado** | **US$ 300 milhões+** | Soma de impactos diretos + perda de valor de mercado |

---

### 12. IMPACTO HUMANO — Histórias pessoais

**Amy Pascal, co-presidente da Sony Pictures:**

A mulher que dirigiu a Sony durante a era *Spider-Man* e *Skyfall* viu sua carreira implodir por causa de um e-mail. Em 9 de dezembro de 2014, a revista Variety publicou um e-mail interno em que Pascal chamava o presidente Barack Obama de "fã de filmes de negros" no contexto de discutir quais filmes ele poderia gostar. A declaração, extraída de contexto, foi um escândalo nacional. Pascal pediu desculpas e foi demitida dois meses depois. Ela recebeu US$ 40 milhões como pacote de saída — mas sua reputação em Hollywood nunca se recuperou.

**O analista da Symantec que detectou o ataque:**

Um analista anônimo de segurança que identificou os primeiros sinais do ataque em setembro relatou à imprensa a frustração: "Enviamos relatórios para a Sony. Ninguém respondeu." O analista, que acompanhou a história de longe, disse que sentia como se "um paciente com câncer tivesse ignorado o diagnóstico."

**Scott Rudin, produtor de Hollywood:**

Rudin foi um dos executivos mais expostos nos vazamentos. Seus e-mails agressivos e exigências irracionais tornaram-se públicos. Rudin, que já tinha reputação de ser difícil, viu sua imagem pública se deteriorar. Ele se afastou da produção por um ano.

**Os funcionários comuns da Sony:**

3.062 funcionários perderam acesso a seus computadores da noite para o dia. Muitos não puderam trabalhar por semanas. Dados pessoais — incluindo informações médicas e números de seguridade social — foram expostos. A Sony ofereceu serviços de monitoramento de crédito, mas o dano estava feito. Para muitos, o roubo de dados foi uma violação profunda.

---

### 13. LIÇÕES APRENDIDAS

1. **Comédia não é desculpa para negligência de segurança.** A Sony ignorou alertas de segurança por meses. Uma piada sobre Kim Jong-un não justifica o ataque, mas a falta de preparo o tornou possível.

2. **Phishing continua sendo o vetor de ataque mais eficaz.** Não importa o tamanho da empresa — um clique descuidado de um funcionário pode comprometer tudo. Treinamento de conscientização não é opcional.

3. **A segmentação de rede salva vidas (digitais).** Os hackers se moveram lateralmente pela rede da Sony porque não havia segmentação entre departamentos. Uma falha de segurança no RH podia comprometer a produção de filmes.

4. **Governos estrangeiros podem ter um senso de humor muito baixo.** E uma capacidade de retaliação cibernética muito alta. *The Interview* não valeu o preço que a Sony pagou.

5. **Ceder a ameaças cibernéticas não funciona.** A Sony cancelou *The Interview* por medo. O filme vazou de qualquer forma. Os dados continuaram sendo expostos. Ceder não impediu o dano.

6. **A quarta parede entre Hollywood e Washington é porosa.** O ataque à Sony foi um ataque à liberdade de expressão americana — mesmo que o alvo específico fosse uma corporação. A linha entre ataque corporativo e ataque nacional é tênue.

7. **Atribuição de ataques cibernéticos nunca é 100% certa.** Mesmo com a conclusão do FBI, analistas independentes questionaram. A atribuição cibernética é uma ciência imperfeita e sempre haverá margem para dúvida.

8. **Nunca escreva nada em um e-mail corporativo que você não gostaria de ver na primeira página do New York Times.** Os e-mails vazados da Sony destruíram carreiras e expuseram o lado mais feio de Hollywood.

---

### 14. LEGADO — O que mudou no mundo

**O ataque à Sony foi o 11 de setembro da segurança cibernética corporativa.** Antes, as empresas tratavam ataques cibernéticos como risco operacional. Depois, como risco existencial.

**Hollywood mudou:** A MPAA criou um centro de inteligência de ameaças específico para a indústria do entretenimento. Grandes estúdios passaram a contratar CISOs (Chief Information Security Officers) com orçamentos reais.

**A Coreia do Norte virou um player cibernético global:** Antes de Sony, o Bureau 121 era um segredo de estado. Depois, tornou-se o principal ator de ameaças cibernéticas do mundo — responsável por Bangladesh Bank (US$ 81 milhões roubados), WannaCry (US$ 4 bilhões em danos) e dezenas de outros ataques.

**O precedente de censura via ciberataque:** Pela primeira vez, um estado-nação usou um ciberataque para prevenir a distribuição de conteúdo cultural. Isso abriu um precedente perigoso: se a Coreia do Norte podia fazer isso, outros também podiam.

---

### 15. CURIOSIDADES — 6 fatos surpreendentes

1. **A Sony gastou mais em psicólogos para funcionários do que em firewalls.** Após o ataque, a empresa ofereceu aconselhamento psicológico para funcionários que se sentiram violados pela exposição de seus dados pessoais.

2. **O filme *The Interview* fez US$ 40 milhões em vendas digitais em 4 dias.** Mais do que faria provavelmente nos cinemas. O ataque cibernético, paradoxalmente, tornou o filme mais famoso do que ele jamais seria.

3. **A Coreia do Norte teve a internet derrubada por 10 dias após o ataque.** Derrubada — por quanto, não se sabe. Suspeita-se que foi retaliação dos EUA. A Coreia do Norte ficou offline por 10 dias em dezembro de 2014. Washington não confirmou nem negou.

4. **Os hackers usaram servidores de comando e controle na Coreia do Norte — mas também na Bolívia, Tailândia e Ucrânia.** A diversidade geográfica foi uma tentativa de confundir a atribuição.

5. **O CEO da Sony, Michael Lynton, disse que o estúdio foi "atingido por uma bomba nuclear cibernética".** A frase foi usada em uma teleconferência com investidores em janeiro de 2015.

6. **Um dos funcionários da Sony disse ao The Guardian: "Eu não sabia que a Coreia do Norte tinha internet."** O funcionário não estava sozinho na ignorância.

---

### 16. LINHA DO TEMPO — Tabela cronológica

| Data | Evento |
|------|--------|
| **2014 (jun)** | Trailer de *The Interview* é lançado |
| **2014 (jun)** | Coreia do Norte chama o filme de "ato de guerra" |
| **2014 (set)** | Hackers começam a infiltrar a rede da Sony |
| **2014 (nov)** | Sony ignora alertas da Symantec sobre atividade suspeita |
| **2014 (21 nov)** | Phishing bem-sucedido compromete contas de administrador |
| **2014 (24 nov)** | Caveira vermelha aparece nas telas dos funcionários |
| **2014 (24 nov)** | 3.062 computadores e 837 servidores são destruídos |
| **2014 (dez)** | Vazamentos diários de 100 TB de dados começam |
| **2014 (16 dez)** | Hackers ameaçam cinemas com ataque terrorista |
| **2014 (17 dez)** | Sony cancela lançamento de *The Interview* |
| **2014 (19 dez)** | FBI atribui ataque à Coreia do Norte |
| **2014 (23 dez)** | Coreia do Norte tem internet derrubada (suspeita de retaliação americana) |
| **2014 (25 dez)** | *The Interview* é lançado em cinemas independentes e VOD |
| **2015 (fev)** | Amy Pascal é demitida da Sony Pictures |

---

### 17. REFERÊNCIAS HISTÓRICAS — Fontes

1. **FBI.** "FBI Director James Comey on Sony Hack: 'North Korea Was the Actor.'" Departamento de Justiça dos EUA, 19 de dezembro de 2014.
2. **The New York Times.** "Sony Hack by North Korea Is Confirmed by F.B.I." David E. Sanger, Nicole Perlroth, Martin Fackler, 17 de dezembro de 2014.
3. **WIRED.** "The Sony Hack: How It Happened and What's at Stake." Kim Zetter, 2014.
4. **Symantec.** "Sony Hack: Destover Wiper Analysis." Symantec Security Response, 2014.
5. **Kaspersky Lab.** "Sony/Destover: Attribution and Analysis." 2014.
6. **CrowdStrike.** "Sony Hack: The Lazarus Group and the Bureau 121." CrowdStrike Global Threat Intelligence, 2015.
7. **The Guardian.** "Sony Hack: A Timeline of Events." 18 de dezembro de 2014.
8. **CISA.** "Alert (AA14-353A): Targeted Cyber Intrusion Activity Related to the Sony Pictures Entertainment Hack." 2014.
9. **MIT Technology Review.** "The Sony Hack: How North Korea's Cyber Army Operates." 2015.

---

*Fim do Episódio 06*
