# Entrada e divulgação · 03/10/2026

## Escopo entregue

Nova hero preto/dourado/off-white, tipografia legível, rede editorial de pontos/órbitas em SVG, ações diretas para mapa e episódios, faíscas pequenas no mouse e preloader baseado na inicialização real. O mapa tem mais espaço na largura do desktop. Os créditos contêm GitHub EDY075, LinkedIn edmilsongomes21 e Instagram edmilson_zn_, confirmado pelo proprietário.

Os 17 registros canônicos permanecem idênticos aos fingerprints protegidos por `tests/verify-experience-data.mjs`. A atualização preserva 102 capítulos, cinco abas, mapas, filtros, busca, histórico, galeria, 119 MP3s e renderização sob demanda. Não houve nova síntese ou alteração dos arquivos de áudio.

## Processamento · medição atual antes/depois

Três execuções por viewport, sequenciais, usando `tests/measure-experience.cjs`, Chromium Edge headless e Chrome DevTools Protocol no mesmo ambiente local. Baseline: revisão `be43e1e` imediatamente antes desta alteração; resultado: nova hero com SVG estático. Cada amostra de repouso tem 1,5 segundo; `TaskDuration` representa tempo de tarefas do renderer, não carregamento, FPS ou desempenho em hardware móvel real.

| Viewport | Antes: TaskDuration em ms | Depois: TaskDuration em ms | Mediana antes → depois |
| --- | --- | --- | --- |
| Desktop | 258,473 / 238,477 / 250,894 | 40,459 / 43,468 / 42,907 | 250,894 → 42,907 (−82,9%) |
| Mobile emulado | 73,044 / 71,526 / 67,985 | 43,792 / 48,066 / 50,741 | 71,526 → 48,066 (−32,8%) |

Callbacks de requestAnimationFrame em 1,5 s: desktop 41 → 0, mobile 16 → 0. Leitura e efeitos reduzidos: zero callbacks decorativos nas janelas de 400 ms. Abrir um dossiê força zero episódios a permanecerem renderizados. A hero carrega sete recursos locais de código/estilo e nenhuma mídia de dossiê, áudio, vídeo ou mapa na abertura; a baseline carregava cinco recursos.

Uma primeira implementação com órbitas SVG em animação contínua foi rejeitada: medianas 277,252 ms desktop / 225,082 ms mobile, apesar de zero callbacks JavaScript. O custo de pintura continuava alto. A composição final mantém o SVG estático e usa movimento breve apenas em interação. Esta é uma decisão sustentada pela medição, não apenas por contagem de loops.

Os arquivos brutos da medição ficam em `audit/hero-before-be43e1e.json`, `audit/hero-after.json` e `audit/hero-after-static.json`, ignorados por Git. Não há novo Lighthouse ou dados de campo; escores antigos continuam identificados como históricos. Chrome DevTools MCP não estava disponível; foi usado Playwright com Edge e CDP.

## Verificação funcional e visual

- `tests/verify-entrance.cjs`: 1440 × 900, 390 × 844, 320 × 720 e 2560 × 1440; ausência da luz/Canvas de fundo, nenhum loop JS em repouso, faíscas limitadas e encerradas após o mouse parar, desligamento com efeitos reduzidos, navegação ao mapa com teclado/foco, pausa fora da viewport, três links corretos, ausência de overflow/erros JS.
- Preloader com fontes deliberadamente pendentes: controles imediatos, Tab/Shift+Tab, Escape, Enter, retorno de foco e prazo máximo de 700 ms para fontes. Enter tem preventDefault para evitar acionar o CTA após a mudança de foco. A captura do preloader usa essa fixture de atraso, não afirma uma duração normal de carregamento.
- `tests/verify-experience.cjs`: desktop/mobile, 17 dossiês, abas, teclado, foco, Escape, histórico, busca, filtros, corrida/falha de galeria, efeitos reduzidos e vídeo real. As falhas/corridas remotas usam fixtures determinísticas.
- `tests/verify-documentaries.cjs`: 102 capítulos em desktop/mobile, imagens locais, mapas, fontes, links diretos, histórico e renderização sob demanda.
- Quatro verificadores originais, integridade canônica e `git diff --check` executados na entrega. Capturas revisadas em `assets/screenshots/entrance/`.

## Materiais

`assets/media/war-room-launch-2026/` contém cinco PNGs de feed 1080 × 1350, dois stories 1080 × 1920, um PNG LinkedIn 1200 × 627 e os oito mestres em resolução dupla, sRGB. Textos, links, créditos, HTML editável e manifest de dimensões/SHA-256 acompanham o pacote ZIP.

`scripts/export-launch-materials.cjs` exporta composições reais e rejeita erro de imagem, erro JS e overflow. `tests/verify-launch-materials.cjs` verifica formato, espaço de cor, dimensões, hashes e relação 2× dos mestres; produz contact sheet local revisada visualmente. Stories mantêm conteúdo principal entre as margens superior/inferior destinadas à interface. Endereços impressos em PNG não são clicáveis; o pacote instrui o uso de sticker de link e URLs na postagem. Nenhuma postagem social foi realizada automaticamente.

## Limites

A rede da hero é editorial, sem representar relações causais do corpus. Testes em mobile são emulação; não medem bateria/GPU de um celular físico. Imagens remotas da galeria podem falhar independentemente do site. Redes sociais podem recomprimir os PNGs. Os mestres preservam qualidade da composição de texto/vetor, sem inventar resolução adicional da captura do mapa. Material de áudio pessoal bruto permanece fora do Git e do ZIP.

## Publicação

A publicação desta atualização foi explicitamente solicitada pelo proprietário. Branch de trabalho `codex/war-room-experience` preservada; Pages permanece estático na raiz da branch main, com caminhos relativos sob `/WAR_ROOM/`. O resultado e a revisão servida serão registrados após o deploy.
