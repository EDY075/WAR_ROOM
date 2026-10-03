# Changelog

## Em revisão — narração prolongada autorizada (2026-10-03)

- Voz aprovada pelo autor nos 17 episódios completos e 102 capítulos, com tratamento de clareza/volume, roteiros, referências e VTT.
- Players por escolha em História/Mídia e biblioteca com download; áudio pausa ao mudar de contexto, mantendo leitura e efeitos reduzidos.
- Branch `codex/war-room-experience`; sem publicação ou alteração da release v1.1.0. Detalhes: [NARRATION_PRODUCTION.md](docs/NARRATION_PRODUCTION.md).

Todas as mudanças relevantes do WAR ROOM são registradas neste arquivo.

## Em revisão — Experience / NotPetya — 2026-10-03

- Dossiê integrado com abas, busca/filtros/mapa/timeline sincronizados, contexto no histórico e links de capítulos.
- Ordem editorial e cronológica explícitas, tipografia/controles maiores, navegação persistente e composição mobile.
- Loops interrompidos por preferências/visibilidade/leitura; grain estático, renderização sob demanda preservada e galeria resistente a falhas e respostas atrasadas.
- Piloto NotPetya em seis capítulos, fontes primárias, mapa com pausa, arquivo creditado e reconstituição identificada.
- Padrão documental estendido aos 17 casos: 102 capítulos com aberturas e leitura específicas, fontes, história integral e análise preservadas.
- Cartografia Natural Earth local, zoom acessível, contexto regional explícito, controle mobile e pausa fora da área de leitura; 11 novas reconstituições em WebP com créditos e prompts.
- Capa, carrossel de cinco páginas, storyboard, teaser vertical de 36 s sem áudio e versão de 42 s com narração sintética local verificada, MP3 e legendas.
- 17 dossiês e dados canônicos intactos. [Validação e limites](docs/EXPERIENCE_VALIDATION.md). Branch local `codex/war-room-experience`; sem publicação.

## [1.1.0] - 2026-08-23

### Adicionado

- Busca global por dossiê, ator, malware, região, técnica MITRE e IOC, com atalhos acessíveis.
- Drawer sincronizado, deep links e navegação anterior/próximo entre os 17 dossiês.
- Exploradores selecionáveis de MITRE ATT&CK, grupos APT e indicadores públicos.
- Visualização horizontal de correlações derivadas dos metadados documentados.
- Camada operacional na cronologia com progresso, severidade, região, ator e técnicas.
- Popover compacto para intensidade visual, áudio ambiente e trilha Forever.

### Alterado

- Evolução da biblioteca cinematográfica para um centro de Cyber Threat Intelligence.
- Prólogo reorganizado como composição narrativa e técnica.
- Mapa, timeline, filtros, cards, exploradores e drawer passaram a compartilhar o mesmo estado de seleção.
- Interface mobile recebeu trilha horizontal de hotspots e alvos táteis maiores.
- Textos operacionais, contraste, foco, ARIA e navegação por teclado foram refinados.
- Identidade temporal padronizada como **base histórica 1988–2025, edição 2026**.

### Desempenho e qualidade

- Recursos remotos não essenciais deixaram de bloquear a renderização inicial.
- Imagens de dossiês permanecem sob carregamento progressivo e o áudio externo é solicitado somente após ação do usuário.
- Lighthouse final: desktop 100/100/100/100 e mobile 96/100/100/100.
- Quatro verificadores automatizados cobrem os 17 dossiês, assets, documentação e contratos CTI.

### Segurança editorial

- A interface não declara monitoramento, feed ou telemetria ao vivo.
- Correlações não são apresentadas como causalidade ou nova atribuição.

## [1.0.3] - 2026-07-02

- Polimento final da apresentação de portfólio, README, screenshots e tour do produto.

## [1.0.2] - 2026-07-02

- Consistência visual e funcional dos 17 dossiês, assets modernos locais e memória técnica do projeto.

## [1.0.1] - 2026-07-01

- Primeira versão pública consolidada do portfólio WAR ROOM.
