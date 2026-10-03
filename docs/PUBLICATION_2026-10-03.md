# Publicação · 03/10/2026

## Atualização posterior · entrada e divulgação HD

Por nova solicitação explícita do proprietário, a hero/preloader foi refinada, a luz do mouse substituída por faíscas limitadas, os três perfis adicionados aos créditos e um ZIP HD de divulgação publicado. Runtime `a9272bf`, [Pages run 37151443101](https://github.com/EDY075/WAR_ROOM/actions/runs/37151443101) aprovado. [Preview/ZIP/textos](https://edy075.github.io/WAR_ROOM/assets/media/war-room-launch-2026/). A capa real no portfólio também foi atualizada: runtime `01af7f2`, Worker `85c20a35-3a11-4be5-9bf5-5e7f8c3e0b30`. Toda a validação atual, comparação de processamento e limites estão em [ENTRANCE_VALIDATION.md](ENTRANCE_VALIDATION.md). Os registros abaixo descrevem a primeira publicação documental e não devem ser tratados como a versão atual da hero.

O proprietário autorizou explicitamente atualizar GitHub, GitHub Pages e seu portfólio, substituindo o escopo anterior de revisão local.

- WAR ROOM: https://github.com/EDY075/WAR_ROOM · runtime publicado `58ee3e476351a3adbbbc3ae108c99ba1277f8d84`, main; branch `codex/war-room-experience` preservada. Fast-forward, sem reescrever histórico. A tag v1.1.0 permanece como referência histórica.
- GitHub Pages: https://edy075.github.io/WAR_ROOM/ · [build concluído](https://github.com/EDY075/WAR_ROOM/actions/runs/37146988319). Fonte existente main/root e arquitetura estática mantidas.
- Narrações: https://edy075.github.io/WAR_ROOM/assets/media/narrations/ · 17 episódios completos, 102 capítulos, 42:13.53 no total dos completos. Somente mídia final autorizada; original pessoal, referência, WAVs, logs e ZIP local permanecem fora do Git.
- Portfólio: https://edy-gomes-portfolio.edy-scanurl-family-worker.workers.dev/work/war-room · Worker existente `edy-gomes-portfolio`, versão `7f40d6c8-619f-470f-b6f7-f089745dc59d`, runtime `EDY075/EDY-Portfolio@dac04fc`. Integração preparada em `codex/portfolio-war-room-release`, preservando o checkout original com 276 hashes inalterados e os commits remotos de README/vídeo. Repositório do portfólio também atualizado por fast-forward.

## Conferência desta publicação

- Quatro verificadores originais, integridade dos 17 registros e diff check passaram. Nenhuma alteração de fatos/atribuições/fontes.
- Suíte documental executada contra o GitHub Pages público: 102 capítulos em desktop/mobile, mapas, fontes, links diretos, histórico, efeitos reduzidos, sem overflow ou renderização forçada do corpus.
- Suíte de narração adaptada para o endereço público: decodificação real dos 119 MP3s no browser; biblioteca, áudio por escolha, teclado, pausa/liberação, races, falha/retry e efeitos reduzidos passaram. Probes FFprobe são dos arquivos locais finais. Os testes de falha/ocultação usam as simulações documentadas na produção, não certificam condições físicas.
- SHA-256 dos arquivos servidos confere com os blobs Git para HTML, módulos principais, catálogo, cartografia e todos os 17 MP3s completos (23 assets). A diferença inicial entre checkout Windows e Pages era apenas CRLF/LF; a comparação foi corrigida para os blobs publicados.
- Portfólio: lint/tipagem/build/dry-run, capas em cinco formatos, 12 galerias em desktop/390/320 passaram. Pós-deploy: mesmos 12 cases, novo case/3D/links, teclado, Escape/foco, canonical/sitemap, exclusão/noindex dos cases privados e hashes das cinco novas imagens no browser. Capturas públicas e detalhes no README e docs/DEPLOYMENT.md do portfólio.
- Chrome DevTools MCP não estava disponível; usado Edge headless real com Playwright. Não há nova medição Lighthouse, campo ou teste em aparelho físico. A comparação CDP local pré-publicação segue qualificada em [EXPERIENCE_VALIDATION.md](EXPERIENCE_VALIDATION.md).

Os vídeos curtos NotPetya continuam usando a voz sintética padrão anterior. As narrações prolongadas dos 17 casos usam a referência pessoal autorizada. Fontes remotas antigas podem falhar; leitura e referências continuam disponíveis. Os commits de documentação posteriores não alteram o runtime acima.

A revisão final incluiu o novo case no mapa de transições do portfólio: capa, chegada ao topo e navegação com efeitos completos foram verificadas em desktop/mobile. O Worker final acima substitui o primeiro deploy `5a5bc460-a0b5-4bb6-a58d-a13eb80211dc`; demais assets/rotas permanecem iguais. A última publicação de documentação WAR ROOM foi construída com sucesso no [run 37147705499](https://github.com/EDY075/WAR_ROOM/actions/runs/37147705499), em 9738482. Revisões posteriores deste relatório não mudam o runtime.
