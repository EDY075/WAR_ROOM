# Entrada galáctica · 03/10/2026

## Entrega

Hero com pelo menos 100svh, composição ampliada sem teto de 940px, título e botões com feedback discreto. A rede flutua em uma camada HTML; os quatro alvos de clique/toque/teclado ficam estáveis e selecionam explicações de Origem, Técnicas, Resposta e Impacto. Não representa relações históricas reais. Galáxia local atrás de toda a página, com superfícies escuras para leitura e crédito visível de ilustração gerada com IA. Original e prompt em [créditos da arte](../assets/images/entrance/CREDITS.md).

Preloader visível por uma abertura breve de 850ms, com saída imediata por botão, Enter, Escape ou Espaço. Fontes têm limite de 700ms em paralelo; mídia não bloqueia a entrada. Movimento reduzido dispensa espera/fade. Recarregar limpa a rota/contexto dessa entrada e volta à hero. Nova navegação por link direto e voltar/avançar mantêm contexto. Restauração inicial só acontece após o preloader; abertura muda visibilidade imediatamente e reconfere foco uma vez após renderizar, sem roubar foco já dentro do diálogo.

## Verificação

Edge Chromium / Playwright, sem dependência adicionada ao produto. Viewports 1440×900, 390×844, 320×720, 2560×1440 e 2541×1213 (composição que reproduz janela ampla/zoom da captura fornecida). Mobile é emulado.

- `verify-entrance.cjs`: primeira tela inteira, imagem decodificada, alvos estáveis, seleção por clique/teclado, pausa manual, efeitos reduzidos, zero callbacks JS ociosos, faíscas limitadas, ausência de overflow, foco, créditos e nova abertura após reload. Link direto com capítulo/busca e foco no diálogo; reload limpa busca e fecha dossiê. Voltar mantém capítulo.
- `verify-experience.cjs`: 17 dossiês, cinco abas, busca/filtros, histórico, teclado/foco/Escape, galeria com corrida/falha, vídeo real e renderização sob demanda. Fixtures remotas só validam lógica de falha/corrida.
- `verify-documentaries.cjs`: 102 capítulos em desktop/mobile, leitura, imagens/cartografia/fontes, links e histórico.
- `verify-release-files.cjs`: bytes de runtime/galáxia, pacote promocional existente e reprodução real de capítulo/episódio NotPetya, pausa após troca de aba/Escape. Áudios não foram regenerados.
- Quatro verificadores originais, integridade dos 17 registros canônicos e `git diff --check`.

Capturas em `assets/screenshots/entrance/`; `preloader-actual-desktop.png` registra a abertura normal, as duas capturas `preloader-desktop/mobile` usam fontes pendentes para testar saída/deadline.

## Desempenho atual

Comparação da entrada galáctica inicial com movimento de 48s contra HEAD `4531865`, coletada nesta iteração. O ajuste posterior para 32s não foi medido novamente: os números abaixo pertencem à configuração de 48s. `tests/measure-experience.cjs`, três execuções sequenciais por viewport, Edge headless local, 2,6s de estabilização e janela de 1,5s; nenhum outro job de navegador/exportação concorrente. Evidências brutas locais ignoradas: `audit/hero-interaction-before-4531865.json` / `audit/galaxy-entrance-final.json`.

| Mediana | Entrada estática anterior | Galáxia/rede em movimento |
| --- | ---: | ---: |
| Tempo de tarefas renderer / 1,5s, desktop | 29,903 ms | 60,352 ms |
| Tempo de tarefas renderer / 1,5s, mobile emulado | 41,214 ms | 64,595 ms |
| Callbacks JS ociosos / 1,5s | 0 | 0 |
| Recursos na abertura | 7 | 8 |
| Episódios forçados ao abrir dossiê | 0 | 0 |
| Callbacks decorativos em leitura / reduzidos, 400ms | 0 / 0 | 0 / 0 |

A ambientação animada custa mais CPU do que a anterior estática: não há alegação de melhoria percentual nesta edição. As amostras finais variaram de 60,031–70,439ms desktop e 63,975–64,839ms mobile. Trace diagnóstico apontou atualização de estilos/interseções, sem layout contínuo; observers antigos de revelação por filho foram retirados, mantendo `content-visibility:auto` e imagens lazy. A arte mobile pesa 46.824 bytes; desktop 159.368 bytes. Só a variante apropriada é solicitada. Sem shader/WebGL, fundo Canvas global ou caminhos SVG animados; transformações CSS lentas, pausa manual, modal/oculto/reduzido e rede fora da hero pausam o que não serve à leitura. CSS animado ainda consome processamento: zero loops JS não significa custo zero.

Essas medidas não são Lighthouse, Core Web Vitals de campo, bateria, memória GPU ou teste em celular físico. A comparação anterior em ENTRANCE_VALIDATION é histórica e não mede esta versão. O pacote de divulgação entregue anteriormente mantém a identidade vetorial da edição anterior; seu ZIP e textos permanecem intactos.

## Publicação

Branch `codex/war-room-experience` preservada; publicação autorizada pelo proprietário. Runtime WAR ROOM `648ef976859393fb0077d3a972b555f240d6c9d8`, [Pages build 37155681649 aprovado](https://github.com/EDY075/WAR_ROOM/actions/runs/37155681649). As suites completas de entrada/experiência/documentários e os bytes/playback passaram também no endereço público: cinco viewports, 17 dossiês, 102 capítulos, foco, reload e histórico, galáxia desktop/mobile/original, runtime e ZIP anterior intacto.

Capa do portfólio sincronizada no worktree de release: runtime `66d5d15`, Worker `acb96424-b85d-4cc0-ae6f-77c64130ea13`. Lint/tipagem/build/dry-run e QA local/public desktop/mobile passaram; capa real decodificada em 1440/390/320/2560 com hashes das três variantes iguais. `--keep-vars` preservou as variáveis do Worker. Original do usuário: 276 hashes, zero diferenças. Demais cases e dependências não foram alterados. Ambas as branches codex ficam preservadas, main avançada sem force push. Revisões posteriores de docs/testes não alteram os runtimes indicados.

[WAR ROOM público](https://edy075.github.io/WAR_ROOM/) · [Case no portfólio](https://edy-gomes-portfolio.edy-scanurl-family-worker.workers.dev/work/war-room).


Ajuste solicitado após a conferência visual: travessia da galáxia reduzida de 48s ease-in-out para 32s linear, 1,5× a velocidade de percurso e início sem desaceleração de easing. Amplitude permanece igual. Verificados movimento real por amostras de transform, pausa e efeitos reduzidos desktop/mobile; quatro gates originais, integridade canônica e diff check. Sem novas alegações de CPU/GPU para esse ajuste.
