# NotPetya — piloto documental WAR ROOM

Material para revisão na branch `codex/war-room-experience`, 3 de outubro de 2026. Sem merge, publicação ou atualização de release.

## Acesso

- Preview local: [piloto](http://127.0.0.1:4173/WAR_ROOM/?tab=story#dossier-notpetya).
- Destino para divulgação após aprovação: [dossiê NotPetya](https://edy075.github.io/WAR_ROOM/?tab=story#dossier-notpetya). A versão pública atual ainda não contém esta evolução.
- [Materiais editáveis e downloads](../assets/media/notpetya/materials.html).
- [Capa](../assets/media/notpetya/cover.png), carrossel [1](../assets/media/notpetya/carousel-1.png), [2](../assets/media/notpetya/carousel-2.png), [3](../assets/media/notpetya/carousel-3.png), [4](../assets/media/notpetya/carousel-4.png), [5](../assets/media/notpetya/carousel-5.png).
- [Teaser narrado MP4](../assets/media/notpetya/teaser-narrated.mp4): 1080 × 1920, 24 fps, 42 segundos, voz sintética em português. [Narração MP3](../assets/media/notpetya/narration.mp3), [legendas VTT](../assets/media/notpetya/teaser-narrated.vtt) e [pedido de síntese reproduzível](../assets/media/notpetya/narration-request.json).
- [Versão sem áudio](../assets/media/notpetya/teaser-vertical.mp4): 1080 × 1920, 24 fps, 36 segundos. Texto completo incorporado nas duas versões.

## Storyboard interativo

| Capítulo | Narrativa / evidência | Visual | Interação |
| --- | --- | --- | --- |
| Abertura | 27/06/2017; ataque iniciado na Ucrânia e alcance internacional | Porto reconstituído, identificação visível | Avanço manual e referência Microsoft |
| Origem | Processo de atualização M.E.Doc iniciando infecções observadas | Documento em off-white, explicitamente resumo editorial | Voltar/avançar; fonte original |
| Propagação | Credenciais, PsExec, WMI, SMB; observações em outros 64 países | Natural Earth: contexto ucraniano de origem, sem delimitar alcance global ou alegar rotas e tempos reais | Pausar/retomar animação; estático em efeitos reduzidos, pausa fora da leitura |
| Impacto | Quase US$ 1 bi entre três vítimas citadas no DOJ, não total mundial | Fotografia de arquivo do Edith Maersk em Rotterdam, 2013 | Referência DOJ; data, autor e licença visíveis |
| Resposta | Recuperação e lições do corpus; atribuição britânica em 2018; acusação nos EUA em 2020 | Resumo editorial de documento, sem imitar evidência original | Fontes específicas; termos de atribuição preservados |
| Fontes | Evidência técnica, atribuição pública e acusação judicial são categorias diferentes | Referências abertas e créditos | Fontes completas, história original integral em disclosure nativo |

O piloto não tem avanço automático. A leitura independe de áudio e vídeo. A história original do projeto fica integralmente acessível na aba História, e a Análise preserva os campos originais. A mídia pesada só entra após escolha explícita na aba Mídia.

## Roteiro do teaser vertical — versão sem áudio de 36 segundos

| Tempo | Tela / direção de montagem | Texto / narração sugerida (não produzida) |
| --- | --- | --- |
| 0–6 s | Porto reconstituído; preto e dourado; data útil | “27 de junho de 2017. Uma atualização. Uma ruptura.” |
| 6–12 s | Documento off-white, corte suave | “Na Ucrânia, o canal de atualização do M.E.Doc abriu caminho para infecções.” |
| 12–18 s | Diagrama, sem representar rotas comprovadas | “O movimento lateral atravessou redes. A Microsoft observou infecções em outros 64 países.” |
| 18–24 s | Tipografia em preto, impacto documentado | “Saúde, logística e indústria. Quase um bilhão de dólares entre três vítimas citadas pelo DOJ.” |
| 24–30 s | Documento off-white e datas de atribuição | “Reconstruir. Investigar. Atribuir. Cada afirmação tem uma fonte.” |
| 30–36 s | Porto e chamada; endereço legível | “NotPetya no WAR ROOM. Leia os seis capítulos. Volte à evidência.” |

Essa montagem usa seis planos de 6,5 s, sobrepostos por dissoluções de 0,6 s. A versão narrada usa os mesmos planos com entradas em 0, 5,5, 10,2, 18,1, 27,3 e 32,6 s, duração final de 42 s e tempo de leitura do link ao final. Narração entra com atraso de 150 ms; não foi acelerada. Não há música externa.

## Narração produzida e verificada

VoiceStudio 0.5.6 local, motor OmniVoice já instalado, voz sintética padrão, português, seed 1729, 32 passos, instruções suportadas `male, middle-aged, low pitch`. Não foi usado um perfil pessoal de voz. O WAV gerado tem 37,45 s, mono, PCM 16-bit a 24 kHz; entrega MP3 a 128 kbit/s com normalização de loudness. Transcrição local com Faster-Whisper confirmou data, país, 64 países, quase um bilhão entre três vítimas, nome do episódio e seis capítulos. Grafias dos nomes foram normalizadas nas legendas a partir do roteiro.

A primeira tentativa pelo motor ativo MOSS não passou na conferência da fala e não foi incluída. O pedido compatível não selecionava sozinho o motor; foi necessário escolher explicitamente OmniVoice pela API nativa. Uma instrução não suportada foi corrigida antes da geração válida. A escolha anterior de motor/modelo foi restaurada e confirmada. Nenhum modelo foi baixado nem perfil existente alterado. O frontend só usa arquivos estáticos reais; não depende do VoiceStudio.

Texto falado:

> Vinte e sete de junho de dois mil e dezessete. Uma atualização. Uma ruptura. Na Ucrânia, o canal de atualização do M.E.Doc abriu caminho para infecções. O movimento lateral atravessou redes. A Microsoft observou infecções em outros sessenta e quatro países. Saúde, logística e indústria. Quase um bilhão de dólares entre três vítimas citadas pelo Departamento de Justiça dos Estados Unidos. Reconstruir. Investigar. Atribuir. Cada afirmação tem uma fonte. NotPetya, no WAR ROOM. Leia os seis capítulos. Volte à evidência.

Reprodução: exportar frames com `scripts/export-pilot-materials.cjs`; montar versão sem áudio com `scripts/assemble-pilot.ps1` e narrada com `scripts/assemble-narrated-pilot.ps1`. Uma nova síntese requer VoiceStudio local com OmniVoice instalado, seleção explícita de motor e validação de fala. Os arquivos entregues já estão prontos.

## Fontes verificadas nesta implementação

- [Microsoft Defender Security Research Team, 2017](https://www.microsoft.com/en-us/security/blog/2017/06/27/new-ransomware-old-techniques-petya-adds-worm-capabilities/): vetor e propagação observados. O artigo usa nomenclatura contemporânea Petya/ransomware; a narrativa descreve NotPetya com o contexto posterior do projeto.
- [Governo britânico / NCSC, 15/02/2018](https://www.gov.uk/government/news/foreign-office-minister-condemns-russia-for-notpetya-attacks): avaliação de responsabilidade russa e objetivo disruptivo. Atribuição governamental, não julgamento judicial.
- [DOJ, 19/10/2020](https://www.justice.gov/archives/opa/pr/six-russian-gru-officers-charged-connection-worldwide-deployment-destructive-malware-and): anúncio de acusações contra seis oficiais; quase US$ 1 bi de perdas entre três vítimas. Acusação não é apresentada como condenação.
- [Maersk Line / Commons, fotografia de 16/03/2013](https://commons.wikimedia.org/wiki/File:A_birds-eye_view_of_Edith_Maersk_in_the_Port_of_Rotterdam.jpeg): arquivo de contexto anterior ao ataque, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), sem alteração do arquivo.
- [Ficha da imagem legada Petya](https://commons.wikimedia.org/wiki/File:2017_Petya_cyberattack_screenshot.png): descreve o Petya original, captura de 2021. Link original preservado e ressalva adicionada à interface; não usada como prova do incidente no piloto.

## Produção visual

Porto criado com ferramenta integrada `image_gen`, em modo de geração, sem foto histórica usada como alvo. A imagem original permanece no armazenamento da ferramenta; o derivado WebP local tem 1440 × 960 e cerca de 104 KiB. As peças gráficas são composições HTML exportadas por Chromium. `scripts/export-pilot-materials.cjs` regenera PNGs; `scripts/assemble-pilot.ps1` monta o MP4.

Prompt usado (sem alteração):

> Use case: historical-scene. Create one wide 1536x1024 cinematic photographic reconstruction for the WAR ROOM documentary NotPetya pilot. Empty container port at dusk in 2017, long rows of containers and gantry cranes, a dark foreground operations desk with a blank inactive monitor visible through a window. Restrained near-black, aged gold practical lights, off-white mist. Investigative documentary still, quiet ominous mood, realistic film texture, strong composition with usable negative space. No people, no logos, no screen text, no writing, no hacker cliches, no red neon, no invented historical evidence. This is a clearly labeled illustrative reconstruction, not archival photography.

As peças evitam transformar estimativas globais legadas em novas afirmações sem fonte. Datas, identificador de dossiê e paginação do carrossel são úteis à investigação, não ornamentação. Não há ícones decorativos ou setas na campanha.
