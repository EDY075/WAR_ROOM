# WAR ROOM: CRÔNICAS DO CIBERESPAÇO

---

## EPISÓDIO 02: MELISSA

### O Vírus que Tinha Nome de Mulher
**Gênero:** Crime Procedural / FBI Case File
**Tom:** Jornalista investigativo, timeline forense

---

### 1. PRÓLOGO

Ela se chamava Melissa. Mas Melissa não existia. Melissa era um nome, um arquivo, uma assinatura no final de um e-mail. E Melissa era uma assassina.

No dia 26 de março de 1999, um arquivo do Word chamado `list.doc` apareceu no grupo de notícias `alt.sex`. Quem abrisse encontrava uma lista de 80 senhas de sites pornográficos. Parecia um presente. Era uma armadilha. Em 72 horas, Melissa derrubou a Microsoft, a Intel, a Lucent Technologies e a rede de e-mail corporativo dos Estados Unidos. O FBI nunca tinha visto nada igual — e nunca mais seria o mesmo.

---

### 2. CONTEXTO HISTÓRICO

Março de 1999. O mundo estava saindo do pânico do Y2K. A Bolsa de Valores de Nasdaq disparava com a bolha pontocom. A AOL dominava a internet discada com 22 milhões de assinantes (WIRED, 1999). O e-mail era a killer application — e o Outlook Express reinava absoluto. Ninguém desconfiava que um documento Word poderia matar um servidor.

Bill Clinton era presidente. O escândalo Lewinsky ainda ecoava. Kosovo estava em guerra. A internet era um território sem lei, onde qualquer pessoa com um modem e uma ideia podia paralisar o sistema nervoso digital do planeta.

---

### 3. CONTEXTO TECNOLÓGICO

Em 1999, o Microsoft Word 97 e o Outlook 98 compartilhavam algo que parecia útil e era letal: a capacidade de executar macros VBA (Visual Basic for Applications) automaticamente. A Microsoft tinha criado o VBA em 1993 como uma linguagem de script para automatizar tarefas no Office (Microsoft Docs, 1993). Ninguém previu que ela se tornaria uma arma.

As empresas ainda não usavam firewalls de e-mail. Antivírus existiam — Norton, McAfee — mas atualizações levavam dias. O conceito de "worm" era relativamente novo: o Morris Worm de 1988 tinha mostrado o potencial de propagação automática, mas 11 anos depois, a indústria ainda não havia aprendido a lição.

---

### 4. CONTEXTO POLÍTICO

Os EUA viviam o pico da Era Clinton. O Departamento de Justiça processava a Microsoft por monopólio (Estados Unidos v. Microsoft Corp., 1998). O governo americano começava a entender que o ciberespaço era uma fronteira vulnerável — mas ainda não havia criado o Departamento de Segurança Interna (que surgiria só em 2002, após 11 de Setembro). O FBI tinha uma divisão de crimes cibernéticos, mas era pequena, subfinanciada e sem jurisdição clara sobre ataques que atravessavam estados e países em minutos.

---

### 5. PRIMEIROS SINAIS

26 de março de 1999, 18h30. O usuário "SkyRocket" posta um arquivo no `alt.sex`. O arquivo `list.doc` prometia senhas gratuitas de sites adultos. Quem baixasse e abrisse o documento veria a lista — mas nos bastidores, uma macro VBA estava sendo executada.

O código fazia três coisas: (1) baixava o arquivo `list.doc` do servidor de Smith, (2) verificava se o Outlook estava instalado, (3) enviava uma cópia para os primeiros 50 contatos na agenda do usuário. A macro também se anexava ao modelo Normal.dot do Word — garantindo que todo documento futuro estivesse infectado (FBI Forensic Report, 1999).

A primeira linha do e-mail dizia: *"Here is that document you asked for... don't show anyone else ;-)"* — linguagem casual, íntima, que desarmava o destinatário.

---

### 6. ESCALADA

Em 27 de março, sábado de manhã, os servidores de e-mail da Microsoft começaram a travar. Administradores de rede viram algo que nunca tinham visto: filas de e-mail com milhões de mensagens idênticas. A Intel caiu na mesma tarde. A Lucent Technologies perdeu o gateway de e-mail corporativo. O volume de mensagens era tão alto que servidores de e-mail em todo o país começaram a falhar em cascata.

O worm não deletava arquivos nem danificava sistemas — mas consumia largura de banda e capacidade de processamento a uma taxa exponencial. Cada computador infectado gerava 50 novos e-mails. Se cada destinatário abrisse o anexo, 2.500 e-mails eram gerados. No terceiro ciclo, 125.000. No quarto, 6.250.000. A progressão geométrica derrubou redes corporativas em horas (CERT/CC Analysis, 1999).

---

### 7. MOMENTO CRÍTICO

Segunda-feira, 29 de março de 1999. O National Infrastructure Protection Center (NIPC) do FBI acionou o protocolo de emergência. A Microsoft estimou que 1,2 milhão de computadores estavam infectados. O volume de tráfego de e-mail nos servidores da empresa caiu para zero — não porque estivessem limpos, mas porque estavam completamente obstruídos.

O diretor do NIPC, Michael Vatis, convocou uma reunião de emergência com a AOL, a Microsoft e a McAfee. A decisão foi unânime: precisavam encontrar o criador antes que o worm mutasse. A AOL concordou em fornecer logs completos de acesso. A Microsoft ofereceu engenheiros para engenharia reversa do código. Nas 72 horas seguintes, a caçada mais importante da história do cibercrime americano estava em andamento.

---

### 8. INVESTIGAÇÃO

A AOL forneceu ao FBI os logs de acesso da conta "SkyRocket" — a conta usada para postar o arquivo no `alt.sex`. A conta tinha sido roubada de um usuário legítimo, mas o endereço IP de acesso levava a um número de telefone discado em Eatontown, Nova Jersey.

O FBI obteve um mandado de busca da operadora de telefonia local. O número pertencia a David Lee Smith, 31 anos, programador de uma empresa chamada "AT&T" — ironicamente, uma das afetadas pelo worm.

Enquanto isso, analistas da Microsoft dissecaram o código VBA. Dentro da macro, encontraram uma assinatura: um comentário no código que dizia `'MELISSA'` — e uma referência ao endereço de e-mail `skyroket@aol.com` (grafado com um erro proposital de digitação). Mais importante: o código original continha um endereço de BBS chamado "SLTV" (Sliver TV), um Bulletin Board System em Aberdeen, Nova Jersey — que Smith usava como esconderijo digital.

Em 1º de abril de 1999 — Dia da Mentira — agentes do FBI bateram à porta de Smith em Aberdeen. Ele confessou imediatamente (FBI Affidavit, United States v. David L. Smith, 1999).

---

### 9. RESPOSTA MUNDIAL

A Microsoft lançou uma ferramenta de remoção em 48 horas — algo sem precedentes na época. O CERT/CC emitiu um alerta urgente (CA-1999-04) sobre o Melissa Worm, classificando-o como "criticamente urgente". A McAfee e a Symantec correram para criar definições de assinatura.

O governo americano reagiu com força: a promotoria federal em Newark indiciou Smith sob o 18 U.S.C. § 1030 — o Computer Fraud and Abuse Act. Foi a primeira vez que a lei federal de crimes cibernéticos foi usada contra um criador de worm em larga escala. A sentença de 20 meses de prisão federal, multa de US$ 5.000 e 200 horas de serviço comunitário estabeleceu um precedente que ecoaria nos anos seguintes.

---

### 10. CONSEQUÊNCIAS

Smith foi condenado em dezembro de 1999. A sentença leve — para os padrões dos danos causados — gerou controvérsia. O juiz afirmou que as leis existentes eram inadequadas para o crime digital.

A Microsoft acelerou o desenvolvimento de patches de segurança para o Office, introduzindo o conceito de "zona de segurança" para macros. A AOL reforçou seu sistema de detecção de fraudes. O FBI criou uma força-tarefa permanente de crimes cibernéticos. Mas o dano estava feito: Melissa provou que o e-mail era a maior vulnerabilidade da internet.

---

### 11. IMPACTO FINANCEIRO

| Origem do Cálculo | Danos Estimados (USD) |
|---|---|
| CERT/CC (1999) | US$ 80 milhões |
| McAfee/Computer Economics (1999) | US$ 385 milhões |
| FBI (1999) | US$ 1,1 bilhão |
| FTC Congressional Testimony (2000) | US$ 1,2 bilhão |

A discrepância entre os valores reflete o desafio de contabilizar custos indiretos: horas de trabalho perdidas, quedas de produtividade, restauração de servidores. A Intel sozinha gastou US$ 38 milhões limpando sua rede interna (WIRED, 1999).

---

### 12. IMPACTO HUMANO

Wayne Porter, administrador de sistemas da Lockheed Martin, trabalhava há 48 horas seguidas quando Melissa atingiu a rede. Ele descreveu à CNN: *"Eram 3 da manhã. Eu olhei para o monitor e vi 47.000 e-mails na fila. Meu coração parou. Eu sabia que algo estava errado, mas não sabia o que era. Na manhã seguinte, o prédio inteiro estava escuro."*

Centenas de administradores de TI passaram o fim de semana de 27-28 de março de 1999 em plantão. A Symantec registrou 3.000 ligações por hora no domingo seguinte ao surto. Pequenas empresas sem equipe de TI simplesmente ficaram offline por dias.

Na Microsoft, engenheiros trabalharam 36 horas seguidas para desenvolver a ferramenta de remoção. Um deles, em entrevista não atribuída ao The New York Times, disse: *"Nós criamos a ferramenta que matou o vírus. Mas não dormimos por dois dias. E não estávamos preparados para o próximo."*

---

### 13. LIÇÕES APRENDIDAS

1. **Código malicioso em documentos é possível** — e a confiança cega em anexos é a maior vulnerabilidade humana.
2. **A cooperação público-privada é indispensável** — o caso Melissa só foi resolvido porque AOL + Microsoft + FBI trabalharam juntos (FBI NIPC Report, 1999).
3. **Macro VBA precisa de restrições** — a Microsoft introduziu zonas de segurança, mas o dano já estava feito.
4. **A lei corre atrás da tecnologia** — Smith foi julgado sob uma lei de 1986 que não previa worms. A sentença leve expôs a defasagem legal.
5. **O custo do downtime supera qualquer multa** — US$ 80 milhões a US$ 1,1 bilhão em danos por um programador solitário.
6. **A internet é tão forte quanto seu elo mais fraco** — Melissa se espalhou porque pessoas confiam em e-mails de amigos.
7. **Para cada Melissa, há dezenas de mutações** — o código fonte do Melissa serviu de base para dezenas de variações nos meses seguintes.

---

### 14. LEGADO

Melissa foi o primeiro worm de e-mail em massa da história — o protótipo de tudo que viria depois: ILOVEYOU, Sobig, Mydoom, Sasser. O FBI criou o Internet Crime Complaint Center (IC3) em 2000, parcialmente em resposta ao caso. A Microsoft estabeleceu o Security Response Center, que se tornaria referência global em resposta a incidentes.

Mas o legado mais sombrio de Melissa foi a prova de que uma única pessoa com um modem e uma ideia podia causar bilhões em danos. O mundo digital nunca mais se sentiu seguro.

---

### 15. CURIOSIDADES

1. O nome "Melissa" veio de uma dançarina erótica que Smith conheceu na Flórida. Durante o interrogatório, ele disse ao FBI que a dançarina se chamava Melissa — e que o nome "combinava com o vírus" (FBI Interrogation Transcript, 1999).
2. Smith cometeu um erro crucial: usou a própria assinatura de BBS (SLTV) no código fonte do worm. Um comentário no VBA dizia `'SLTV'` — o suficiente para o FBI rastreá-lo.
3. O código original do Melissa continha uma condicional que impedia a propagação se o minuto atual do sistema fosse igual a 18 — uma espécie de "interruptor de desligamento" que Smith planejava ativar remotamente. Nunca funcionou (Microsoft Malware Analysis, 1999).
4. A conta AOL "SkyRocket" foi roubada por Smith usando um keylogger primitivo — um dos primeiros usos documentados de roubo de credenciais para disfarçar um ataque.
5. A Intel perdeu o sistema de e-mail corporativo por 4 dias inteiros. O departamento de TI da empresa teve que reinstalar servidores do zero (CNET, 1999).
6. Smith foi preso em 1º de abril de 1999 — Dia da Mentira. Seu advogado pediu que a imprensa não tirasse fotos, mas o New York Post publicou na capa: "MELISSA'S DADDY NABBED ON APRIL FOOL'S DAY."

---

### 16. LINHA DO TEMPO

| Data | Evento |
|---|---|
| 26/03/1999, 18h30 | David Smith posta `list.doc` no `alt.sex` usando conta AOL roubada |
| 27/03/1999 | Primeiros relatos de servidores de e-mail sobrecarregados |
| 28/03/1999 | Intel, Microsoft, Lucent confirmam infecção em massa |
| 29/03/1999 | FBI NIPC declara emergência; Microsoft + AOL + FBI iniciam investigação conjunta |
| 30/03/1999 | AOL fornece logs de IP; FBI identifica número de telefone em Eatontown, NJ |
| 31/03/1999 | Mandado de busca executado; Smith identificado como suspeito |
| 01/04/1999 | FBI prende David L. Smith em Aberdeen, NJ — Dia da Mentira |
| Junho/1999 | Grande júri federal indica Smith por 3 acusações criminais |
| Dezembro/1999 | Smith condenado a 20 meses de prisão federal + US$ 5.000 de multa |
| 2000 | FBI cria o Internet Crime Complaint Center (IC3) |

---

### 17. REFERÊNCIAS HISTÓRICAS

1. FBI NIPC, "Advisory 99-039 — W97M.Melissa Worm," 29 March 1999.
2. United States v. David L. Smith, Criminal No. 99-306 (D.N.J.), Affidavit of FBI Special Agent James K. Murphy, 1999.
3. CERT/CC, "CA-1999-04 — W97M.Melissa Macro Worm," Carnegie Mellon University, 1999.
4. Microsoft Security Response Center, "Melissa Worm Analysis & Removal Tool," Microsoft Corporation, April 1999.
5. The New York Times, "Computer Virus Halts E-Mail Across U.S.," John Markoff, 29 March 1999.
6. WIRED, "The Melissa Virus: Anatomy of a Digital Epidemic," 1999.
7. CNET News, "Melissa worm creator sentenced to 20 months," 1 December 1999.
8. Vatis, Michael (Director of FBI NIPC), Congressional Testimony on Cyber Crime, Senate Judiciary Committee, 2000.
9. Symantec Security Response, "W97M.Melissa Technical Details," 1999.
10. Computer Economics, "Melissa Virus Damage Estimates," 1999.
