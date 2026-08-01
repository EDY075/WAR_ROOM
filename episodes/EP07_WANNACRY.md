# WAR ROOM — Episódio 07
# WANNACRY (2017)
## Gênero: Disaster Movie / Contagem Regressiva
## Voz: Relógio correndo — cada parágrafo marca hora, minuto, segundo

---

### 1. PRÓLOGO — Abertura cinematográfica

**12 de maio de 2017. 10h30. Horário de Londres.**

Um hospital público na Inglaterra parou de funcionar.

Não havia sinais de explosão. Nenhum alarme de incêndio. A recepção do National Health Service simplesmente congelou. As telas dos computadores mostraram uma mensagem vermelha em fundo preto: "Ooops, seus arquivos foram criptografados!" Um cronômetro de seis dias começou a contar. O resgate: US$ 300 em Bitcoin.

Os médicos não conseguiam acessar prontuários. As enfermeiras não sabiam quais medicamentos os pacientes tomavam. As ambulâncias foram redirecionadas. Cirurgias foram canceladas. Salas de emergência fecharam.

Às 15h do mesmo dia, 74 países já estavam infectados.

Às 18h, o número passava de 100.

O mundo estava assistindo, em tempo real, ao maior ataque de ransomware da história — e tudo começou porque uma agência de inteligência americana guardou um segredo.

---

### 2. CONTEXTO HISTÓRICO — O mundo na época

Maio de 2017. O mundo estava em um momento de transição geopolítica. Donald Trump havia sido empossado em janeiro. A Guerra da Síria continuava. A Coreia do Norte testava mísseis com frequência crescente. O Reino Unido se preparava para o divórcio da União Europeia.

Mas no submundo digital, algo muito maior estava fermentando.

Em agosto de 2016, um grupo chamado Shadow Brokers apareceu na internet. Eles afirmavam ter roubado exploits da NSA — a Agência de Segurança Nacional dos Estados Unidos — e estavam leiloando o material. O grupo postou uma amostra: arquivos criptografados e um manifesto confuso. A maioria dos especialistas ignorou, achando que era golpe.

Em abril de 2017, os Shadow Brokers vazaram o pacote completo. E não era golpe.

O que eles liberaram incluía exploits para Windows que a NSA havia desenvolvido e mantido em segredo por anos. O mais devastador deles se chamava **EternalBlue** — um exploit contra o protocolo SMBv1 (Server Message Block, versão 1) do Windows.

A Microsoft já havia lançado um patch para EternalBlue em março de 2017 (MS17-010). Mas dezenas de milhares de sistemas ainda não haviam aplicado o patch. Hospitais, fábricas, bancos, escolas, governos locais — todos corriam com sistemas vulneráveis.

Os Shadow Brokers haviam plantado a bomba. A Coreia do Norte só precisou acender o pavio.

---

### 3. CONTEXTO TECNOLÓGICO — Estado da tecnologia

Em 2017, o ransomware era uma ameaça conhecida, mas não global. Ataques de ransomware eram localizados — uma empresa aqui, um hospital ali. A ideia de que um único worm poderia criptografar computadores em 150 países simultaneamente era considerada improvável.

O EternalBlue, o exploit usado pelo WannaCry, era uma obra-prima da engenharia reversa ofensiva. Ele explorava uma vulnerabilidade no protocolo SMBv1 que permitia execução remota de código sem autenticação. Um pacote especialmente criado enviado para a porta 445 do Windows podia assumir controle total da máquina.

O SMBv1 era um protocolo legado — a Microsoft havia tentado aposentá-lo, mas muitas organizações ainda dependiam dele para compatibilidade com sistemas antigos. Hospitais, em particular, tinham equipamentos médicos que rodavam Windows XP e dependiam do SMBv1 para compartilhar arquivos.

O WannaCry combinava:

- EternalBlue (exploit SMBv1) para propagação
- DoublePulsar (backdoor da NSA, também vazado) para entrega do payload
- Um módulo de criptografia RSA-2048 + AES-128

O resultado era um worm que se propagava automaticamente sem necessidade de interação humana — algo que o ransomware tradicional nunca havia feito em escala global.

---

### 4. CONTEXTO POLÍTICO — Cenário geopolítico

O contexto político de WannaCry é uma história sobre segredos compartilhados e o preço da vigilância em massa.

**A NSA sabia.** A agência de inteligência americana havia descoberto a vulnerabilidade no SMBv1 anos antes. Em vez de divulgar a falha para a Microsoft, a NSA a transformou em uma arma cibernética: EternalBlue. A agência usava o exploit para infiltrar redes estrangeiras. O raciocínio era o mesmo desde a Segunda Guerra Mundial: se você pode ouvir o inimigo, não conte a ninguém como está ouvindo.

**O Shadow Brokers não era um grupo de hacktivistas.** A identidade dos Shadow Brokers nunca foi confirmada, mas a teoria mais aceita é que eles eram agentes russos ou um insider descontente da NSA. O vazamento pode ter sido uma operação de inteligência russa para expor as capacidades cibernéticas americanas e causar caos.

**A Coreia do Norte usou a oportunidade.** O Lazarus Group, o braço cibernético norte-coreano, pegou o código vazado e o adaptou para criar WannaCry. O objetivo era financeiro — arrecadar Bitcoin — mas o dano colateral foi imenso porque o worm se propagava descontroladamente.

**O resultado foi uma crise internacional.** O governo Trump estava no poder há apenas quatro meses. A resposta ao ataque foi caótica. A Casa Branca culpou a Coreia do Norte, mas não tinha uma estratégia para lidar com as consequências.

---

### 5. PRIMEIROS SINAIS — Como começou

**12 de maio de 2017. 07h44 (horário do Reino Unido).**

O primeiro sinal do ataque veio da Espanha. A Telefónica, a gigante de telecomunicações espanhola, relatou que centenas de computadores em sua rede corporativa estavam sendo criptografados. Servidores caíam em cascata. Funcionários não conseguiam acessar e-mails ou sistemas internos.

Poucos minutos depois, a Portugal Telecom relatou o mesmo. Depois, a Deutsche Bahn (ferrovia alemã). Depois, a FedEx nos Estados Unidos.

Os analistas de segurança que acompanhavam a situação em tempo real viram as infecções se espalharem como um incêndio digital. Cada nova infecção verificava a rede local em busca de outras máquinas vulneráveis e se replicava automaticamente. Era exponencial.

**09h00:** Reino Unido. O NHS relatou que seis hospitais em Londres haviam perdido acesso a seus sistemas. As emergências foram fechadas. Ambulâncias foram desviadas para outros hospitais.

**10h00:** Os primeiros relatos da Ásia chegaram. China, Japão, Coreia do Sul — todos infectados.

**11h00:** Rússia. O Ministério do Interior russo confirmou que 1.000 computadores foram criptografados.

**12h00:** Índia. A polícia de Kerala perdeu acesso a todos os seus sistemas.

**13h00:** Brasil. Computadores do governo e de empresas privadas começaram a travar.

O ataque não tinha alvo. Não tinha filtro. Infectava qualquer computador vulnerável que encontrasse.

---

### 6. ESCALADA — Como se expandiu

WannaCry se espalhou como uma epidemia biológica. Cada máquina infectada se tornava um vetor de transmissão para todas as outras na mesma rede. O worm escaneava a porta 443 (SMB) em toda a sub-rede local e tentava se propagar usando EternalBlue. Se conseguisse, a nova vítima repetia o processo.

O resultado foi uma curva de crescimento exponencial.

Em três horas, WannaCry havia infectado mais de 100.000 sistemas. Em seis horas, 230.000 sistemas em 150 países.

O worm não discriminava:
- Hospitais na Inglaterra
- Fábricas na Alemanha
- Bancos na Rússia
- Escolas na China
- Escritórios do governo nos EUA
- Universidades no Brasil

Todos estavam igualmente vulneráveis se não tivessem aplicado o patch MS17-010.

O pior: o código de resgate não funcionava direito. Muitas vítimas pagaram US$ 300 em Bitcoin e nunca receberam a chave de descriptografia. O worm foi mal programado — o módulo de pagamento e descriptografia era quase inoperante. Isso sugere que o objetivo primário do Lazarus Group era causar dano, não arrecadar dinheiro.

---

### 7. MOMENTO CRÍTICO — Ponto de virada

**12 de maio de 2017. 15h09 (horário do Reino Unido).**

O herói da história estava sentado em seu quarto na casa de seus pais, em Ilfracombe, uma cidade litorânea no sudoeste da Inglaterra.

Marcus Hutchins, 22 anos, era um analista de segurança que se autodenominava MalwareTech. Ele estava monitorando a propagação de WannaCry como fazia com todas as amostras de malware que encontrava. Em seu laptop, ele analisava o código do worm e notou algo estranho: o malware tentava acessar um domínio específico antes de se espalhar:

`iuqerfsodp9ifjaposdfjhgosurijfaewrwergwea.com`

Era uma sequência aleatória de caracteres. Hutchins achou que poderia ser um "domain sinkhole" — um mecanismo usado por desenvolvedores de malware para verificar se o worm estava sendo analisado. Se o domínio existisse, o worm parava.

Hutchins não tinha nada a perder. Ele registrou o domínio. Custou US$ 11,69.

O efeito foi imediato.

Em todo o mundo, máquinas infectadas que conseguiram se conectar ao domínio pararam de se propagar. O worm não morreu — as máquinas já infectadas continuaram criptografadas — mas a propagação global foi interrompida.

Analistas que acompanhavam a propagação viram o gráfico de infecção parar de subir. O número de novas infecções caiu para perto de zero em questão de minutos.

O domínio de US$ 11,69 havia salvado o mundo de uma catástrofe cibernética.

---

### 8. INVESTIGAÇÃO — Como descobriram os responsáveis

A atribuição de WannaCry ao Lazarus Group (Coreia do Norte) foi uma das investigações mais robustas da história da segurança cibernética.

**A trilha técnica:**
- O código de WannaCry compartilhava assinaturas distintas com malwares anteriores do Lazarus Group, incluindo o usado no ataque à Sony (2014) e ao Bangladesh Bank (2016).
- O módulo de criptografia usava o mesmo algoritmo e estrutura de código do malware "Contopee", atribuído ao Lazarus.
- As contas Bitcoin usadas para receber os resgates foram rastreadas e ligadas a exchanges na Coreia do Norte.

**A trilha operacional:**
- O horário de operação dos servidores de comando e controle era consistente com o fuso horário de Pyongyang (UTC+8:30).
- As mensagens no código continham termos em coreano e referências culturais norte-coreanas.
- A infraestrutura de servidores C2 usava técnicas de ofuscação idênticas às usadas em ataques anteriores do Bureau 121.

**A confirmação oficial:**
- Em dezembro de 2017, o governo Trump atribuiu oficialmente o ataque à Coreia do Norte.
- O Reino Unido, Austrália, Canadá e Nova Zelândia emitiram declarações conjuntas culpando Pyongyang.
- A Microsoft também confirmou a atribuição em relatórios internos.

**A ironia final:** A NSA, que criou o exploit usado no ataque, recusou-se a comentar publicamente sobre seu papel.

---

### 9. RESPOSTA MUNDIAL — Reação de governos e empresas

**NHS (Reino Unido):** O sistema de saúde pública britânico foi o mais afetado. 19.000 agendamentos de consultas e cirurgias foram cancelados. 6 hospitais fecharam completamente suas emergências. O NHS admitiu que executava Windows XP sem suporte em milhares de máquinas.

**Microsoft:** A empresa agiu rápido. Brad Smith, presidente da Microsoft, publicou um artigo devastador intitulado "A necessidade de uma Convenção Digital de Genebra" — criticando diretamente a NSA por acumular vulnerabilidades. "Este ataque é mais um exemplo de por que o acúmulo de vulnerabilidades por governos causa problemas", escreveu Smith.

**Governo dos EUA:** A resposta foi confusa. Trump foi informado do ataque durante o voo de volta de uma viagem internacional. A Casa Branca culpou a Coreia do Norte, mas não tomou nenhuma ação concreta de retaliação. O Departamento de Estado disse que "consideraria todas as opções."

**Empresas afetadas:** FedEx, Renault, Telefónica, Deutsche Bahn e dezenas de outras empresas multinacionais sofreram interrupções significativas. A Renault fechou fábricas na França e na Romênia por vários dias.

**O público:** A reação foi uma mistura de pânico e curiosidade. Pessoas ligavam para hospitais perguntando se podiam ser atendidas. Outras tentavam pagar o resgate em Bitcoin — mas a infraestrutura de pagamento do malware era tão mal projetada que a maioria dos pagamentos nunca foi processada.

---

### 10. CONSEQUÊNCIAS — Resultados imediatos

**Financeiro:** O dano global estimado foi de US$ 4 bilhões — incluindo perda de produtividade, custos de recuperação e danos reputacionais.

**NHS:** O sistema de saúde britânico gastou £ 92 milhões (US$ 115 milhões) para se recuperar do ataque, incluindo £ 72 milhões em atualizações de TI e £ 20 milhões em horas extras de funcionários.

**Bitcoin:** As contas dos hackers receberam 52,2 Bitcoins (cerca de US$ 130.000 na época). Mas devido à má implementação, apenas três pagamentos foram resgatados corretamente.

**Marcus Hutchins:** O "herói acidental" passou de analista anônimo a celebridade global em 24 horas. Seis meses depois, ele foi preso pelo FBI sob acusações de criação e distribuição de malware bancário (Kronos) entre 2012 e 2015 — crimes anteriores ao seu trabalho de heroísmo.

**NSA:** A agência nunca comentou publicamente. Mas internamente, o vazamento de EternalBlue foi considerado o maior desastre operacional da história da NSA. O então diretor da NSA, Mike Rogers, testemunhou em audiência no Congresso que o vazamento havia causado "danos incalculáveis."

---

### 11. IMPACTO FINANCEIRO — Tabela de custos

| Entidade | Custo Estimado | Descrição |
|----------|---------------|-----------|
| **NHS Reino Unido** | £ 92 milhões (US$ 115 mi) | Atualização de TI, horas extras, perda de produtividade |
| **FedEx** | US$ 300 milhões | Interrupção operacional global, perda de receita |
| **Renault** | US$ 200 milhões | Fechamento de fábricas, perda de produção |
| **Deutsche Bahn** | US$ 50 milhões | Interrupção de sistemas de bilhetagem e comunicação |
| **Telefónica** | US$ 40 milhões | Limpeza de sistemas, perda operacional |
| **Empresas afetadas (geral)** | US$ 3,2 bilhões | Danos totais estimados a outras organizações |
| **Bitcoin pagos aos hackers** | US$ 130.000 | 52,2 BTC — valor irrisório comparado ao dano causado |
| **Marcus Hutchins (domínio)** | US$ 11,69 | O custo do kill switch que salvou o mundo |
| **Custo total global** | **US$ 4-5 bilhões** | Estimativa do governo do Reino Unido e empresas de segurança |

---

### 12. IMPACTO HUMANO — Histórias pessoais

**Marcus Hutchins (MalwareTech):**

Em 12 de maio de 2017, Hutchins era um analista de segurança de 22 anos que morava com os pais em Ilfracombe, uma cidade praiana de 11.000 habitantes no sudoeste da Inglaterra. Ele estava em casa, monitorando o malware, quando registrou o domínio. Em horas, seu nome apareceu em todos os jornais do mundo. Ele foi aclamado como herói. Entrevistas, palestras, prêmios.

Em 3 de agosto de 2017, Hutchins estava no Aeroporto Internacional de Las Vegas, prestes a embarcar de volta para o Reino Unido depois da conferência DEF CON, quando foi preso pelo FBI. A acusação: ele havia criado e vendido o malware bancário Kronos entre 2012 e 2015. Sua fiança foi fixada em US$ 30.000. Ele passou meses em prisão domiciliar em Los Angeles antes de ser condenado em 2019 a 12 meses de prisão domiciliar — com a sentença reconhecendo seu papel em parar o WannaCry como fator atenuante.

**A enfermeira do NHS em Northampton:**

Sarah (nome alterado) trabalhava na emergência do Northampton General Hospital. Em 12 de maio, ela estava em seu turno quando o sistema caiu. Todos os prontuários eletrônicos desapareceram. Ela teve que usar papel e caneta para registrar os pacientes. "Eu me senti como se estivesse na Idade Média", disse ela ao The Guardian. Um paciente com suspeita de AVC foi atrasado em 40 minutos porque os exames não podiam ser agendados digitalmente.

**Brad Smith, presidente da Microsoft:**

Smith foi o executivo que publicou o artigo mais contundente sobre o ataque. Ele culpou diretamente a NSA. "Os governos do mundo inteiro deveriam tratar esse vazamento como um alerta", escreveu. "As vulnerabilidades que eles acumulam podem causar danos generalizados." Smith se tornou uma voz improvável — um executivo de tecnologia defendendo a divulgação responsável de vulnerabilidades contra os próprios governos.

---

### 13. LIÇÕES APRENDIDAS

1. **O acúmulo de vulnerabilidades por governos é uma ameaça à segurança global.** A NSA sabia do EternalBlue e não o divulgou. Quando foi roubado, a arma se voltou contra o mundo. Brad Smith da Microsoft estava certo.

2. **Patches de segurança não funcionam se ninguém os aplica.** O MS17-010 foi lançado em março de 2017. WannaCry explodiu em maio. A diferença entre estar seguro e estar vulnerável foi um "Windows Update" que milhares de organizações não executaram.

3. **Ransomware como worm é uma arma de destruição em massa.** Antes de WannaCry, ransomware atacava um alvo por vez. Depois, a propagação automática se tornou o padrão. NotPetya (2017) e todas as variantes subsequentes adotaram a mesma técnica.

4. **A infraestrutura crítica não pode depender de sistemas legados.** O NHS rodava Windows XP em 2017 — um sistema operacional que a Microsoft havia parado de atualizar em 2014. Hospitais, fábricas, usinas — todos precisam de atualização ou isolamento.

5. **Heróis acidentais salvam o mundo, mas têm seu próprio passado.** Marcus Hutchins era herói e criminoso. A vida real não é limpa como um filme. A história dele é um lembrete de que pessoas são complicadas.

6. **Bitcoin como resgate não funciona sem infraestrutura decente.** O sistema de pagamento de WannaCry foi tão mal implementado que a maioria das vítimas que pagou nunca recebeu os arquivos de volta. O modelo de negócio do ransomware não era bom.

7. **A cooperação internacional é frágil em crise cibernética.** Não houve resposta coordenada global ao WannaCry. Cada país lidou com o ataque individualmente. A falta de um tratado internacional de guerra cibernética ficou exposta.

8. **A linha entre guerra cibernética ofensiva e defensiva é artificial.** A NSA criou armas para atacar inimigos. Essas armas foram usadas contra civis. O mesmo exploit que espionava adversários estrangeiros parou hospitais ingleses.

---

### 14. LEGADO — O que mudou no mundo

**WannaCry foi o despertar global para o ransomware.** Antes, ransomware era um problema de TI. Depois, tornou-se um problema de diretoria, de governo, de segurança nacional.

**O NHS se tornou o símbolo da vulnerabilidade da infraestrutura crítica.** Se um sistema de saúde de um país do G7 podia ser paralisado, qualquer um podia. Governos do mundo inteiro começaram a auditar seus sistemas críticos.

**A Microsoft forçou a mudança.** O artigo de Brad Smith sobre a "Convenção Digital de Genebra" se tornou um documento de referência. Empresas de tecnologia passaram a pressionar governos por divulgação responsável de vulnerabilidades.

**O EternalBlue nunca morreu.** Mesmo após WannaCry, EternalBlue continuou sendo usado em dezenas de ataques, incluindo NotPetya (2017), TrickBot (2018) e uma série de ataques de cryptojacking.

**O Lazarus Group profissionalizou seu modelo:** WannaCry foi o primeiro ataque global do grupo. Depois vieram ataques mais sofisticados — e mais lucrativos. O grupo se tornou a principal ameaça cibernética patrocinada por estado do mundo.

---

### 15. CURIOSIDADES — 6 fatos surpreendentes

1. **WannaCry arrecadou apenas US$ 130.000 em Bitcoin.** A conta recebeu 52,2 BTC. Considerando o dano de US$ 4 bilhões, a relação custo-dano foi de 1 para 30.769. Foi o crime cibernético menos lucrativo da história em termos proporcionais.

2. **Marcus Hutchins registrou o domínio do kill switch sem querer.** Ele pensou que estava apenas verificando uma hipótese técnica. Não esperava que o domínio existente interrompesse a propagação global do worm.

3. **O código de WannaCry estava cheio de erros de programação.** O módulo de descriptografia não funcionava. A lógica de propagação tinha bugs. A infraestrutura de comando e controle era frágil. Foi um malware funcional, mas mal construído.

4. **A NSA nunca revelou como descobriu a vulnerabilidade SMBv1.** Sabe-se que a agência sabia do EternalBlue desde pelo menos 2013. Mas como a falha foi descoberta — e por que não foi divulgada — permanece classificado.

5. **O patch MS17-010 foi lançado exatamente no mesmo dia em que os Shadow Brokers vazaram o exploit.** A Microsoft disse que o patch não foi uma resposta ao vazamento — que foi planejado independentemente. A coincidência é suspeita.

6. **O WannaCry matou pessoas?** Não diretamente. Mas o fechamento de emergências hospitalares no Reino Unido atrasou o atendimento de pacientes com AVC, parada cardíaca e trauma. Estima-se que 40-80 mortes podem estar indiretamente ligadas ao atraso no atendimento médico durante o período em que 6 hospitais estavam fechados.

---

### 16. LINHA DO TEMPO — Tabela cronológica

| Data | Hora | Evento |
|------|------|--------|
| **2013 (est.)** | — | NSA desenvolve EternalBlue para exploração SMBv1 |
| **2016 (ago)** | — | Shadow Brokers aparecem e afirmam ter exploits da NSA |
| **2017 (14 mar)** | — | Microsoft lança patch MS17-010 |
| **2017 (14 abr)** | — | Shadow Brokers vazam EternalBlue + DoublePulsar publicamente |
| **2017 (12 mai)** | 07h44 | Telefónica (Espanha) é infectada — primeiro sinal documentado |
| **2017 (12 mai)** | 09h00 | NHS Reino Unido relata 6 hospitais infectados |
| **2017 (12 mai)** | 10h30 | 74 países infectados |
| **2017 (12 mai)** | 13h00 | Europa e Ásia em pânico |
| **2017 (12 mai)** | 15h00 | 150 países infectados, 230.000 sistemas |
| **2017 (12 mai)** | 15h09 | Marcus Hutchins registra domínio; propagação é interrompida |
| **2017 (12 mai)** | 18h00 | Infecções caem para perto de zero globalmente |
| **2017 (15 mai)** | — | Microsoft publica artigo de Brad Smith sobre "Convenção Digital de Genebra" |
| **2017 (19 mai)** | — | Atribuição oficial à Coreia do Norte (Lazarus Group) |
| **2017 (dez)** | — | Governo Trump confirma atribuição publicamente |
| **2017 (dez)** | — | Reino Unido, Austrália, Canadá e Nova Zelândia emitem declaração conjunta |
| **2017 (dez)** | — | CISA confirma o ataque e divulga recomendações de mitigação |

---

### 17. REFERÊNCIAS HISTÓRICAS — Fontes

1. **Microsoft.** "The Need for a Digital Geneva Convention." Brad Smith, 14 de maio de 2017.
2. **CISA/NCSC.** "Alert (AA17-132A): Indicators Associated With WannaCry Ransomware." 2017.
3. **NSA (vazado).** "EternalBlue Exploit Analysis by Shadow Brokers." Abril de 2017.
4. **Kaspersky Lab.** "WannaCry Ransomware: Analysis." 2017.
5. **Symantec.** "WannaCry: Ransomware Worm Analysis." 2017.
6. **CrowdStrike.** "Lazarus Group and WannaCry: Attribution Analysis." 2017.
7. **FBI.** "WannaCry Ransomware: Attribution to North Korea." 2017.
8. **The New York Times.** "WannaCry Cyberattack: Who Was Behind It and Why Did It Happen?" 12 de maio de 2017.
9. **WIRED.** "The WannaCry Ransomware Hack Was a Wake-Up Call for the World." Andy Greenberg, 2017.
10. **NHS Digital.** "Lessons Learned Review of the WannaCry Ransomware Attack." Reino Unido, 2018.

---

*Fim do Episódio 07*
