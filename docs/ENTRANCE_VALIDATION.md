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
- `tests/verify-release-files.cjs`: comparação dos bytes dos 16 PNGs/mestres e ZIP, fontes de entrada, prévia de download, link direto e reprodução real de capítulo/episódio com pausa em mudança de aba e Escape, em desktop/mobile. A barra do preloader recebe verificação de tamanho para evitar o encolhimento pelo layout flex legado.

## Materiais

`assets/media/war-room-launch-2026/` contém cinco PNGs de feed 1080 × 1350, dois stories 1080 × 1920, um PNG LinkedIn 1200 × 627 e os oito mestres em resolução dupla, sRGB. Textos, links, créditos, HTML editável e manifest de dimensões/SHA-256 acompanham o pacote ZIP.

`scripts/export-launch-materials.cjs` exporta composições reais e rejeita erro de imagem, erro JS e overflow. `tests/verify-launch-materials.cjs` verifica formato, espaço de cor, dimensões, hashes e relação 2× dos mestres; produz contact sheet local revisada visualmente. Stories mantêm conteúdo principal entre as margens superior/inferior destinadas à interface. Endereços impressos em PNG não são clicáveis; o pacote instrui o uso de sticker de link e URLs na postagem. Nenhuma postagem social foi realizada automaticamente.

## Limites

A rede da hero é editorial, sem representar relações causais do corpus. Testes em mobile são emulação; não medem bateria/GPU de um celular físico. Imagens remotas da galeria podem falhar independentemente do site. Redes sociais podem recomprimir os PNGs. Os mestres preservam qualidade da composição de texto/vetor, sem inventar resolução adicional da captura do mapa. Material de áudio pessoal bruto permanece fora do Git e do ZIP.

## Publicação

A publicação desta atualização foi explicitamente solicitada pelo proprietário. Branch de trabalho `codex/war-room-experience` preservada; main avançada sem force push. Runtime final da entrada: `a9272bf`, [Pages run 37151443101 aprovado](https://github.com/EDY075/WAR_ROOM/actions/runs/37151443101). Pages permanece estático na raiz de main, com caminhos relativos sob `/WAR_ROOM/`.

Conferência no endereço público: suites de entrada, experiência e documentários aprovadas — quatro larguras, 17 dossiês e 102 capítulos em desktop/mobile, navegação, teclado/foco/Escape, histórico, busca/filtros, galeria, efeitos reduzidos e renderização sob demanda. Reprodução real de capítulo e episódio NotPetya passou com pausa/liberação após troca de aba/Escape. Os textos normalizados de HTML/módulos principais e os hashes binários dos 16 PNGs/mestres e ZIP servidos são idênticos aos locais. ZIP: 10.706.517 bytes, SHA-256 `ebcc7f2834eca918bf55122a2c2298827b706150cbbb0ab9d4f0812e3872ae67`. Capturas atuais em `assets/screenshots/entrance/`; preloader capturado com fixture de fontes pendentes.

Preview e download público: [materiais de divulgação](https://edy075.github.io/WAR_ROOM/assets/media/war-room-launch-2026/). As oito peças/mestres não foram alteradas depois da verificação do ZIP.

O portfólio recebeu a captura real da nova entrada em DPR 2, reduzida para WebP 640/1080/1600 com novos nomes para evitar cache antigo. Runtime `01af7f2`, Worker `85c20a35-3a11-4be5-9bf5-5e7f8c3e0b30`; lint/tipagem/build/dry-run, integração pública desktop/mobile, links, galeria/3D, foco/Escape, transição e hashes das três capas aprovados. O checkout original permanece intacto: 276 hashes, zero diferenças. A auditoria adicional npm apontou 12 avisos preexistentes (10 high / 2 moderate); package/lockfile não foram alterados e não houve atualização forçada de dependências. Essa auditoria é uma limitação registrada, não um teste aprovado. Detalhes no `docs/DEPLOYMENT.md` do portfólio.

Revisões seguintes de documentação/capturas/testes não mudam o runtime indicado acima.
