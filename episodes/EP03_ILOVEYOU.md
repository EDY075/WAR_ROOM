# WAR ROOM: CRÔNICAS DO CIBERESPAÇO

---

## EPISÓDIO 03: ILOVEYOU

### A Carta de Amor que Matou a Inocência Digital
**Gênero:** Tragédia Clássica — Estrutura de Tragédia Grega
**Tom:** Coro grego, poético, trágico, moral

---

### PRÓLOGO

*No dia 4 de maio de 2000, 55 milhões de pessoas abriram seus corações. E o mundo inteiro sangrou.*

Chegou como uma carta de amor. Assunto: *"ILOVEYOU"*. Remetente: um amigo. Corpo da mensagem: *"Kindly check the attached LOVELETTER coming from me."* Quem clicasse no anexo `LOVE-LETTER-FOR-YOU.TXT.VBS` não via uma carta — via o apocalipse. Em cinco dias, o worm que começou em um cybercafé em Manila devastou o Pentágono, a CIA, o Parlamento Britânico e dezenas de milhares de empresas. E quando o mundo quis prender o culpado, descobriu que a lei não alcançava o código.

---

### CONTEXTO HISTÓRICO

Maio de 2000. A bolha pontocom estava no pico — o Nasdaq atingiria 5.048 em 10 de março daquele ano. A internet era sinônimo de promessa, riqueza, futuro. O Windows 2000 havia sido lançado em fevereiro. O Outlook Express era o cliente de e-mail mais usado do planeta. 55 milhões de pessoas tinham acesso à internet nos Estados Unidos (Pew Research, 2000). No resto do mundo, a web ainda era uma novidade — e o e-mail, o principal motivo para entrar online.

Nas Filipinas, um estudante de 24 anos da AMA Computer College em Manila tentava pagar a conta de internet discada. Onel de Guzman não tinha dinheiro para o acesso que precisava para seu curso de ciência da computação. Sua solução, rejeitada pelos professores, se tornaria a maior catástrofe digital até então.

---

### CONTEXTO TECNOLÓGICO

O VBScript (Visual Basic Scripting Edition) era uma linguagem de script criada pela Microsoft em 1996, projetada para automação no Windows. Seu poder era sua maldição: o VBScript tinha acesso total ao sistema de arquivos, ao registro do Windows e — através do Outlook Object Model — ao cliente de e-mail.

Diferente do Melissa, que era um macro virus VBA dentro de um documento Word, o ILOVEYOU era um arquivo `.vbs` autônomo. O Windows 2000 e Windows 98 escondiam extensões de arquivo conhecidas por padrão — então `LOVE-LETTER-FOR-YOU.TXT.VBS` aparecia como `LOVE-LETTER-FOR-YOU.TXT`. A vítima via um arquivo de texto. O que recebia era um executável de script.

Antivírus da época usavam assinatura de arquivo — comparação de hash com uma base de malwares conhecidos. ILOVEYOU era tão novo que nenhum antivírus o reconhecia. E quando as definições de assinatura chegaram, 48 horas depois, o worm já havia se espalhado por 55 milhões de máquinas.

---

### CONTEXTO POLÍTICO

Segundo mandato de Bill Clinton. A Guerra Fria havia terminado há uma década. O Pentágono estava na era pós-Saddam, pré-11 de Setembro. A segurança cibernética era tratada como questão técnica, não de segurança nacional. O Clipper Chip e o Crypto Wars dos anos 90 haviam sido sobre criptografia — não sobre worms.

As Filipinas, ex-colônia americana, tinham relações estreitas com os EUA — mas seu código penal datava de 1930. Não havia lei de crimes cibernéticos. O conceito de "acesso não autorizado a computador" simplesmente não existia na lei filipina. Essa lacuna jurídica se tornaria o centro da tragédia.

---

### PRIMEIROS SINAIS

4 de maio de 2000, 9h em Manila. Onel de Guzman, em um cybercafé no bairro de Sampaloc, lança o worm. O primeiro alvo é o servidor de e-mail da AMA Computer College — onde seus professores haviam rejeitado sua tese. De lá, o worm se propaga para contatos pessoais de estudantes e professores.

Às 10h, um administrador de sistemas na Europa percebe um padrão anômalo: milhares de e-mails com assunto "ILOVEYOU" chegando simultaneamente. Às 11h, o primeiro relatório chega ao CERT/CC. Às 12h, a Microsoft recebe relatos internos. Às 13h, a CNN recebe a primeira chamada de uma empresa de Wall Street que perdeu o sistema de e-mail.

Em 4 horas, o worm havia cruzado todos os fusos horários. Enquanto Manila dormia, Londres e Nova York acordavam para o inferno.

---

### ESCALADA

O worm ILOVEYOU não só se propagava: ele destruía. Cada máquina infectada executava um script que:
— Sobrescrevia arquivos `.jpg`, `.jpeg`, `.mp3`, `.mp2`, `.mpg`, `.mpeg`, `.avi`, `.wav`, `.doc`, `.xls`, `.ppt`, `.zip`, `.rar` — com uma cópia de si mesmo
— Coletava senhas do Internet Explorer e as enviava para um e-mail nas Filipinas
— Baixava um cavalo de Troia (`WIN-BUGSFIX.EXE`) que roubava senhas adicionais
— Se copiava para pastas IRC e mIRC, transformando chats em vetores de propagação
— Modificava o registro do Windows para executar na inicialização

(Análise Técnica — CERT/CC CA-2000-04)

Em empresas onde um único funcionário abria o anexo, o worm se espalhava para toda a lista de e-mails corporativos em segundos. Cada ciclo gerava dezenas de novos e-mails. A taxa de duplicação era maior que a do Melissa porque o ILOVEYOU não precisava de macro do Word — era um script independente.

---

### MOMENTO CRÍTICO

5 de maio de 2000, 8h. O Pentágono desliga todo o sistema de e-mail não-classificado do Departamento de Defesa. Milhares de militares e civis ficam sem comunicação interna. Às 9h, a CIA faz o mesmo. Às 10h, o Parlamento Britânico desconecta sua rede. O sistema de e-mail da Câmara dos Comuns cai completamente (BBC News, 2000).

A Ford Motor Company perde o sistema de e-mail global por 5 dias. A Dow Chemical desliga 30.000 computadores preventivamente. A Volkswagen, a Siemens, a Deutsche Telekom — todas offline.

O volume de tráfego era tão alto que alguns ISPs inteiros caíram. Na Europa, a British Telecom registrou 1,2 milhão de tentativas de conexão por minuto ao pico do ataque.

Em 5 de maio de 2000 — 24 horas após o lançamento — estima-se que 55 milhões de computadores estavam infectados. O recorde anterior do Melissa: 1,2 milhão.

---

### INVESTIGAÇÃO

A investigação começou pelo código. Dentro do VBScript, analistas da Microsoft encontraram um endereço de e-mail: `spyder@super.net.ph` — um domínio filipino. O e-mail era usado para receber senhas roubadas pelo worm.

O National Bureau of Investigation (NBI) das Filipinas foi acionado. O FBI enviou agentes para Manila. O ISP SuperNet forneceu os logs de acesso: o IP que acessou a conta `spyder` pertencia a um cybercafé na Avenida Recto, em Manila.

O NBI interrogou o dono do cybercafé. Graças a câmeras de segurança, identificaram um frequentador regular: Onel de Guzman, estudante da AMA Computer College. Em 6 de maio de 2000, dois dias após o ataque, Onel se apresentou voluntariamente ao NBI acompanhado de advogados.

Onel admitiu ter criado o worm. Mas invocou a rejeição de sua tese como motivação. Sua defesa: ele não sabia que o worm se espalharia tanto. A intenção original era apenas roubar senhas para acessar a internet (NBI Affidavit, 2000).

---

### RESPOSTA MUNDIAL

A Microsoft lançou patches de emergência, mas o estrago estava feito. A Symantec emitiu alertas globais. A CNN interrompeu a programação para cobrir o "amor digital assassino".

Governos ao redor do mundo — EUA, Reino Unido, Alemanha, Japão — emitiram declarações pedindo leis de crimes cibernéticos. O G8 discutiu o caso em sua cúpula de 2000.

O presidente Clinton ligou para o Congresso pedindo ação. O USA PATRIOT Act de 2001 (e sua seção 814 sobre crimes cibernéticos) teria sido influenciado pelo vácuo legal exposto pelo caso ILOVEYOU (Congressional Record, 2001).

---

### CONSEQUÊNCIAS

Onel de Guzman não foi condenado. A promotoria filipina invocou o E-Commerce Act (Republic Act 8792), aprovado em 14 de junho de 2000 — 41 dias após o worm — mas a lei não era retroativa. Onel foi formalmente acusado em agosto de 2000, mas as acusações foram arquivadas porque as Filipinas não tinham lei de crimes cibernéticos no momento do ataque.

O FBI não pôde extraditá-lo por falta de tratado de crimes cibernéticos entre EUA e Filipinas. Onel deu entrevistas, virou celebridade local, e desapareceu do radar público.

O caso ILOVEYOU se tornou o maior exemplo de impunidade cibernética da história — até ser superado por casos posteriores.

---

### IMPACTO FINANCEIRO

| Fonte | Danos Estimados (USD) |
|---|---|
| Computer Economics (2000) | US$ 5,5 bilhões |
| FBI (2001) | US$ 8,7 bilhões |
| McAfee/SANS Institute (2000) | US$ 6,7 bilhões |
| CERT/CC (2000, custos diretos) | US$ 1,2 bilhão |

O Pentágono gastou US$ 3 milhões apenas na limpeza de servidores. A Ford perdeu US$ 100 milhões em produtividade. O custo global de remoção do worm foi estimado em US$ 400 milhões em horas de trabalho de TI (Computer Economics, 2000).

---

### IMPACTO HUMANO

A ironia mais trágica da história: Onel de Guzman criou o ILOVEYOU para roubar senhas de internet discada. Ele não podia pagar o acesso à internet que precisava para estudar. Seu TCC, que propunha exatamente isso — um sistema para roubar senhas de e-mail — foi rejeitado pelos professores da AMA Computer College. Frustrado, ele transformou a tese rejeitada em código funcional.

Em entrevista à WIRED em 2015, Onel disse: *"I didn't mean to harm anyone. I just wanted to access the internet. The worm was supposed to send me passwords. It wasn't supposed to delete files. Something went wrong."*

"Algo deu errado." Três palavras que definem a tragédia: um estudante pobre, uma tese rejeitada, um worm que escapou ao controle. Onel se tornou o símbolo de uma era em que um único erro de código podia mudar o mundo.

---

### LIÇÕES APRENDIDAS

1. **A lei não alcança a tecnologia** — Onel ficou impune porque as Filipinas não criminalizavam condutas cibernéticas em 2000. O caso forçou dezenas de países a criar leis de crimes cibernéticos.
2. **Engenharia social supera qualquer firewall** — "ILOVEYOU" era um assunto irresistível. Nenhum antivírus protege contra curiosidade humana.
3. **Extensões de arquivo nunca devem ser ocultadas** — A Microsoft mudou o comportamento do Windows após o ILOVEYOU, passando a exibir extensões completas por padrão.
4. **Scripting languages são vetores de ataque** — O VBScript se tornou o maior risco de segurança do Windows. O PowerShell herdou esse problema.
5. **Um estudante pode causar danos bilionários** — A barreira de entrada para cibercrimes era zero. O ILOVEYOU foi escrito em VBScript, uma linguagem que qualquer iniciante podia dominar em semanas.
6. **A motivação nem sempre é dinheiro** — Onel não queria extorquir ninguém. Queria acesso à internet. Isso tornou o caso mais difícil de processar e mais difícil de prevenir.
7. **Worms não morrem** — Variações do ILOVEYOU continuaram circulando por anos. Algumas ainda são detectadas ocasionalmente em sistemas legados.

---

### LEGADO

O ILOVEYOU mudou o mundo de três maneiras:

**Leis:** O vácuo legal exposto pelo caso levou à aprovação do E-Commerce Act nas Filipinas (RA 8792) e acelerou a criação de leis de crimes cibernéticos em mais de 30 países, incluindo o Reino Unido (Computer Misuse Act amendments) e o Canadá.

**Segurança:** A Microsoft nunca mais tratou scripts com a mesma displicência. O Windows XP, lançado em 2001, veio com firewall nativo e políticas de execução de scripts mais restritivas.

**Percepção:** Pela primeira vez, o público global entendeu que a internet não era um playground seguro. O amor digital se tornou um campo minado.

---

### CURIOSIDADES

1. Onel de Guzman deu o nome de "Love Bug" ao worm. A imprensa global o rebatizou de "ILOVEYOU" — e o nome colou. O worm tem pelo menos 12 nomes oficiais catalogados: Love Letter, Love Bug, ILOVEYOU, VBS/LoveLetter, VBS/LoveLet.A, entre outros.
2. O worm carregava um "módulo de roubo de senhas" que enviava credenciais para um endereço de e-mail nas Filipinas. Onel diz que nunca conseguiu acessar o e-mail porque o volume de senhas foi tão grande que derrubou o servidor da SuperNet.
3. A Microsoft ofereceu US$ 250.000 de recompensa por informações que levassem à captura do criador do ILOVEYOU — a primeira recompensa por cibercrime da história da empresa.
4. O código fonte do ILOVEYOU foi disponibilizado online por Onel anos depois e serviu de base para mais de 100 variações, incluindo o "Klez" e o "Nimda" worms.
5. O worm infectou até mesmo computadores da NASA, forçando a agência a desligar sistemas de comunicação por satélite.
6. Onel de Guzman deu apenas 3 entrevistas em 15 anos: para a BBC (2000), para a WIRED (2015) e para o jornal filipino Philippine Daily Inquirer (2020). Em todas, repetiu: *"I'm sorry. I was young. I didn't understand what I was doing."*

---

### LINHA DO TEMPO

| Data | Evento |
|---|---|
| 1999 (semestre anterior) | Onel de Guzman submete tese sobre roubo de senhas via e-mail — REJEITADA |
| 04/05/2000, 09h | Onel lança o worm de um cybercafé em Sampaloc, Manila |
| 04/05/2000, 10h | Primeiros relatos de anomalia na Europa |
| 04/05/2000, 12h | CERT/CC recebe primeiros relatos formais |
| 04/05/2000, 14h | CNN interrompe programação; Pentágono registra infecção |
| 05/05/2000, 08h | Pentágono desliga e-mail não-classificado |
| 05/05/2000, 09h | CIA desliga e-mail interno |
| 05/05/2000, 10h | Parlamento Britânico cai |
| 06/05/2000 | Onel se apresenta ao NBI |
| 14/06/2000 | Filipinas aprovam E-Commerce Act (RA 8792) |
| Agosto/2000 | Onel formalmente acusado; acusações arquivadas por irretroatividade |
| 2001 | Estima-se que 55 milhões de computadores foram infectados |

---

### REFERÊNCIAS HISTÓRICAS

1. CERT/CC, "CA-2000-04 — Love Letter Worm," Carnegie Mellon University, 4 May 2000.
2. FBI National Press Office, "FBI Statement on Love Bug Virus," 5 May 2000.
3. Republic of the Philippines, National Bureau of Investigation, "Affidavit of Onel de Guzman," May 2000.
4. Republic Act No. 8792 — E-Commerce Act of 2000, Philippines.
5. BBC News, "Love Bug Virus Hits Parliament," 5 May 2000.
6. The New York Times, "Love Bug Virus Attaches to 55 Million Computers," 5 May 2000.
7. WIRED, "The Love Bug Virus: 15 Years Later," 2015.
8. Computer Economics, "Love Bug Virus Damage Assessment," 2000.
9. Microsoft Security Response Center, "VBS/LoveLetter Technical Analysis," 2000.
10. Symantec Security Response, "VBS.LoveLetter.Var," Technical Details, 2000.
