# Divulgação atualizada · edição galáctica · 2026-10-03

## Entrega

Solicitação: atualizar o ZIP com cinco stories, um carrossel de cinco páginas, peças para LinkedIn e respectivas legendas em alta definição. Alterações restritas aos materiais de divulgação, seus exportadores/testes e documentos de continuidade. Runtime, corpus, narrações e portfólio não foram alterados.

- Instagram: cinco páginas 1080 × 1350 (4:5), publicadas em um único carrossel; cinco stories 1080 × 1920 (9:16).
- LinkedIn: horizontal 1200 × 627 e alternativa vertical 1080 × 1350. O carrossel também pode acompanhar a legenda como múltiplas imagens.
- Doze mestres renderizados em escala 2×: 2160 × 2700, 2160 × 3840 e 2400 × 1254. PNG sem perdas, sRGB. As fontes não são capturas de miniaturas; a composição HTML é renderizada em DPR2 e o arquivo de upload é reduzido a partir do mestre.
- Capturas atuais da hero, rede interativa com explicação de Técnicas, mapa real, abertura NotPetya, player opcional e preloader. Capturadas do runtime `1db8095` em 1440 × 900, DPR2. A hero é pausada para congelar a ambientação durante a captura.
- Galáxia ilustrativa gerada com IA identificada no rodapé; imagem contextual de NotPetya mantém crédito dentro da captura. Cartografia Natural Earth de domínio público. Nenhum fato, referência ou atribuição foi modificado.
- `texts/INSTAGRAM.txt`, `LINKEDIN.txt`, `STORIES.txt` para copiar; `POSTAGENS.md` reúne instruções, ordem, textos alternativos, links e créditos.
- Previews locais/estáticos, composição HTML e 40 arquivos públicos revisados no ZIP. Nenhuma gravação pessoal original, WAV bruto, credencial ou arquivo de auditoria local incluído.

## Validação atual

1. Exportação das doze peças: todas as imagens decodificam, nenhum erro JavaScript ou overflow; conteúdo e créditos de story terminam até y=1620, com margem superior mínima y=220. Composição final usa y=230–1600 e reserva y=1640–1760 para sticker de link.
2. `tests/verify-launch-materials.cjs`: 12 nativas e 12 mestres, dimensões exatas, PNG/sRGB, tamanho e SHA-256; cinco links/textos de sticker; legenda Instagram 906 caracteres / hook 80; LinkedIn 1655 caracteres.
3. `scripts/package-launch-materials.py`: lista explícita de 40 arquivos, teste CRC, comparação dos bytes de cada entrada e hashes das 24 imagens.
4. Folha de contato e peças revisadas visualmente: corrigida a grade da página final do carrossel para que os seis capítulos sejam seguidos por conteúdo de largura inteira; peça horizontal ajustada para preservar rodapé e imagem.
5. Quatro verificadores originais (`verify-cti-evolution.mjs`, `verify-ai-memory.mjs`, `verify-portfolio-readme.mjs`, `verify-final-consistency.mjs`) e fingerprint canônico (`verify-experience-data.mjs`) aprovados. `git diff --check` obrigatório antes do commit.
6. `tests/verify-release-files.cjs` local: bytes das 24 imagens e ZIP, fontes da entrada, textos e manifesto, preview desktop 1440px/mobile emulado 390px sem overflow, link de download, áudio real do capítulo/episódio por escolha explícita e Escape. Tab real verifica foco do primeiro link de download. Preview adicional em 1440/390/320px decodifica as doze imagens sem overflow; capturas locais em `audit/launch-preview-*.png`.

A mudança não modifica o runtime nem apresenta nova medição de desempenho. As medições anteriores pertencem às versões e datas registradas em GALAXY_ENTRANCE_VALIDATION.md. As imagens sociais são estáticas; não animam nem possuem links clicáveis. Use stickers nos stories e URLs nas legendas. As plataformas podem recomprimir os PNGs.

## Integridade e publicação

- ZIP: `61,963,848` bytes (61.96 MB).
- SHA-256: `797a2a272c24c6f52b8f9542271ceb28440d00a1aea3b3362a19cd9fa07cf3e5`.
- Download estável: https://edy075.github.io/WAR_ROOM/assets/media/war-room-launch-2026/war-room-postaveis-hd.zip
- Preview: https://edy075.github.io/WAR_ROOM/assets/media/war-room-launch-2026/
- Publicação em Pages: registrar commit/build e confirmação dos bytes públicos após concluir o deploy. Sem postagem automática no Instagram ou LinkedIn.
