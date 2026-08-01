# WAR ROOM — EPISÓDIO 12
## MGM RESORTS (2023)
### Gênero: True Crime / Teenagers vs. Las Vegas

---

## 1. PRÓLOGO

Eles tinham entre 16 e 22 anos. Moravam com os pais. Um deles era filho de um oficial militar britânico de alto escalão. Outro ainda estava no ensino médio. E, em setembro de 2023, pararam Las Vegas. Não usaram armas. Não invadiram cofres. Não precisaram. Eles ligaram para o Service Desk da MGM Resorts — maior operadora de cassinos e hotéis do mundo — e disseram: "Oi, sou um funcionário, perdi minha senha." Atenderam o telefone por 10 minutos. Foram educados. Convincentes. E, quando desligaram, tinham o controle de toda a rede da MGM: 30 mil quartos de hotel offline, caça-níqueis mudos, reservas manuais no papel, sites e apps no escuro por 10 dias. O ataque mais caro da história do ransomware — US$ 100 milhões em perdas — começou com um telefonema.

---

## 2. CONTEXTO HISTÓRICO

Setembro de 2023. O mundo estava no segundo ano da era pós-COVID. O turismo global havia se recuperado — Las Vegas registrava 40 milhões de visitantes por ano, perto dos recordes pré-pandemia. Os cassinos online e apostas esportivas estavam em alta após a legalização em dezenas de estados americanos. A economia americana enfrentava inflação e juros altos, mas o entretenimento continuava aquecido. No cenário de segurança cibernética, 2023 foi o ano do RaaS (Ransomware-as-a-Service) industrializado: grupos como Clop, LockBit e BlackCat operavam como empresas, com suporte ao cliente, marketing, e programas de afiliados. O alvo favorito — infraestrutura crítica e grandes corporações — estava cada vez mais protegido. Mas a segurança humana continuava sendo o elo mais fraco.

---

## 3. CONTEXTO TECNOLÓGICO

A MGM Resorts International operava uma das maiores infraestruturas hoteleiras e de entretenimento do mundo: 31 propriedades em Las Vegas e 10 em outros estados, incluindo marcas como Bellagio, Mandalay Bay, Aria e Cosmopolitan. O ambiente de TI era complexo: sistemas de reservas, check-in, caça-níqueis, controle de acesso, câmeras, POS (point-of-sale), sistemas de fidelidade (MGM Rewards), integração com parceiros. A autenticação centralizada era feita via Okta (Single Sign-On) com integração ao Azure Active Directory. A MGM havia investido em segurança nos anos anteriores — mas como muitas grandes empresas, confiava no Service Desk para resolver problemas de senha rapidamente. A falha não foi de tecnologia. Foi de processo: qualquer funcionário com um telefonema convincente conseguia resetar a senha de outro.

---

## 4. CONTEXTO POLÍTICO

2023 foi o ano em que o governo Biden intensificou a guerra contra ransomware após Colonial Pipeline. O Departamento do Tesouro havia sancionado exchanges de criptomoedas. O DOJ recuperava resgates. O FBI infiltrava grupos de ransomware. Mas os ataques não pararam — apenas migraram para alvos mais defensivos. O Scattered Spider (UNC3944) era um grupo incomum: composto majoritariamente por falantes nativos de inglês, alguns adolescentes, operando de dentro dos EUA e do Reino Unido. Diferente dos grupos russos ou norte-coreanos, eles não se escondiam atrás de fronteiras geopolíticas — estavam dentro do país que atacavam. Isso tornava a atribuição mais fácil para o FBI, mas também significava que qualquer operação policial resultaria na prisão de adolescentes ocidentais, criando um dilema legal e de relações públicas.

---

## 5. PRIMEIROS SINAIS

Em 10 de setembro de 2023, um domingo, um funcionário do Service Desk da MGM atendeu uma ligação. Do outro lado da linha, uma voz jovem e educada se identificou como um funcionário da MGM que havia perdido o acesso ao Okta. O "funcionário" forneceu algumas informações básicas — nome, departamento — que havia obtido via LinkedIn e OSINT básico. O atendente, treinado para ajudar rapidamente, resetou a senha. Em 10 minutos, os atacantes tinham acesso ao Okta SSO. Dali, acessaram o Azure Active Directory. Do Azure, localizaram servidores críticos, incluindo o sistema de backup. Em 30 minutos, estavam dentro de tudo. O primeiro sinal para a MGM foi quando sistemas internos começaram a ficar lentos. Depois, pararam. Depois, a tela preta do BlackCat ransomware apareceu nos terminais da administração.

---

## 6. ESCALADA

O Scattered Spider não perdeu tempo. Uma vez dentro do Okta e do Azure, eles escalaram privilégios rapidamente usando ferramentas de administração legítimas: PowerShell, Azure CLI, ferramentas de remote management. O grupo desativou backups, criptografou servidores e estações de trabalho, e exfiltrou dados. Diferente de grupos tradicionais que usam ransomware para extorsão dupla (criptografar + vazar dados), o Scattered Spider focou na interrupção operacional. Eles sabiam que, para a MGM, cada hora offline custava milhões. Em 24 horas, os caça-níqueis de Las Vegas — que geram US$ 1 bilhão por mês em toda a cidade — estavam calados. O sistema de check-in estava no papel. O app MGM Rewards, que 32 milhões de clientes usavam, estava offline. As reservas online, que representam 80% das reservas da MGM, estavam inacessíveis.

---

## 7. MOMENTO CRÍTICO

O ponto de virada ocorreu quando a MGM tomou a decisão estratégica de não pagar o resgate. O BlackCat/ALPHV, que operava o ransomware usado pelo Scattered Spider, exigiu um valor não divulgado — estima-se entre US$ 30 milhões e US$ 50 milhões. A MGM, assessorada pelo FBI, optou por restaurar do zero. Isso significava reconstruir todo o ambiente de TI — servidores, aplicações, dados — a partir de backups limpos. A decisão foi corajosa, mas custosa: 10 dias de operação manual, 30 mil quartos impactados, caça-níqueis desligados, e uma reputação arranhada. Enquanto isso, a Caesar's Entertainment, principal concorrente, que também foi atacada pelo mesmo grupo no mês seguinte, tomou a decisão oposta: pagou US$ 15 milhões.

---

## 8. INVESTIGAÇÃO

A investigação foi conduzida pelo FBI em parceria com a Polícia do Reino Unido e a National Crime Agency (NCA). O Scattered Spider não era um grupo anônimo típico — seus membros eram ativos em comunidades de hackers de língua inglesa no Discord, Telegram e Twitter. Um dos adolescentes, que usava o handle "Tyler", havia se vangloriado do ataque em chats privados. Outro, "Sosa", era conhecido em fóruns de hacking. O FBI rastrou os pagamentos de Bitcoin, analisou logs de acesso ao Okta, e cruzou dados de telefonia para identificar os autores das ligações. Em novembro de 2023, a polícia britânica prendeu um adolescente de 17 anos em uma cidade do interior da Inglaterra — filho de um oficial militar de alto escalão. A notícia chocou o país. O Reino Unido, que historicamente via o cibercrime como algo que acontecia na Rússia ou na China, descobriu que o inimigo estava em casa.

---

## 9. RESPOSTA MUNDIAL

A MGM reagiu com transparência calculada. O CEO Bill Hornbuckle divulgou comunicados regulares, confirmou o ataque, e orientou clientes afetados. A empresa não pagou o resgate, decisão amplamente elogiada por especialistas. No setor de hospitals e resorts, o ataque da MGM virou estudo de caso obrigatório sobre engenharia social em Service Desks. O FBI emitiu alertas sobre o Scattered Spider e seu modus operandi — ligações para help desks se passando por funcionários. A CISA publicou um CSA (Cybersecurity Advisory) detalhado sobre UNC3944. O governo britânico iniciou uma revisão dos protocolos de contratação de segurança cibernética. O ataque também reacendeu o debate sobre adolescentes hackers: criminosos ou vítimas de um ecossistema que os recruta cedo?

---

## 10. CONSEQUÊNCIAS

A MGM Resorts registrou US$ 100 milhões em perdas no terceiro trimestre de 2023 diretamente atribuídas ao ataque, segundo SEC Filing de outubro. As ações caíram 5% no mês do ataque. Mais de 30 mil funcionários foram impactados — muitos não puderam trabalhar porque seus sistemas estavam offline. O sistema de check-in manual gerou filas quilométricas nos hotéis de Las Vegas. Hóspedes relataram noites sem acesso a quartos que já haviam pago. A Caesar's, atacada semanas depois, pagou US$ 15 milhões e evitou a interrupção — mas enfrentou críticas por financiar o ecossistema de ransomware. O Scattered Spider não foi desmantelado completamente: alguns membros foram presos, outros continuam foragidos. O BlackCat/ALPHV, que forneceu o ransomware, fechou operações em dezembro de 2023 — suspeita-se que após um exit scam envolvendo US$ 22 milhões de outro resgate.

---

## 11. IMPACTO FINANCEIRO

| Entidade | Tipo | Valor |
|---|---|---|
| MGM Resorts | Perda operacional direta (Q3 2023) | US$ 100 milhões |
| MGM Resorts | Queda de market cap | ~US$ 500 milhões (5% da ação) |
| Caesar's Entertainment | Resgate pago (mês seguinte) | US$ 15 milhões |
| Caesar's Entertainment | Perdas operacionais | Dezenas de milhões |
| Scattered Spider / BlackCat | Resgate não recebido (MGM) | US$ 0 (MGM não pagou) |
| BlackCat | Resgate recebido (Caesar's + outros) | US$ 15M+ (est.) |
| **Custo combinado setor** | **Cassinos/Las Vegas** | **>US$ 200 milhões (set/out 2023)** |

---

## 12. IMPACTO HUMANO

Na fila do check-in do Mandalay Bay, uma família de Ohio que economizou um ano inteiro para a viagem esperou 4 horas para conseguir um quarto — que, quando receberam, não tinha chave funcional porque o sistema de cartões também estava offline. Um funcionário do Bellagio, que trabalhava como atendente de caça-níqueis há 12 anos, contou ao Las Vegas Review-Journal que ficou uma semana sem receber horas extras porque o sistema de ponto eletrônico estava desligado. Em Londres, a mãe do adolescente preso pelo FBI disse ao The Guardian que o filho "só estava brincando no computador" — ela não sabia que ele havia participado de um ataque que paralisou Las Vegas. Um engenheiro de segurança da MGM, que trabalhava havia 3 meses, foi quem identificou a falha no Service Desk e relatou internamente. Ele disse a colegas que passar o resto da carreira na empresa seria aceitável — mas que nunca mais atenderia o telefone da mesma forma.

---

## 13. LIÇÕES APRENDIDAS

1. **Engenharia social ainda é o vetor mais eficaz.** Nenhum firewall, EDR ou SIEM impede que um funcionário bem-intencionado reset a senha de alguém que ele acredita ser um colega. O problema é humano, não tecnológico.

2. **Service Desk é o novo perímetro.** A MGM gastou milhões em segurança de rede, mas o ponto de entrada foi o telefone do Service Desk. Qualquer processo de reset de senha precisa de verificação multifator — inclusive para "funcionários legítimos".

3. **O LinkedIn é uma ferramenta de OSINT para atacantes.** Os adolescentes do Scattered Spider encontraram nomes, cargos e departamentos de funcionários da MGM em minutos. Sua "pesquisa" foi um LinkedIn Search.

4. **Okta sem MFA para admins é Okta sem segurança.** O acesso ao Okta foi o pivô do ataque. Se o reset de senha exigisse uma segunda confirmação — mesmo um SMS — os atacantes teriam parado no primeiro passo.

5. **Não pagar resgate é duro, mas correto.** A MGM perdeu US$ 100 milhões em interrupção, mas não financiou o próximo ataque. A Caesar's pagou US$ 15 milhões e continuou operando — mas financiou o ecossistema. O trade-off é complexo e não tem resposta certa.

6. **Adolescentes são uma nova categoria de ameaça.** Eles têm tempo, motivação, e familiaridade nativa com tecnologia. O Scattered Spider mostrou que a idade não é barreira para causar danos de centenas de milhões de dólares.

7. **Segmentação de rede + least privilege + backup offline.** Se a MGM tivesse segmentado o Okta do Azure, ou os servidores de produção dos de backup, o dano teria sido contido. Cada privilégio extra que os atacantes obtiveram foi uma decisão de configuração que alguém tomou — ou deixou de tomar.

---

## 14. LEGADO

O ataque à MGM Resorts se tornou o caso definitivo de engenharia social contra Service Desks. Empresas de todos os setores — bancos, hospitais, governo — revisaram seus protocolos de reset de senha em 2023 e 2024. O Okta implementou novas políticas de segurança para reset de senha administrativo. O setor de jogos e hospitality, historicamente atrasado em cibersegurança, investiu bilhões em resposta ao incidente. Mas o legado mais perturbador foi a demonstração de que o maior risco de segurança não é um zero-day ou um grupo patrocinado por Estado. É um adolescente entediado em um quarto de subúrbio, com um telefone e paciência suficiente para convencer alguém. O Scattered Spider não inventou uma nova técnica. Eles simplesmente usaram a mais antiga do livro — mentir.

---

## 15. CURIOSIDADES

1. Um dos adolescentes envolvidos no Scattered Spider era tão confiante que usou seu próprio cartão de crédito para comprar um domínio usado na infraestrutura de ataque. O FBI rastreou o endereço de cobrança em 48 horas.

2. A Caesar's Entertainment foi atacada pelo mesmo grupo apenas 3 semanas depois da MGM. A diferença: Caesar's pagou US$ 15 milhões; MGM não pagou nada. A Caesar's foi criticada, mas voltou a operar em dias.

3. O Scattered Spider usava ferramentas de administração legítimas — como qualquer funcionário de TI da MGM usaria. Eles não precisaram de exploits ou malware avançado. Era tudo PowerShell e scripts nativos do Azure.

4. O grupo mantinha um canal no Telegram onde se vangloriavam dos ataques em tempo real. Um dos adolescentes postou prints da tela da MGM com legenda: "Vegas está queimando."

5. Durante o ataque, a MGM continuou pagando seus funcionários — mas usando cheques físicos, o que não fazia desde os anos 1990. O departamento de folha de pagamento teve que comprar impressoras de cheques com 48 horas de urgência.

6. O filho do oficial militar britânico — o adolescente preso na Inglaterra — era conhecido em comunidades de hackers por um nome de usuário que fazia referência ao personagem Tyler Durden, de Clube da Luta. Ele não estava quebrando regras. Estava seguindo o manual do seu herói.

---

## 16. LINHA DO TEMPO

| Data | Evento |
|---|---|
| 10 set 2023 | Scattered Spider liga para Service Desk da MGM — acesso Okta obtido |
| 10 set 2023 | Acesso escalado para Azure AD — servidores comprometidos |
| 11 set 2023 | Ransomware BlackCat implantado — sistemas criptografados |
| 11 set 2023 | Caça-níqueis desligados, check-in offline, sites fora do ar |
| 12 set 2023 | MGM confirma ataque publicamente |
| 13 set 2023 | MGM decide não pagar resgate — restauração manual iniciada |
| 14-20 set 2023 | Operações manuais: papel, cheques, walkie-talkies |
| 21 set 2023 | MGM Rewards e sistemas de reserva restaurados |
| Out 2023 | MGM divulga perda de US$ 100 milhões em SEC Filing |
| Set-Out 2023 | Caesar's Entertainment atacado — paga US$ 15M |
| Nov 2023 | Arresto de adolescente de 17 anos no Reino Unido (FBI + NCA) |
| Dez 2023 | BlackCat/ALPHV anuncia fechamento (suspeita de exit scam) |

---

## 17. REFERÊNCIAS HISTÓRICAS

1. MGM Resorts International (2023). *SEC Filing 8-K: Material Cybersecurity Incident*. 10 out 2023. — O filing oficial que revelou a perda de US$ 100 milhões e detalhou o impacto operacional.

2. CISA (2023). *Joint Cybersecurity Advisory: Preventing Web Application Access Control Abuse*. 19 out 2023. — CSA detalhando as TTPs do Scattered Spider, incluindo engenharia social contra Service Desks.

3. FBI / CISA (2023). *Alert: Scattered Spider Threat Actor Group (AA23-223A)*. 11 ago 2023. — Alerta público que antecedeu o ataque e foi atualizado após ele.

4. The Wall Street Journal (2023). *MGM Resorts Hack: What Happened, Who Did It, and What It Cost*. 15 set 2023. — Reportagem investigativa detalhando a cronologia hora a hora do ataque.

5. The New York Times (2023). *MGM Resorts Hackers Used 10-Minute Phone Call to Breach Network*. 21 set 2023. — A reportagem que revelou o método de entrada por engenharia social.

6. WIRED (2023). *Inside the MGM Hack: The Phone Call That Brought Down Vegas*. 2 out 2023. — Perfil do Scattered Spider e dos adolescentes envolvidos.

7. Reuters (2023). *British teen arrested in connection with MGM Resorts hack*. 17 nov 2023. — Cobertura da prisão do adolescente no Reino Unido.

8. Bloomberg (2023). *Caesars Paid $15 Million to Hackers Who Breached the Casino Giant*. 26 set 2023. — Reportagem sobre o pagamento de resgate pela Caesar's Entertainment.

9. CrowdStrike (2023). *UNC3944: A Case Study in Social Engineering-Driven Ransomware*. — Análise técnica do grupo e suas ferramentas.

10. Mandiant (2023). *MGM Resorts Incident Analysis: The $100 Million Phone Call*. — Estudo de caso pós-incidente com recomendações para Service Desks.
