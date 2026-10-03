# WAR ROOM · pacote de divulgação HD

Projeto: https://edy075.github.io/WAR_ROOM/

## Arquivos prontos

- Instagram feed: cinco PNGs em 1080 × 1350 (4:5), na ordem feed-1 a feed-5.
- Instagram stories: dois PNGs em 1080 × 1920 (9:16), com margem para a interface e o sticker de link.
- LinkedIn: PNG em 1200 × 627 (aproximadamente 1,91:1), adequado também para acompanhar o link do projeto.
- `masters/`: as mesmas oito composições em resolução dupla — 2160 × 2700, 2160 × 3840 e 2400 × 1254. PNG sem perdas, sRGB.
- `texts/POSTAGENS.md`: legendas, textos de story, postagem de LinkedIn, links e textos alternativos.
- `source/poster.html` e `source/art/`: composição editável com arte vetorial local e captura real do mapa. Não utiliza imagens remotas nem fontes baixadas.
- `manifest.json`: dimensões, tamanhos e SHA-256 de todas as imagens exportadas.

Use os PNGs de `instagram/` e `linkedin/` para upload; guarde os mestres para adaptações. A plataforma pode recomprimir as imagens: não há garantia de ausência de perda após a publicação. Não use screenshots de previews para postar.

## Links nas imagens

Todas as peças apresentam o endereço do WAR ROOM. Um PNG não contém link clicável. Copie o URL dos textos para o LinkedIn e use o sticker de link nos stories; no feed do Instagram, adicione o projeto à bio se quiser indicar “link na bio”. O HTML editável contém links clicáveis.

## Identidade e créditos

Direção editorial: Edmilson Gomes / WAR ROOM. Rede de pontos e órbitas: arte vetorial editorial esquemática, sem dados de causalidade. Barras de áudio: ilustração editorial, não forma de onda de uma gravação. Mapa: captura real da interface WAR ROOM, cartografia Natural Earth de domínio público; os créditos completos permanecem no site. O material não modifica fatos ou atribuições dos dossiês.

A narração descrita no material é síntese autorizada baseada na voz do autor. A referência pessoal e os WAVs brutos não integram este pacote.

## Referências de formato consultadas em 03/10/2026

- [Instagram: resolução de fotos](https://help.instagram.com/1631821640426723) — largura de upload de até 1080 px; a proporção 4:5 está dentro da faixa aceita.
- [Meta: Stories](https://www.facebook.com/business/help/2222978001316177) — composição vertical 9:16 / 1080 × 1920; reservar área para interface. A página trata de anúncios; as margens são usadas aqui como proteção editorial, sem afirmar que sejam uma exigência de story orgânico.
- [LinkedIn: imagem de publicação com URL](https://www.linkedin.com/help/linkedin/answer/a563309) — recomendação de 1200 × 627. Não é o único formato permitido para imagens orgânicas.

## Regenerar

Sirva a pasta que contém WAR_ROOM na porta 4173. Com Playwright, Edge e Sharp disponíveis em NODE_PATH, rode `node scripts/export-launch-materials.cjs` na raiz do projeto. O exportador rejeita falhas de imagem, erros de JavaScript e overflow da composição. O ZIP é criado após a revisão visual e exclui a si próprio.

Nenhuma postagem social foi realizada automaticamente.
