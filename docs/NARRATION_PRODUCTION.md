# Narração prolongada dos 17 casos — 3 de outubro de 2026

Entrega para revisão na branch `codex/war-room-experience`, após aprovação explícita do usuário da amostra produzida com sua própria voz. Sem merge, push ou publicação. Esta etapa acrescenta áudio aos documentários existentes; não altera EPISODES, STORIES ou INTEL_INDEX.

## Arquivos entregues

- 17 episódios completos e 102 capítulos em MP3, mono, 24 kHz, 128 kbit/s.
- 42 minutos e 13,53 segundos de narração completa somada; episódios de 2:17 a 2:57. NotPetya: 177,52 segundos.
- Seis capítulos por caso: Abertura, Origem, Propagação, Impacto, Resposta e Fontes.
- Roteiro com referências e texto temporizado VTT para cada episódio. Os tempos seguem os blocos efetivamente gerados, não alinhamento palavra a palavra.
- Biblioteca: `assets/media/narrations/index.html`; inventário e durações: `catalog.json`; roteiros documentais: `scripts.json`.
- Capturas da biblioteca e do player integrado: `assets/screenshots/narration/`.

Os MP3s completos e por capítulo somam 80.415.220 bytes. Essa duplicação permite baixar um episódio inteiro ou ouvir apenas um capítulo. Não representa transferência inicial: os controles consultam o catálogo apenas ao abrir História/Mídia, e nenhum MP3 é solicitado antes de escolher ouvir.

## Produção e tratamento

Usado o OmniVoice já instalado no ambiente VoiceStudio, com a referência e transcrição correspondentes à amostra aprovada. Processamento local, sem novo download, provedor externo ou alteração de perfil/preferências pessoais. A gravação original, referência, WAVs brutos e transcrições de auditoria continuam fora do Git em armazenamento local/`audit/` ignorado. Somente os áudios finais autorizados e seus textos entram na branch de revisão.

Para trabalhar com pouca VRAM disponível, o transformer usa CUDA FP16/SDPA e o codec permanece em CPU FP32. Dezesseis passos, velocidade nativa, seed determinística por bloco; nenhuma instrução de gênero ou mudança de pitch substitui a referência. A configuração híbrida foi medida antes da produção; a alternativa experimental de quantização CPU não foi usada nos arquivos finais. O worker termina e libera os recursos após gerar os arquivos.

O exportador lê título, prosa e referência dos seis capítulos reais de cada caso. A divisão limita os blocos e verifica a preservação de todas as palavras. Datas/siglas/nomes recebem expansões ou grafia de apoio apenas na fala; o roteiro escrito conserva o texto canônico. Estimativas, recortes de impacto e atribuições continuam qualificados.

Tratamento FFmpeg: corte abaixo de 70 Hz, redução de 2,5 dB em 250 Hz, presença de +2,5 dB em 3,2 kHz, agudos de +1,5 dB em 6 kHz e compressão leve 2:1. Normalização em duas passagens, alvo −16 LUFS/−1,5 dBTP. Medição adicional **do MP3 final decodificado**, separada das estimativas de masterização: 119 arquivos entre **−16,78 e −16,21 LUFS**, pico máximo **−1,88 dBTP**. Esses números indicam volume consistente e ausência de clipping nas medições; não são uma avaliação subjetiva de timbre ou de identidade vocal.

## Integração

`assets/js/narration.js` controla a narração sem serviço TTS no site. História oferece o capítulo selecionado e acesso ao episódio completo; Mídia oferece o episódio, download e biblioteca dos 17 casos. Os players nativos permitem pausa, volume, busca no áudio e velocidade quando suportada pelo navegador. O avanço de capítulo permanece manual.

Mudar capítulo, aba, caso ou fechar pausa o áudio e esvazia a fonte/decoder anterior. A visibilidade do documento pausa reprodução. Tokens de versão invalidam callbacks antigos do catálogo/player. Reprodução de outro áudio/vídeo pausa a anterior. Efeitos reduzidos não impedem ouvir por escolha. Falhas de catálogo têm nova tentativa; falhas de áudio mantêm download e leitura acessíveis. Nenhum loop de animação, timer ou listener de scroll foi acrescentado pela narração.

Os dois MP4s curtos anteriores de NotPetya permanecem como peças de divulgação: silencioso e narrado com voz sintética padrão. **Esta etapa entrega narração prolongada com a voz autorizada; não entrega novos vídeos prolongados dos 17 casos.** A voz desses vídeos curtos anteriores não foi substituída.

## Verificação e limites

`tests/verify-narrations.cjs` verifica metadados FFprobe e decodificação no browser dos 119 MP3s, reprodução real, carregamento sob demanda, troca/pausa/liberação, teclado, efeitos reduzidos, desktop/mobile, biblioteca e erros de rede com recuperação. O teste do evento de documento oculto simula `document.hidden`, porque abas headless permanecem visíveis; confirma a pausa do áudio real pelo handler, não a troca de aba em dispositivo físico. Os testes gerais de experiência e documentários continuam cobrindo seleção, busca, filtros, histórico, links, foco/Escape, galeria e os 102 capítulos. Os quatro verificadores originais, fingerprints e `git diff --check` permanecem gates.

Conferência de conteúdo concluída: Parakeet TDT v3/Sherpa-ONNX já instalado transcreveu os 102 capítulos isolados, com hashes dos arquivos finais e comparação com os roteiros. Nenhuma divergência de ano reconhecido ou contagem de negações ficou pendente. As duas sinalizações de similaridade restantes decorrem das expansões documentadas de WMI/SMB e TI/OT; o identificador CVE do Log4j recebeu nova geração com dígitos explícitos e foi reconhecido como 2021/44228. Uma primeira passagem Whisper por episódios completos produziu repetições/timestamps espúrios; a revisão isolada em seis trechos com outro modo de decodificação e a passagem independente por todos os capítulos resolveram esses alertas. A passagem completa antiga de Whisper não é apresentada como validação de todos os 17 episódios. Transcrição automática pode errar nomes estrangeiros ou repetir texto em pausas; trechos sinalizados receberam uma segunda leitura automática isolada. Essa conferência não certifica identidade vocal nem substitui uma revisão humana integral dos 42 minutos. A semelhança da amostra foi aprovada pelo próprio usuário; a narração prolongada permanece claramente identificada como síntese autorizada. A gravação de telefone limita a informação sonora disponível; a equalização melhora clareza, sem prometer reconstruir detalhes que não estavam na referência.

Ferramentas reproduzíveis: `scripts/export-narration-scripts.cjs`, `scripts/produce-narrations.py`, `scripts/measure-narration-audio.py`, `scripts/validate-narration-parakeet.py`, `scripts/validate-narration-content.py` e `scripts/review-narration-flags.py`. A produção exige os runtimes/modelos já instalados e uma referência autorizada; reprodução no GitHub Pages exige somente os arquivos estáticos. Os caminhos desses modelos/referência são parâmetros locais, sem exposição em assets públicos. Geração `--only` preserva os outros casos do catálogo; cache inclui texto, referência, seed e modelo.

Preview temporário: [biblioteca](http://127.0.0.1:4173/WAR_ROOM/assets/media/narrations/) e [NotPetya completo](http://127.0.0.1:4173/WAR_ROOM/?tab=media#dossier-notpetya). Validação de desempenho atual e resultados finais: [EXPERIENCE_VALIDATION.md](EXPERIENCE_VALIDATION.md).
