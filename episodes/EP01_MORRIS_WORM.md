# WAR ROOM: CRÔNICAS DO CIBERESPAÇO

---

## EPISÓDIO 01: MORRIS WORM

### O Primeiro Pecado Original da Internet
**Gênero:** Film Noir / Detective Story
**Tom:** Detetive cético, atmosfera densa, flashbacks

---

### PRÓLOGO

No dia 2 de novembro de 1988, a internet parou.

Não aos poucos. Não gradualmente. Parou como um coração que simplesmente decide que já bateu tempo demais. Seis mil máquinas — o equivalente a 10% de toda a internet existente — simplesmente deixaram de responder. Nos laboratórios da Universidade da Califórnia em Berkeley, técnicos olhavam para terminais piscando mensagens de erro sem saber o que fazer. No MIT, alunos tentavam enviar e-mails e viam as mensagens voltarem como pombos-correio feridos. Na NASA, no Pentágono, em centros de pesquisa espalhados por três continentes, a mesma pergunta se repetia: *o que está acontecendo?*

A resposta estava em um quarto de dormitório em Cornell. Um rapaz de 24 anos, cabelos escuros e óculos de aro grosso, olhava para a mesma tela. E sabia exatamente o que tinha feito. Mas não fazia ideia do que havia causado.

Seu nome era Robert Tappan Morris. Filho do diretor de um dos laboratórios de criptografia mais importantes dos Estados Unidos. Aluno de pós-graduação em ciência da computação. E, sem querer, o primeiro grande criminoso digital do mundo.

Embora, como ele próprio diria mais tarde: *não era para ser crime.*

---

### CONTEXTO HISTÓRICO

Para entender o Morris Worm, é preciso esquecer tudo o que você sabe sobre internet.

Estamos em 1988. A Guerra Fria ainda está terminando — o Muro de Berlim caiu há menos de um mês. Ronald Reagan ainda é presidente. O Windows existe há três anos e mal tem interface gráfica. A World Wide Web simplesmente não existe: Tim Berners-Lee só vai publicar sua proposta para o que chamaria de "WWW" em março de 1989, cinco meses depois. Não há Google. Não há Amazon. Não há navegadores. Não há .com.

O que existe é a ARPANET — uma rede criada pelo Departamento de Defesa dos EUA em 1969 para conectar universidades e centros de pesquisa. Em 1988, a ARPANET já evoluiu para o que seus operadores chamam de "Internet", mas o nome ainda é técnico, restrito, quase secreto. Cerca de 60 mil computadores estão conectados. É uma comunidade pequena o suficiente para que os operadores saibam os nomes uns dos outros. Grande o suficiente para que ninguém monitore tudo.

As máquinas rodam Unix. A comunicação é por confiança. Não há firewalls comerciais — o primeiro, da DEC, vai surgir em 1991. Não há sistemas de detecção de intrusão. Não há equipes de resposta a incidentes. A segurança digital é um conceito que mal existe fora dos laboratórios de criptografia militar.

Neste mundo, as vulnerabilidades são conhecidas — mas não são *exploradas*. Pelo menos não em escala. Um pesquisador chamado Eugene Spafford, da Purdue University, descreve o espírito da época: *"Nós sabíamos que as falhas existiam. Simplesmente presumíamos que ninguém seria tolo o bastante para usá-las."*

Robert Morris estava prestes a provar o contrário.

---

### CONTEXTO TECNOLÓGICO

O Morris Worm não usava uma vulnerabilidade. Usava três.

A primeira era o fingerd — um serviço que respondia a consultas sobre usuários. Uma função chamada gets() no código não verificava o tamanho da entrada. Um clássico buffer overflow, embora na época o termo mal fosse conhecido fora de círculos especializados.

A segunda era o sendmail — o software que enviava e-mails entre servidores. Exatamente um ano antes, em novembro de 1987, o CERT (que ainda não existia) teria descoberto uma falha no modo debug do sendmail. Morris soube dela. E a usou.

A terceira não era uma vulnerabilidade, mas um hábito: senhas fracas. O worm carregava um dicionário de 432 palavras comuns — nomes, abreviações, termos técnicos — e tentava forçar logins. Funcionava em aproximadamente uma em cada dez máquinas.

O worm não era complexo para os padrões de hoje. Cerca de 4.000 linhas de código C, compilado para rodar em VAX e Sun. Ele tinha dois componentes principais: um vetor de infecção (que explorava as falhas) e um mecanismo de propagação (que copiava o worm para novas máquinas).

O que o tornava genial — e catastrófico — era o que Morris chamou de "a falha de projeto."

---

### CONTEXTO POLÍTICO

Em 1988, a segurança cibernética não era uma pauta política. Não havia leis específicas para crimes digitais.

O Computer Fraud and Abuse Act (CFAA) havia sido aprovado dois anos antes, em 1986, mas seu texto era vago: proibia "acesso não autorizado" a computadores do governo federal. Ninguém sabia exatamente como aplicar aquilo a um worm que se espalhava por universidades. Os legisladores que redigiram a lei estavam pensando em hackers invadindo sistemas do Pentágono, não em um estudante de Cornell cujo programa acidentalmente derrubou a ARPANET.

Morris era filho de Robert Morris Sr., cientista-chefe do Laboratório de Ciência da Computação da NSA — a Agência de Segurança Nacional dos EUA. O pai de Morris era um dos criptógrafos mais respeitados do país, trabalhara no desenvolvimento do Unix, conhecia pessoalmente Ken Thompson e Dennis Ritchie. Quando o FBI começou a investigação, houve quem sussurrasse: *"isso cheira a operação de inteligência."*

Não era. Era só um filho tentando impressionar um pai. Ou, como Morris declararia mais tarde, *"um experimento que deu errado."*

---

### PRIMEIROS SINAIS

Quarta-feira, 2 de novembro de 1988. 17h01 (horário da costa leste).

Morris está em seu escritório no Departamento de Ciência da Computação da Cornell University. Às suas costas, um monitor exibe o código do worm. À sua frente, o terminal conectado ao MIT — a partir de onde o worm será lançado.

Por que o MIT? Morris não é aluno de lá. Escolheu o MIT para mascarar a origem, caso alguém investigasse. Um detalhe que, mais tarde, os promotores usariam para argumentar que havia intenção de ocultar o crime.

O plano parece simples: lançar o worm. Ele se replica para algumas máquinas. Morris observa o comportamento. Aprende. Depois envia um comando de parada.

Às 17h30, Morris executa o worm.

Às 18h00, o worm já infectou dezenas de máquinas.

Às 18h15, Morris percebe que algo está errado.

---

### ESCALADA

O erro de cálculo foi um número.

Morris sabia que o worm precisava evitar reinfectar máquinas já comprometidas — senão criaria múltiplas cópias e sobrecarregaria o sistema. Sua solução foi programar o worm para perguntar a cada nova máquina: *"você já está infectado?"*

O problema: era muito fácil responder "sim" para enganar o worm. Então Morris adicionou um mecanismo: a cada 7 perguntas, o worm ignorava a resposta e reinfectava de qualquer forma. Uma margem de segurança contra falsos positivos.

Ele calculou que 1 em cada 7 seria seguro.

Calculou errado.

O worm começou a reinfectar máquinas já infectadas. E cada nova cópia iniciava o processo de propagação novamente. O efeito foi exponencial: se uma máquina recebia 10 cópias do worm, cada uma tentava se espalhar para 10 outras. A carga na rede cresceu como uma reação em cadeia não controlada.

Às 19h00, a primeira máquina travou.

Às 20h00, dezenas de máquinas em todo o país estavam lentas ou completamente paralisadas.

Às 22h00, a ARPANET começou a apresentar falhas generalizadas. Operadores de rede em todo o país notaram um tráfego anômalo — pacotes vindos de todos os lugares, para todos os lugares, carregando o mesmo código.

Morris percebeu o que tinha feito. Tentou enviar um e-mail anônimo com instruções para interromper o worm. Mas o worm havia infectado os servidores de e-mail também. A mensagem nunca chegou.

Ele estava, na prática, assistindo ao vivo a internet morrer por algo que ele mesmo criou — e não podia fazer nada para impedir.

---

### MOMENTO CRÍTICO

Quinta-feira, 3 de novembro de 1988. 2h30.

John Brock, um operador de sistemas na Universidade de Utah, estava trabalhando até tarde quando notou algo estranho. Um processo rodando no servidor consumia 99% da CPU. Ele matou o processo. Três segundos depois, outro processo apareceu. Matou de novo. Outro apareceu. Então mais um. E mais um.

Brock ligou para o colega Don Alvarez. Alvarez olhou o código do processo suspeito e disse: *"Isso não é um bug. Isso é um programa se replicando."* Às 3h15, Alvarez enviou uma mensagem para o grupo de operadores de rede: *"Algum idiota soltou um worm."*

Às 5h00, o coordenador da ARPANET de Stanford já havia sido notificado. Às 7h00, o MIT já estava em estado de emergência. Às 9h00, o Pentágono desligou suas conexões com a ARPANET por precaução.

O momento crítico ocorreu entre 9h e 11h da manhã do dia 3. Centenas de operadores de rede, em todo o país, tentavam ao mesmo tempo entender o que estava atacando seus sistemas e como detê-lo. Ninguém sabia se era um ataque militar, um teste governamental ou o começo de uma guerra digital.

---

### INVESTIGAÇÃO

Eugene Spafford, professor na Purdue, foi um dos primeiros a obter uma cópia do worm. Ele passou a noite de 3 para 4 de novembro descompilando o código. Na manhã do dia 4, já tinha um relatório técnico de 30 páginas.

O que Spafford encontrou foi revelador: o código não tinha intenção destrutiva. Não apagava arquivos. Não roubava dados. Não instalava backdoors. Era, essencialmente, um programa que se copiava e perguntava *"tem mais alguém aí?"*

Mas a forma como perguntava era tão agressiva que derrubou tudo.

O FBI foi acionado. O Departamento de Defesa foi notificado. A NSA acompanhou as investigações discretamente — afinal, o principal suspeito era filho de um funcionário do próprio órgão.

A investigação seguiu pistas técnicas: o código havia sido compilado em uma máquina específica. As bibliotecas usadas indicavam que sistema operacional. O endereço de origem do lançamento levava ao MIT. Mas no MIT ninguém sabia de nada. Até que alguém lembrou: um aluno de Cornell, amigo de Morris, tinha acesso à conta usada no MIT.

O cerco se fechou. Em 5 de novembro, o The New York Times publicou a manchete: *"Autoridades suspeitam que aluno de Cornell é autor do 'vírus' de computador."*

Robert Morris não era mais um estudante. Era um alvo.

---

### RESPOSTA MUNDIAL

Enquanto a investigação prosseguia, a comunidade técnica se mobilizava para conter o worm.

O CERT — Computer Emergency Response Team — foi criado como resposta direta a este incidente. DARPA (a agência de projetos avançados do Pentágono) autorizou a formação de um centro de coordenação no Software Engineering Institute da Carnegie Mellon University. Em menos de duas semanas, o CERT estava operacional.

A resposta foi descentralizada e colaborativa. Operadores de rede compartilhavam patches por e-mail — quando o e-mail funcionava. Spafford publicou instruções de remoção. Pesquisadores da UC Berkeley e do MIT trabalharam juntos para entender o código.

Não havia precedentes. Ninguém sabia qual era o protocolo correto. Mas havia uma certeza: *isso nunca mais poderia acontecer.*

---

### CONSEQUÊNCIAS

O Morris Worm causou danos estimados entre US$ 100 mil e US$ 10 milhões — a variação reflete a dificuldade de quantificar horas de trabalho perdidas, sistemas danificados e dados corrompidos. Seis mil máquinas foram afetadas. Cada uma exigiu limpeza manual. Algumas nunca se recuperaram totalmente.

Em 26 de julho de 1989, Morris foi indiciado sob o Computer Fraud and Abuse Act. Foi o primeiro julgamento do tipo. A defesa argumentou que não houve intenção criminosa. A acusação argumentou que a negligência era crime.

O júri considerou Morris culpado. A sentença: três anos de liberdade condicional, 400 horas de serviço comunitário e multa de US$ 10 mil.

O custo total para Morris foi estimado em US$ 150 mil, incluindo honorários advocatícios. Mais tarde, ele diria em entrevista: *"Eu cometi um erro. Um erro grande. Mas não fui malicioso."*

A lei que o condenou, o CFAA, se tornaria nas décadas seguintes uma das ferramentas legais mais controvertidas dos EUA — usada para processar desde hackers até ativistas e jornalistas.

---

### IMPACTO FINANCEIRO

| Categoria | Estimativa | Fonte |
|---|---|---|
| Horas de trabalho perdidas | US$ 200 mil – US$ 5 milhões | GAO Report, 1989 |
| Limpeza e recuperação de sistemas | US$ 500 mil – US$ 2 milhões | CERT/CC Analysis |
| Perda de produtividade acadêmica | US$ 100 mil – US$ 3 milhões | Cornell Internal Report |
| Multa e custos legais de Morris | US$ 150 mil | Court Records, 1990 |
| **Total estimado** | **US$ 10 milhões** | Diversas fontes |

A cifra é irrisória comparada aos ataques modernos. Mas em 1988, US$ 10 milhões era o orçamento anual de um departamento de ciência da computação inteiro.

---

### IMPACTO HUMANO

Robert Tappan Morris tinha 24 anos quando seu worm derrubou a internet. Filho de um dos homens mais respeitados da NSA, carregava o peso de um sobrenome que abria portas — e criava expectativas.

Após o julgamento, seus orientadores no Ph.D. se recusaram a continuar orientando-o. Morris abandonou Cornell. Por um período, foi um pária na comunidade acadêmica — o homem que quebrou a internet.

Mas a história não terminou ali. Morris se recuperou. Concluiu o Ph.D. na Harvard University em 1999. Tornou-se professor associado no MIT — a mesma instituição que usou como trampolim para o worm. Em 2005, co-fundou a Y Combinator com Paul Graham, Trevor Blackwell e Jessica Livingston. A Y Combinator se tornaria uma das incubadoras de startups mais influentes do mundo, financiando empresas como Airbnb, Dropbox e Stripe.

A ironia é profunda: o homem que quase destruiu a internet ajudou a construir o ecossistema que a transformou no que ela é hoje.

---

### LIÇÕES APRENDIDAS

1. **A segurança não pode ser baseada em confiança.** A ARPANET foi construída sob a premissa de que todos os usuários eram benevolentes. O worm mostrou que basta um para derrubar tudo.
2. **Um erro de cálculo pode ser mais destrutivo que um ataque intencional.** O worm não foi feito para destruir — mas destruiu. A diferença entre acidente e ataque, no mundo digital, é frequentemente invisível.
3. **Resposta a incidentes precisa ser institucionalizada.** Antes do worm, não existia CERT. Depois do worm, passou a existir. A lição foi aprendida na prática.
4. **A lei precisa acompanhar a tecnologia.** O CFAA era inadequado para o caso. Até hoje, especialistas debatem se Morris deveria ter sido processado criminalmente.
5. **Um worm não precisa ser complexo para ser devastador.** Menos de 4.000 linhas de código derrubaram 10% da internet. A simplicidade é a forma mais sofisticada de destruição.

---

### LEGADO

O Morris Worm é o marco zero da cibersegurança moderna.

Antes dele, as vulnerabilidades eram discutidas em artigos acadêmicos e raramente exploradas. Depois dele, surgiram:
- O CERT/CC (1988) — resposta a incidentes
- O Computer Virus Industry Association — precursora da indústria de antivírus
- O primeiro firewall comercial (DEC, 1991)
- A categoria legal "crime cibernético" no código penal americano

O worm também estabeleceu um padrão que se repetiria nas décadas seguintes: um código relativamente simples, combinando múltiplas vulnerabilidades conhecidas, causando danos desproporcionais.

Pode-se argumentar que o Morris Worm foi o batismo de fogo da internet. Antes dele, a rede era uma fronteira aberta. Depois dele, começou a construção dos muros.

---

### CURIOSIDADES

1. O nome "worm" veio de John Brunner. O termo foi popularizado pelo romance de ficção científica *The Shockwave Rider* (1975), que descrevia programas autorreplicantes chamados "tapeworms". Morris leu o livro.
2. Morris foi para a faculdade com Bill Gates. Os dois estavam em Harvard no mesmo período, embora Gates tenha abandonado antes de Morris chegar.
3. O pai de Morris testemunhou a favor do filho no julgamento. Robert Morris Sr. disse que seu filho era "essencialmente honesto" e que o worm era "um experimento de pesquisa legítimo".
4. O código original está preservado. É possível encontrar o código-fonte do Morris Worm em museus de computação e arquivos históricos, incluindo o Computer History Museum.
5. A multa de US$ 10 mil foi paga com dinheiro de palestras. Morris passou os anos seguintes palestrando sobre o worm em universidades.

---

### LINHA DO TEMPO

| Data | Evento |
|---|---|
| 2 nov 1988, 17h01 | Morris lança o worm do MIT |
| 2 nov 1988, 18h00 | Primeiras infecções em massa |
| 2 nov 1988, 22h00 | ARPANET começa a colapsar |
| 3 nov 1988, 2h30 | John Brock detecta o worm em Utah |
| 3 nov 1988, 9h00 | Pentágono se desconecta da ARPANET |
| 3-4 nov 1988 | Spafford analisa o código; CERT é criado |
| 5 nov 1988 | NYT publica: suspeito é aluno de Cornell |
| 1989 | Morris é indiciado pelo CFAA |
| 26 jul 1989 | Condenado por crime federal |
| 1990 | Sentença: condicional + multa |
| 1999 | Morris conclui Ph.D. em Harvard |
| 2005 | Co-funda Y Combinator |

---

### REFERÊNCIAS HISTÓRICAS

1. "The Morris Worm: Internet Malware's 30th Anniversary" — Eugene Spafford, Computer History Museum, 2018.
2. "The Robert Morris Worm: A Brief History and Analysis" — Relatório técnico do CERT/CC, 1988.
3. "United States v. Robert Tappan Morris" — Processo judicial 89-CR-240, Tribunal Distrital de Syracuse, Nova York, 1990.
4. "Cybersecurity's Debt to a Worm" — Katie Hafner, The New York Times, 2013.
5. "The Cuckoo's Egg" — Cliff Stoll, 1989.
6. "Where Wizards Stay Up Late" — Katie Hafner e Matthew Lyon, 1996.
7. "Morris Worm Source Code" — Computer History Museum, Mountain View, CA.
8. "Reflections on the Morris Worm" — Robert Tappan Morris, palestra no MIT, 2018.
9. "Computer Fraud and Abuse Act (CFAA): A Historical Analysis" — Orin Kerr, Harvard Journal of Law and Technology, 2003.
10. "The Internet Before the Web" — Janet Abbate, MIT Press, 1999.
