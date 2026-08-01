# WAR ROOM — EPISÓDIO 08
## NOTPETYA (2017)
### Gênero: War Crime Investigation / Tribunal de Haia

---

## 1. PRÓLOGO

Em 27 de junho de 2017, a Ucrânia não foi invadida por tanques. Foi invadida por um software que se chamava de ransomware mas era, na verdade, uma bomba. Às 10h30, horário de Kiev, milhares de computadores em toda a Ucrânia começaram a exibir a mesma tela vermelha: um aviso de resgate de US$ 300 em Bitcoin, um endereço de carteira, um cronômetro. Parecia um ataque criminoso comum. Não era. O resgate era uma farsa. O pagamento não devolvia os dados. O código foi escrito para destruir — e destruiu com uma precisão que só um exército consegue coordenar. Quando as 24 horas seguintes se encerraram, 10 bilhões de dólares em danos estavam espalhados por 65 países. Nenhum centavo foi pago. Não era crime. Era guerra.

---

## 2. CONTEXTO HISTÓRICO

Junho de 2017. A Ucrânia vivia o terceiro ano de uma guerra híbrida com a Rússia que começara com a anexação da Crimeia em 2014. O conflito no Donbass já havia matado mais de 10 mil pessoas. Os Acordos de Minsk eram violados sistematicamente. No plano global, o governo Trump assumira a Casa Branco em janeiro, e as agências de inteligência americanas investigavam a interferência russa nas eleições de 2016. A OTAN aumentava sua presença no Leste Europeu. A Ucrânia havia aprovado leis de descomunização e se aproximava da União Europeia — e a Rússia respondia com pressão militar, desinformação e, como se descobriria, ciberataques coordenados. No dia 28 de junho, a Ucrânia celebraria seu Dia da Constituição. O ataque veio na véspera.

---

## 3. CONTEXTO TECNOLÓGICO

O cenário tecnológico de 2017 era o auge do ransomware como crime organizado. WannaCry havia paralisado o NHS britânico dois meses antes, usando o EternalBlue, um exploit vazado da NSA. Petya, o ancestral do NotPetya, circulava desde 2016 como um ransomware comum. A infraestrutura de TI corporativa ainda confiava em modelos monolíticos: Active Directory on-premises, atualizações automáticas de software sem verificação de integridade, e backups armazenados na mesma rede que os servidores de produção. O Windows 7 ainda dominava o ambiente corporativo. O conceito de "software supply chain attack" era conhecido tecnicamente, mas nenhuma empresa grande levava a sério a ideia de que um update automático de um programa de contabilidade pudesse derrubar 76 mil terminais em 7 minutos instantâneos.

---

## 4. CONTEXTO POLÍTICO

A Ucrânia havia aprovado em 2015 uma lei exigindo que todas as empresas usassem o software de contabilidade M.E.Doc para declarações fiscais. Era uma decisão de modernização administrativa, mas criou um ponto único de falha que o GRU exploraria com precisão cirúrgica. Em outubro de 2020, o Departamento de Justiça dos EUA formalizaria a acusação: seis oficiais do GRU, da Unidade 74455, conhecida como Sandworm. A mesma unidade que derrubou a rede elétrica ucraniana em 2015 e 2016, que atacou o Comitê Nacional Democrata em 2016, e que tentou interferir na eleição francesa de 2017. O alvo do NotPetya era a Ucrânia. O fato de ter atingido Maersk, Merck, FedEx e Saint-Gobain foi dano colateral aceito — talvez desejado.

---

## 5. PRIMEIROS SINAIS

Às 10h30 de 27 de junho, a empresa de software M.E.Doc — que processava a contabilidade de 80% das empresas ucranianas — liberou uma atualização automática legítima de seu programa de declaração fiscal. Mas o servidor de updates da M.E.Doc havia sido comprometido meses antes pelo Sandworm. O update que os computadores baixaram naquela manhã continha o NotPetya. Em 30 minutos, milhares de empresas ucranianas estavam paralisadas: bancos, aeroportos, o metrô de Kiev, o gabinete do primeiro-ministro, a operadora de telecomunicações Ukrtelecom. O sistema de monitoramento de radiação de Chernobyl caiu. As telas ficaram vermelhas. A mensagem de resgate pedia US$ 300 em Bitcoin. Ninguém sabia ainda que pagar não adiantava.

---

## 6. ESCALADA

O NotPetya não era apenas um wiper disfarçado de ransomware — era um motor de propagação lateral implacável. Usava EternalBlue e EternalRomance, dois exploits da NSA que o grupo Shadow Brokers vazara em abril de 2017. Usava também WMIC e PsExec para se espalhar por redes Windows, e roubava credenciais via Mimikatz. Dentro de um rede corporativa, o NotPetya se movia mais rápido que qualquer resposta humana. Na Maersk, o estrago completo — 4 mil servidores, 45 mil workstations, 800 aplicações — ocorreu em aproximadamente 7 minutos. A contabilidade do mundo parou porque um software de imposto ucraniano foi usado como cavalo de Troia de um exército. O ataque não respeitou fronteiras: da Ucrânia, saltou para Dinamarca, Estados unidos, França, Reino Unido, Alemanha.

---

## 7. MOMENTO CRÍTICO

O ponto de virada, paradoxalmente, foi a constatação de que o resgate não funcionava. Pesquisadores da Cisco Talos e da ESET analisaram o código nas primeiras horas e descobriram que a carteira Bitcoin era hardcoded e única — impossível associar pagamentos individuais a vítimas específicas. O NotPetya sobrescrevia o Master Boot Record com seu próprio código e depois criptografava o MFT (Master File Table). Mesmo que a chave de descriptografia existisse (e não existia), o MBR corrompido impedia o boot. As empresas que pagaram — e várias pagaram — nunca receberam resposta. O valor total arrecadado pelos atacantes foi aproximadamente US$ 10 mil. Um fracasso como crime. Um sucesso absoluto como arma de destruição.

---

## 8. INVESTIGAÇÃO

A atribuição ao Sandworm Team levou três anos para se tornar pública, mas as agências de inteligência sabiam desde o início. A assinatura digital era inequívoca: o uso de exploits da NSA, a infraestrutura de comando e controle, o alinhamento com o calendário ucraniano. Em fevereiro de 2018, o governo holandês revelou que seu serviço de inteligência militar (MIVD) havia hackeado o grupo Sandworm em 2014 e monitorado suas operações em tempo real — incluindo o ataque ao OPCW em Haia. Em outubro de 2020, o DOJ dos EUA indiciou seis oficiais do GRU: Yuriy Andrienko, Sergey Detistov, Pavel Frolov, Anatoliy Kovalev, Artem Ochichenko e Petr Pliskin. As evidências incluíam logs do M.E.Doc, registros de domínios C2, transações de Bitcoin, e vigilância de inteligência de sinais.

---

## 9. RESPOSTA MUNDIAL

A reação imediata foi de contenção. A NATO prometeu aumentar o apoio à cibersegurança ucraniana. O governo Trump emitiu declarações de condenação, mas sem ação militar direta. Em 2018, o Departamento do Tesouro dos EUA sancionou cinco entidades e três indivíduos ligados ao GRU. O Conselho de Segurança Nacional dos EUA classificou o NotPetya como "o ciberataque mais destrutivo da história". No setor privado, as seguradoras entraram em pânico: a Merck processou seu seguro de US$ 1,75 bilhão quando a seguradora recusou o pagamento alegando cláusula de "ato de guerra". Um tribunal de Nova Jersey decidiu a favor da Merck em 2022, forçando o pagamento de US$ 1,4 bilhão e redefinindo o mercado de seguro cibernético global.

---

## 10. CONSEQUÊNCIAS

A Maersk, que movimenta 20% do comércio marítimo global, precisou reconstruir do zero toda a sua infraestrutura de TI. Um único controlador de domínio em Gana sobreviveu porque ficou 15 minutos sem energia durante a janela do ataque — foi a partir dele que a empresa inteira reergueu sua rede. A FedEx-TNT teve que abandonar completamente os sistemas da TNT na Europa e reconstruir. A Merck perdeu meses de produção farmacêutica — vacinas, remédios, tratamentos. A Saint-Gobain parou linhas de produção industrial na França. A Reckitt Benckiser perdeu US$ 130 milhões em vendas. A cadeia de suprimentos global levou meses para se recuperar. E a Ucrânia, alvo primário, sofreu o impacto em infraestrutura crítica: bancos sem processamento, aeroportos fechados, energia comprometida.

---

## 11. IMPACTO FINANCEIRO

| Entidade | Setor | Dano Direto Estimado |
|---|---|---|
| Merck & Co. | Farmacêutico | US$ 870 milhões (US$ 1,4 bi no seguro) |
| FedEx (TNT Express) | Logística | US$ 400 milhões |
| Saint-Gobain | Construção civil | US$ 384 milhões |
| A.P. Moller-Maersk | Transporte marítimo | US$ 300 milhões |
| Mondelez International | Alimentos | US$ 100 milhões |
| Reckitt Benckiser | Bens de consumo | US$ 130 milhões |
| WPP | Publicidade | Dezenas de milhões |
| DLA Piper | Jurídico | Dezenas de milhões |
| **Total global estimado** | | **US$ 10 bilhões** (CISA/Homeland Security) |
| **Resgate efetivamente pago** | | **~US$ 10 mil** (fracasso criminal total) |

---

## 12. IMPACTO HUMANO

Um gerente de TI da Maersk voou para Gana após o ataque com a tarefa de encontrar alguém que soubesse as senhas dos servidores. Ele encontrou um funcionário de 27 anos que havia sido contratado três meses antes — o único que tinha acesso ao controlador de domínio sobrevivente. A farmacêutica Merck teve 70 mil funcionários proibidos de tocar em seus computadores por dias; instruções eram passadas por mensagens de texto copiadas e coladas. Um técnico ucraniano que mantinha o sistema da Ukrtelecom. contou à Reuters que viu a tela vermelha e pensou que era um erro de sistema — então o backup também falhou. Na FedEx-TNT, motoristas de caminhão na Europa não conseguiam escanear pacotes porque os terminais móveis estavam criptografados. O ataque não matou ninguém diretamente, mas atrasou entregas de medicamentos, paralisou fábricas de vacinas e impediu que navios atracassem por semanas. O dano foi sistêmico. Tão sistêmico que só pode ser descrito como guerra.

---

## 13. LIÇÕES APRENDIDAS

1. **Software supply chain é o novo perímetro.** Um fornecedor de software de contabilidade ucraniano comprometeu 80% do parque corporativo do país. O elo mais fraco da corrente define a força de toda a corrente.

2. **Ransomware que não descriptografa não é ransomware.** Qualquer software de resgate que não possa provar capacidade de recuperação deve ser tratado como destruição irreversível. Pagar nunca deve ser a premissa.

3. **Segmentação de rede salva vidas.** Se Maersk tivesse segmentado suas operações críticas dos servidores de escritório, o dano teria sido menor. A maioria das empresas em 2017 ainda operava em redes planas.

4. **Backup offline não é opcional.** As empresas que sobreviveram foram as que mantinham cópias em fita ou storage desconectado da rede. Backups em rede foram criptografados junto com os originais.

5. **Exploits da NSA são responsabilidade da NSA.** O vazamento do EternalBlue pelo Shadow Brokers transformou um arsenal de vigilância em uma arma de destruição em massa. A NSA sabia do vazamento há meses e não alertou adequadamente.

6. **ISO de software é questão de segurança nacional.** Quando um governo obriga empresas a usar um software específico para declaração fiscal, está criando um vetor de ataque centralizado. Essas decisões precisam de auditoria de segurança obrigatória.

7. **O seguro cibernético precisa redefinir "ato de guerra".** A disputa Merck vs. Seguradora mostrou que as apólices não estavam preparadas para ataques patrocinados por Estados. O mercado segurador mudou completamente depois de NotPetya.

---

## 14. LEGADO

O NotPetya redefiniu o que o mundo entende por ciberataque. Antes dele, ransomware era crime. Depois dele, ficou claro que um Estado-nação pode usar malware para causar danos equivalentes a um bombardeio sem disparar um tiro. O governo dos EUA passou a tratar ciberataques destrutivos como ação militar. A OTAN atualizou seus protocolos de defesa cibernética. O setor de seguros global reavaliou apólices e exclusões. E a Maersk, que perdeu quase US$ 300 milhões, tornou-se o estudo de caso definitivo de recuperação de desastres cibernéticos. A imagem do controlador de domínio em Gana — um único servidor em um país da África Ocidental que salvou a maior empresa de navegação do mundo — entrou para a história da TI como a prova de que às vezes a sorte é o melhor firewalls.

---

## 15. CURIOSIDADES

1. O resgate era de US$ 300 em Bitcoin, mas a carteira era hardcoded e única — impossível associar pagamento a vítima. Os criadores nunca tiveram a intenção de recuperar os dados de ninguém.

2. O total arrecadado pelos atacantes foi de aproximadamente US$ 10.670 — algumas vítimas pagaram por desespero, mas nunca receberam chave alguma.

3. O único controlador de domínio da Maersk que sobreviveu ficava em Gana e estava desligado no momento do ataque por falta de energia. Se tivesse ficado ligado 15 minutos a mais, também teria sido criptografado.

4. O software M.E.Doc continuou sendo usado na Ucrânia mesmo após o ataque. O governo ucraniano não tinha alternativa — a lei exigia aquele software.

5. O grupo Sandworm recebeu esse nome de pesquisadores por causa de uma referência à série Duna (as criaturas do deserto que atacam sem aviso). A Unidade 74455 do GRU adotou o codinome como uma insígnia de honra.

6. O CEO da Maersk, Søren Skou, disse em uma conferência em 2018 que o ataque foi "um alerta para o mundo". Ele estava certo — mas o mundo só ouviria quatro anos depois, com a Colonial Pipeline.

---

## 16. LINHA DO TEMPO

| Data | Evento |
|---|---|
| Abril 2017 | Shadow Brokers vaza EternalBlue, EternalRomance e outros exploits da NSA |
| Maio 2017 | WannaCry usa EternalBlue para paralisar NHS e 150 países |
| 27 jun 2017, 10h30 | M.E.Doc libera atualização contaminada com NotPetya |
| 27 jun 2017, 11h00 | Milhares de empresas ucranianas paralisadas |
| 27 jun 2017, 11h30 | Maersk, Merck, FedEx, Saint-Gobain começam a ser atingidas |
| 27 jun 2017, 15h00 | Cisco Talos e ESET confirmam: resgate não funciona |
| 28 jun 2017 | Dia da Constituição da Ucrânia — país em caos digital |
| Ago 2017 | Maersk anuncia prejuízo de US$ 200-300 milhões |
| Out 2017 | Merck anuncia prejuízo de US$ 310 milhões no Q3 |
| Fev 2018 | MIVD holandês revela vigilância do Sandworm desde 2014 |
| Out 2020 | DOJ indicia 6 oficiais do GRU pelo NotPetya |
| Jan 2022 | Tribunal de NJ ordena pagamento de US$ 1,4 bi à Merck |

---

## 17. REFERÊNCIAS HISTÓRICAS

1. Greenberg, A. (2019). *Sandworm: A New Era of Cyberwar and the Hunt for the Kremlin's Most Dangerous Hackers*. Doubleday. — O relato definitivo sobre o Sandworm, com acesso exclusivo aos investigadores.

2. Departamento de Justiça dos EUA (2020). *Six Russian GRU Officers Charged in Connection with Worldwide Deployment of Destructive Malware and Other Disruptive Actions in Cyberspace*. 19 out 2020. — A acusação formal que detalha o modus operandi do Sandworm.

3. CISA / Departamento de Homeland Security (2018). *Statement from Homeland Security Advisor Tom Bossert on the NotPetya Attack*. 15 fev 2018. — O comunicado que classificou o ataque como o mais destrutivo da história.

4. Cisco Talos Intelligence Group (2017). *New Ransomware Variant "Nyetya" Compromises Systems Worldwide*. 27 jun 2017. — A análise técnica inicial que descobriu que o resgate era uma farsa.

5. ESET (2017). *TeleBots are back: NotPetya is actually a wiper, not a ransomware*. 28 jun 2017. — O relatório que confirmou a natureza destrutiva do malware.

6. Reuters (2017). *Ukraine ransomware attack had global reach, researchers say*. 28 jun 2017. — Cobertura jornalística da escalada global.

7. WIRED (2018). *The Untold Story of NotPetya, the Most Devastating Cyberattack in History*. 22 ago 2018. — Reportagem de Andy Greenberg com relatos exclusivos de dentro da Maersk.

8. Superior Court of New Jersey (2022). *Merck & Co., Inc. v. International Indemnity, Inc.* — Decisão que redefiniu o seguro cibernético, obrigando pagamento de US$ 1,4 bilhão.

9. Mandiant (2018). *Sandworm Team: An Attribution Case Study*. — Documento técnico detalhando os indicadores de comprometimento usados para rastrear o GRU.

10. Kaspersky Lab (2017). *NotPetya: New Ransomware or Destructive Wiper?* — Análise do comportamento do malware e sua incapacidade de descriptografar.
