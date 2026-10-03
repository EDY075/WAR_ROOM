# WAR ROOM — entrega da evolução para revisão

Data: 3 de outubro de 2026. Branch: `codex/war-room-experience`. Código final medido: `4e66d81`; base pública: `aeaa524`. Sem push, merge, tag, deploy ou atualização da release v1.1.0.

## Resultado funcional

Os 17 dossiês têm o mesmo padrão documental: Resumo, História, Análise, Mídia e Fontes; seis capítulos manuais em cada História (102 capítulos), aberturas específicas, contexto, cronologia, impacto, defesa e referências. A história integral original fica em disclosure nativo. Uma camada editorial separada acrescenta leitura documental e distingue dramatização, estimativa, atribuição e evidência.

EPISODES, STORIES e INTEL_INDEX permanecem equivalentes à base após serialização JSON, protegidos por SHA-256 em `tests/verify-experience-data.mjs`. Datas, fatos, identificadores e referências originais não foram substituídos.

Busca, filtros, mapa, timeline, relações e seleção usam o estado compartilhado. Histórico restaura caso, aba, capítulo, filtros, busca, exploração, ordem, ampliação do mapa, scroll e foco. Todos os casos aceitam links de capítulo. Trocar de caso começa pela Abertura; voltar restaura o capítulo anterior. Ordem editorial conserva a sequência original; cronologia usa o primeiro ano documentado dos intervalos, com desempate editorial.

A central e os capítulos usam cartografia real Natural Earth 1:110m, local e compartilhada (141.762 bytes). Controles deslocados têm linhas de referência; cada contexto distingue origem, alvo ou atribuição. Log4j tem alcance global explícito, sem uma origem geográfica fictícia. Zoom por botões e navegação mobile por trilho acessível não interceptam scroll. A animação do capítulo pausa manualmente, fora da área de leitura, em documento oculto e em efeitos reduzidos.

Onze novas reconstituições locais WebP (40–90 KiB cada), a reconstituição NotPetya e os cinco arquivos modernos creditados sustentam as aberturas. A galeria original continua disponível com tratamento de erro, timeout e resposta atrasada. Imagens geradas, arquivos, documentos editoriais e mapas têm identificação própria.

## Piloto e divulgação

- NotPetya: seis capítulos, documento editorial, arquivo Maersk de 2013 com data/autor/CC BY-SA 2.0, cartografia e fontes Microsoft, NCSC/governo britânico e DOJ.
- Capa PNG, carrossel de cinco páginas, seis planos verticais e fonte HTML editável.
- MP4 narrado: H.264 + AAC, 1080 × 1920, 24 fps, 42,000 s, 2.028.152 bytes.
- MP4 sem áudio: H.264, 1080 × 1920, 24 fps, 36,000 s, 1.427.328 bytes.
- MP3: voz sintética em português, 37,450 s, 600.620 bytes; nove legendas VTT.
- VoiceStudio / OmniVoice local já instalado, voz padrão, sem perfil pessoal. Transcrição local validou os elementos factuais do roteiro. Configuração anterior de motor/modelo foi restaurada e confirmada. A tentativa que não passou na fala não foi entregue. O site só usa os arquivos estáticos; não depende de serviço TTS.

Produção e roteiro: [NOTPETYA_STORYBOARD.md](NOTPETYA_STORYBOARD.md). Prompts, cartografia e créditos: [DOCUMENTARY_VISUALS.md](DOCUMENTARY_VISUALS.md), [CREDITS.md](../assets/images/CREDITS.md).

## Verificações executadas

| Verificação | Resultado |
| --- | --- |
| `node tests/verify-final-consistency.mjs` | Passou: 17 episódios, CTA e assets originais |
| `node tests/verify-cti-evolution.mjs` | Passou: contratos operacionais, sintaxe, caminhos relativos e nomes de assets |
| `node tests/verify-ai-memory.mjs` | Passou: documentos de continuidade e links |
| `node tests/verify-portfolio-readme.mjs` | Passou: release pública preservada, sem caminhos locais vazados |
| `node tests/verify-experience-data.mjs` | Passou: corpus exato e sintaxe dos três módulos |
| `node tests/verify-experience.cjs` | Passou: desktop 1440 × 900 / mobile 390 × 844, 17 casos e fluxos completos |
| `node tests/verify-documentaries.cjs` | Passou: 102 capítulos em ambos os viewports, imagens decodificadas, fontes, mapas e links |
| `node scripts/capture-experience.cjs` | Passou: 23 capturas reais, arquivo decodificado e layout de 320px |
| FFprobe + transcrição local | Passou: formatos/durações/áudio reais e fala confrontada com roteiro |
| `git diff --check` | Passou |

Os cenários incluem teclado, setas/Home/End nas abas, foco contido/restaurado, Escape em busca/dossiê/galeria aninhada, histórico para trás/frente, seleção por mapa, ampliação e retorno do mapa, filtros, busca, timeline, exploradores e relações, ordem editorial/cronológica e links diretos. Todos os capítulos têm leitura e referências; aberturas são distintas. Nenhum caso força os 17 episódios a permanecerem renderizados.

A galeria é exercitada com primeira resposta atrasada além da segunda e, separadamente, falhas de rede. Essas fixtures determinísticas não provam disponibilidade de cada imagem externa legada. Os arquivos locais novos e as cinco aberturas modernas foram decodificados em ambos os viewports.

Vídeos reais são carregados e reproduzidos; fechar ou trocar aba pausa a reprodução. A versão narrada carrega as nove legendas. Preferência do sistema e controle de efeitos são testados; a animação cartográfica fica estática no modo reduzido. Sem erros JavaScript nos cenários executados.

## Comparação de desempenho atual

Três execuções por viewport e versão, sequenciais, no mesmo host, em Chromium Edge headless, sem throttling. Nenhuma síntese, exportação, montagem ou outro job de browser competiu com as medições. `tests/measure-experience.cjs` serve `aeaa524:index.html` por uma rota do browser no mesmo endereço `/WAR_ROOM/`, conservando caminhos relativos. Wikimedia é bloqueada nas duas versões para isolar o processamento decorativo.

O hero é amostrado durante 1,5 s, a partir de 2,6 s após navegação. Tempo é a diferença de `Performance.TaskDuration` via CDP; callbacks são requestAnimationFrame efetivamente executados. Leitura/modo reduzido usam janelas de 400 ms após estabilização. Medianas da rodada final, incluindo todos os casos, cartografia e mídia pronta:

| Mediana | Desktop antes | Desktop depois | Mobile emulado antes | Mobile emulado depois |
| --- | ---: | ---: | ---: | ---: |
| Callbacks do hero / 1,5 s | 1.092 | 40 | 362 | 16 |
| Tempo de tarefas no hero / 1,5 s | 939,8 ms | 155,3 ms | 210,9 ms | 44,6 ms |
| Callbacks na leitura / 400 ms | 380 | 0 | 196 | 0 |
| Callbacks com efeitos reduzidos / 400 ms | 301 | 0 | 98 | 0 |
| Episódios forçados visíveis ao abrir dossiê | 17 | 0 | 17 | 0 |

O tempo de tarefas desse recorte cai aproximadamente 83% no desktop e 79% no mobile emulado. Os ganhos decorrem de parar loops, reduzir resolução/frequência dos canvases ambientais, remover grain repetido e camadas caras, e conservar renderização sob demanda. São resultados locais de um recorte do hero; não são uma promessa de ganho igual em toda interação, hardware ou rede. Zero callbacks decorativos não significa zero processamento de toda a página.

Há quatro pequenas requisições locais iniciais (CSS e três módulos JS), sem framework ou dependência de produção. Imagens documentais, SVG geográfico, áudio e vídeo não são solicitados no hero inicial, verificado em ambos os viewports. Cartografia da central entra quando próxima da área visível ou por navegação explícita; o SVG é reutilizado do cache pelos capítulos. Mídia pesada só é carregada por escolha na aba Mídia.

Não foi executado Lighthouse novo nem medida de INP/Core Web Vitals de campo. As pontuações da release anterior e os números intermediários do piloto não são apresentados como resultados atuais. Amostras brutas ficam em `audit/`, ignorado pelo Git; método e medianas sanitizadas estão aqui.

## Preview e evidência visual

- [Piloto local](http://127.0.0.1:4173/WAR_ROOM/?tab=story&chapter=opening#dossier-notpetya).
- [Outro caso: Stuxnet](http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-stuxnet).
- [Divulgação e downloads](http://127.0.0.1:4173/WAR_ROOM/assets/media/notpetya/materials.html).
- [Mapa desktop](../assets/screenshots/experience/map-desktop.png) / [mobile](../assets/screenshots/experience/map-mobile.png).
- [Stuxnet desktop](../assets/screenshots/experience/stuxnet-desktop.png) / [mobile](../assets/screenshots/experience/stuxnet-mobile.png).
- [NotPetya desktop](../assets/screenshots/experience/pilot-desktop.png) / [mobile](../assets/screenshots/experience/pilot-mobile.png).
- Capturas adicionais: hero, central, Morris, SolarWinds, MGM, Volt Typhoon, propagação, arquivo Maersk e 320px em `assets/screenshots/experience/`.

O preview usa servidor localhost temporário, mantido para revisão. O link público nas peças aponta ao dossiê existente; a evolução só estará pública após publicação separadamente autorizada. Testes são em browser real com emulação mobile e reduced motion; não representam certificação em dispositivo físico ou leitor de tela. Fontes externas legadas podem falhar; novos visuais locais e alternativas de leitura preservam a experiência.
