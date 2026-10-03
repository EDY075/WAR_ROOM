# Créditos visuais

## Tratamento documental dos 17 casos — outubro de 2026

Os 11 arquivos em `documentaries/` foram gerados pela ferramenta integrada `image_gen`, convertidos para WebP local de 1200 pixels de largura, entre aproximadamente 40 e 90 KiB. Cada cena é uma reconstituição ilustrativa, sem alegação de representar uma instalação, pessoa, vítima ou momento real do incidente. Essa indicação aparece nas aberturas, nos capítulos e na aba Mídia. Prompts completos e processo: [DOCUMENTARY_VISUALS.md](../../docs/DOCUMENTARY_VISUALS.md).

| Caso | Reconstituição local |
| --- | --- |
| Morris Worm | `documentaries/unix-1988.webp` · laboratório universitário |
| Melissa | `documentaries/email-1999.webp` · estação de escritório |
| ILOVEYOU | `documentaries/manila-2000.webp` · internet café |
| Estônia | `documentaries/tallinn-2007.webp` · contexto urbano |
| Stuxnet | `documentaries/industrial-controls.webp` · controle industrial |
| Sony Pictures | `documentaries/hollywood-2014.webp` · escritório de produção |
| WannaCry | `documentaries/hospital-2017.webp` · administração hospitalar |
| SolarWinds | `documentaries/software-supply.webp` · cadeia de software |
| Colonial Pipeline | `documentaries/pipeline-context.webp` · infraestrutura |
| Log4j | `documentaries/logging-context.webp` · dependências de software |
| MGM Resorts | `documentaries/hospitality-context.webp` · hotelaria |

NotPetya conserva a reconstituição e o arquivo creditados abaixo. As cinco aberturas modernas usam os arquivos locais já creditados na tabela, com ressalva explícita de contexto. As galerias legadas continuam disponíveis com seus créditos; novas reconstituições não substituem registros históricos no corpus.

`maps/world-110m.svg`: cartografia derivada dos dados [Natural Earth 1:110m](https://github.com/nvkelso/natural-earth-vector/tree/master/geojson), [domínio público](https://www.naturalearthdata.com/about/terms-of-use/). Natural Earth: Tom Patterson, Nathaniel Vaughn Kelso e colaboradores. Projeção equiretangular; geração offline reproduzível em `scripts/build-cartography.cjs`. Não representa telemetria ou rotas de ataque. Âncoras de contexto e deslocamentos dos controles são identificados. Fonte, hash e método no documento de produção visual.

## Piloto NotPetya — outubro de 2026, ainda em revisão

- `notpetya/port-reconstruction.webp`: reconstituição ilustrativa gerada pela ferramenta integrada `image_gen` para WAR ROOM. Derivado WebP 1440 × 960, com cerca de 104 KiB. Não é fotografia de arquivo nem prova do incidente. Identificação visível no piloto e nas peças. Prompt e produção em [storyboard](../../docs/NOTPETYA_STORYBOARD.md).
- `notpetya/edith-maersk-2013.jpeg`: Maersk Line, fotografia de 16/03/2013, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:A_birds-eye_view_of_Edith_Maersk_in_the_Port_of_Rotterdam.jpeg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/). Arquivo original sem edição; exibição redimensionada por CSS. Contexto portuário anterior ao ataque de 2017; não representa registro de sua interrupção. O MP4 e o carrossel não usam essa fotografia.
- A [imagem legada da família Petya](https://commons.wikimedia.org/wiki/File:2017_Petya_cyberattack_screenshot.png) permanece referenciada. A ficha do Commons descreve Petya original e captura de 2021, autor desconhecido, domínio público. A interface acrescenta a ressalva; o piloto não apresenta a imagem como evidência de NotPetya em 2017.
- Cartografia de contexto: Natural Earth, domínio público, sem alegação de trajetórias reais. Documentos off-white: resumos editoriais com referência, não fac-símiles.
- Capa, carrossel e teasers: composições editoriais WAR ROOM com imagem reconstituída identificada e fontes primárias. Versão sem áudio de 36 s e versão narrada de 42 s; voz sintética local VoiceStudio / OmniVoice, sem perfil pessoal ou música externa. MP3 real e legendas VTT incluídos. Arquivos e fontes editáveis em `assets/media/notpetya/`; produção e roteiro em [NOTPETYA_STORYBOARD.md](../../docs/NOTPETYA_STORYBOARD.md).

As imagens locais dos dossiês modernos preservam os créditos que já eram exibidos no WAR ROOM. Elas são utilizadas como contexto editorial; não representam eventos não documentados.

| Dossiê | Arquivo local | Crédito e licença | Origem |
| --- | --- | --- | --- |
| Rússia × Ucrânia | `ep13-russia-ukraine/preview.jpg` | National Police of Ukraine / Sneeuwschaap, CC BY 4.0 | [Wikimedia Commons — infraestrutura energética](https://commons.wikimedia.org/wiki/File:Fire_at_an_energy_infrastructure_facility_after_Russian_shelling,_2022-09-11_(02).jpg) |
| Rússia × Ucrânia | `ep13-russia-ukraine/region-map.png` | HighVoltage 5576, CC0 | [Wikimedia Commons — rede elétrica](https://commons.wikimedia.org/wiki/File:Electrical_Power_Grid_-_Ukraine.png) |
| Volt Typhoon | `ep14-volt-typhoon/preview.jpg` | Leon Brooks, domínio público | [Wikimedia Commons — antenas](https://commons.wikimedia.org/wiki/File:Mobile_telephone_antennas_tower.jpg) |
| Volt Typhoon | `ep14-volt-typhoon/region-map.png` | Vardion, domínio público | [Wikimedia Commons — Guam](https://commons.wikimedia.org/wiki/File:LocationGuam.png) |
| Salt Typhoon | `ep15-salt-typhoon/preview.jpg` | Nikolai Twin, CC0 | [Wikimedia Commons — torre celular](https://commons.wikimedia.org/wiki/File:CellTower.jpg) |
| Salt Typhoon | `ep15-salt-typhoon/region-map.png` | Chen-Pan Liao, CC0 | [Wikimedia Commons — China](https://commons.wikimedia.org/wiki/File:China_map.svg) |
| Lazarus Group | `ep16-lazarus-group/preview.jpg` | Marko Ahtisaari, CC BY 2.0 | [Wikimedia Commons — mineração de Bitcoin](https://commons.wikimedia.org/wiki/File:Bitcoin_mining_farm.jpg) |
| Lazarus Group | `ep16-lazarus-group/region-map.png` | CIA World Factbook, domínio público | [Wikimedia Commons — Coreia do Norte](https://commons.wikimedia.org/wiki/File:North_Korea_map.png) |
| Israel × Irã | `ep17-israel-iran/preview.jpg` | sirdle / TheImaCow, CC BY-SA 2.0 | [Wikimedia Commons — painel PLC](https://commons.wikimedia.org/wiki/File:PLC_Control_Panel.jpg) |
| Israel × Irã | `ep17-israel-iran/region-map.png` | Torsten, CC BY-SA 3.0 | [Wikimedia Commons — Israel e Irã](https://commons.wikimedia.org/wiki/File:Iran_and_Israel_(including_West_Bank_and_Gaza).png) |

O arquivo legado `ep15-salt-typhoon/region-map.svg` foi preservado por segurança, mas contém bytes PNG. O runtime usa a cópia `region-map.png`, com extensão e MIME coerentes.

Os links externos abrem em nova aba e os arquivos locais mantêm a experiência do GitHub Pages independente de hotlinks no render principal.
