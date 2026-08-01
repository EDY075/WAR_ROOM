![WAR ROOM Banner](banner-github.png)

# WAR ROOM

**Interactive Cyber Attack Timeline**

---

## 📖 Descrição

O WAR ROOM é um documentário cinematográfico interativo que conta a história dos 12 maiores ciberataques do mundo, de 1988 a 2023 — do Morris Worm ao ataque à MGM Resorts.

O projeto foi desenvolvido como trabalho acadêmico de cibersegurança e combina storytelling imersivo com uma experiência visual de alto nível: cada episódio traz cronologia, impacto econômico e social, atribuição, defesa, legislação, galeria de imagens e uma narrativa completa em modal.

Tudo em um único arquivo HTML autocontido, sem dependências de build.

---

## 🌐 Demonstração

<p align="center">
<a href="https://edy075.github.io/WAR_ROOM/">
<img src="https://img.shields.io/badge/LIVE%20DEMO-WAR%20ROOM-16a34a?style=for-the-badge&logo=githubpages&logoColor=white">
</a>
</p>

<p align="center">
<b>Clique no botão acima para abrir a versão online do projeto.</b>
</p>



---

## ✨ Funcionalidades

- 🎬 **12 episódios interativos** — linha do tempo dos maiores ciberataques (1988–2023)
- 📜 **Narrativa completa** — história detalhada de cada ataque em modal cinematográfico
- 🗓️ **Cronologia interativa** — datas-chave de cada incidente
- 📊 **Impacto detalhado** — econômico, social, atribuição, alvo, defesa e legislação
- 🖼️ **Galeria com lightbox** — visualizador de imagens com crossfade, navegação por teclado e swipe no mobile
- 🎵 **Trilha sonora** — música "Forever" via SoundCloud e áudio ambiente procedural (Web Audio API)
- 🔊 **Controle de volume** — slider de volume para a trilha
- 🔗 **Compartilhamento** — botão para compartilhar a experiência
- 💾 **Preferências salvas** — volume e configurações persistidas via localStorage
- 📱 **Totalmente responsivo** — desktop, notebook, tablet e mobile
- ♿ **Acessibilidade** — skip-link, navegação por teclado, focus trap, suporte a `prefers-reduced-motion`
- 🎥 **Efeitos visuais** — partículas, waves canvas, film grain, parallax e loading screen cinematográfico

---

## 🛠️ Tecnologias

- **HTML5** — estrutura semântica e acessível
- **CSS3** — design tokens, variáveis, grid, media queries e animações
- **JavaScript (ES5/ES6)** — lógica da aplicação
- **Canvas API** — partículas, ondas e film grain em tempo real
- **Web Audio API** — áudio ambiente procedural
- **IntersectionObserver** — animações de scroll e scroll-spy
- **SoundCloud API** — player da trilha sonora
- **Google Fonts** — Playfair Display, Source Serif 4, JetBrains Mono e Inter
- **Wikimedia Commons** — imagens históricas licenciadas

---

## 📂 Estrutura do Projeto

```
WAR_ROOM/
├── index.html              ← Aplicação principal (autocontida)
├── banner-github.png       ← Banner do repositório
├── README.md               ← Este arquivo
├── LICENSE                 ← Licença MIT
├── .gitignore              ← Arquivos ignorados pelo Git
├── assets/
│   ├── audio/              ← (estrutura)
│   ├── data/               ← (estrutura)
│   ├── images/             ← Imagens locais (ep01_morris)
│   └── video/              ← (estrutura)
├── episodes/               ← Textos-fonte dos 12 episódios (EP01–EP12)
└── archive/                ← Versões antigas e arquivos preservados
```

---

## 🚀 Como Executar

### Local (sem instalação)

1. **Windows**: dê dois cliques em `index.html`
2. **Mac/Linux**: abra o `index.html` em qualquer navegador moderno
3. **Celular/Tablet**: transfira a pasta e abra o `index.html` no Chrome/Safari

> Funciona em qualquer navegador moderno (Chrome, Firefox, Edge, Safari).
> O conteúdo principal é local — apenas imagens e fontes carregam da web.

### Deploy (Netlify / GitHub Pages)

1. Suba o repositório para o GitHub
2. No Netlify: arraste a pasta `WAR_ROOM` para o deploy (ou conecte o repositório)
3. No GitHub Pages: aponte para `main` / raiz — o `index.html` será servido automaticamente

---

## 🗺️ Roadmap

### ✅ Concluído
- 12 episódios completos (1988–2023) com dados históricos verificados
- Narrativas imersivas para todos os episódios
- Galeria de imagens com lightbox e crossfade
- Áudio ambiente procedural + trilha via SoundCloud
- Controle de volume e preferências persistentes
- Design responsivo e acessível
- Otimizações de performance (lazy loading, reduced-motion)

### 🚧 Em desenvolvimento
- Deploy da demo online (Netlify / GitHub Pages)
- Links profissionais no rodapé (GitHub / LinkedIn)

### 🔮 Futuras melhorias
- Adicionar novos episódios pós-2023
- Versão em inglês (i18n)
- Modo claro/escuro
- PWA (instalação como app)
- Auditoria Lighthouse e otimização de Core Web Vitals

---

## 📜 Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

Imagens via Wikimedia Commons (domínio público / licenciadas).
Música: "Forever (Single Version)" — The Little Dippers via SoundCloud.

---

## 👤 Autor

**Edmilson Gomes** — Estudante de Cibersegurança

[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/EDY075) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/edmilsongomes21/) [![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/edmilson_zn_/)

---

*Projeto acadêmico — TCC de Cibersegurança.*
