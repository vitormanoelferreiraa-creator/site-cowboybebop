# 🚀 BEBOP NET — Bounty Board

> **"See You Space Cowboy..."**
> Um painel web inspirado no universo de *Cowboy Bebop*, combinando estética cyberpunk, interfaces futuristas e funcionalidades interativas em uma central de operações espaciais.

## 📡 Sobre o projeto

O **BEBOP NET — Bounty Board** é um projeto de desenvolvimento web inspirado no universo de *Cowboy Bebop*. A proposta é criar uma interface que simula uma central de operações de caçadores de recompensas, com referências a sistemas de comunicação espacial, terminais de diagnóstico e transmissões de vídeo.

O projeto combina desenvolvimento front-end, design responsivo, animações e integrações com serviços externos para construir uma experiência visual imersiva.

Mais do que uma página estática, a proposta é explorar como HTML, CSS e JavaScript podem trabalhar juntos para criar uma interface temática com múltiplas seções e elementos interativos.

## ✨ Funcionalidades

### 🎯 Transmission Feed

- Área central dedicada à transmissão de vídeo.
- Incorporação de vídeo do YouTube.
- Interface temática inspirada em transmissões espaciais.
- Layout responsivo para diferentes tamanhos de tela.

### 🛰️ My Station & Links

- Integração com player incorporado do Spotify.
- Campo para inserir links de playlists ou faixas.
- Configuração de links pessoais e profissionais.
- Atalhos para GitHub, LinkedIn, portfólio e Instagram.
- Atualização dos links da interface por JavaScript.

### 👥 Crew Log

- Seção dedicada à tripulação.
- Cards com personagens, funções e mensagens.
- Organização visual inspirada em registros operacionais.

### 📊 System Telemetry

- Painel de diagnóstico fictício.
- Indicadores visuais de estabilidade e desempenho.
- Barras de progresso para representar dados do sistema.

### 💻 ISSP Live Terminal

- Terminal visual com registros de eventos.
- Mensagens que simulam a comunicação de uma rede espacial.
- Área de exibição com rolagem independente.

### 📡 Interface e experiência visual

- Tema escuro com detalhes em âmbar, ciano e laranja.
- Efeitos visuais inspirados em monitores CRT.
- Animações e indicadores de atividade.
- Relógio de sistema temático.
- Controles de áudio e efeitos sonoros.
- Navegação entre diferentes seções da aplicação.

## 🛠️ Tecnologias utilizadas

| Tecnologia    | Aplicação                                    |
| ------------- | -------------------------------------------- |
| HTML5         | Estrutura da interface                       |
| CSS3          | Estilização e personalizações visuais        |
| JavaScript    | Interatividade e manipulação da interface    |
| Tailwind CSS  | Layout, cores, espaçamentos e responsividade |
| Font Awesome  | Ícones                                       |
| Google Fonts  | Tipografia temática                          |
| YouTube Embed | Incorporação de vídeo                        |
| Spotify Embed | Reprodução de conteúdo musical               |

## 📂 Estrutura do projeto

A organização dos arquivos segue a seguinte estrutura:

```text
BEBOP-NET/
│
├── index.html
│
├── css/
│   └── styleboy.css
│
├── responsivo/
│   └── responsivo.css
│
├── cowboy/
│   └── cowboy.js
│
└── img/
    └── spaik.jpeg
```
visite o site:https://vitormanoelferreiraa-creator.github.io/site-cowboybebop/

**Responsabilidade de cada arquivo:**

- `index.html`: estrutura principal, componentes e organização das seções.
- `css/styleboy.css`: estilos personalizados e efeitos visuais.
- `responsivo/responsivo.css`: ajustes para dispositivos móveis e diferentes resoluções.
- `cowboy/cowboy.js`: lógica de navegação, áudio, terminal e funcionalidades interativas.
- `img/spaik.jpeg`: imagem utilizada no perfil de Spike Spiegel.

## ⚙️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

### 2. Entre na pasta do projeto

```bash
cd BEBOP-NET
```

### 3. Abra a aplicação

Abra o arquivo `index.html` no navegador.

Para uma experiência de desenvolvimento mais prática, você também pode utilizar a extensão **Live Server** no Visual Studio Code.

> **Importante:** mantenha a estrutura de pastas original para que os arquivos CSS, JavaScript e as imagens locais sejam carregados corretamente.

## 📱 Responsividade

A interface utiliza classes responsivas do Tailwind CSS e uma folha de estilos dedicada para adaptar o conteúdo a diferentes resoluções.

O layout contempla:

- Navegação horizontal em telas menores.
- Reorganização das colunas em dispositivos móveis.
- Ajustes de espaçamento e tipografia.
- Incorporação de vídeo com comportamento responsivo.
- Organização dos painéis para evitar rolagem horizontal indesejada.

## 🎨 Identidade visual

A identidade visual foi inspirada na estética de ficção científica de *Cowboy Bebop*, com elementos de interfaces tecnológicas e terminais de operações.

**Paleta principal:**

- `#0a0d14` — fundo principal.
- `#121722` — painéis e cartões.
- `#f59e0b` — âmbar para destaques.
- `#06b6d4` — ciano para indicadores.
- `#ea580c` — laranja para alertas e etiquetas.
- `#dc2626` — vermelho para elementos de risco.

A tipografia utiliza Chakra Petch, Share Tech Mono e VT323 para reforçar a aparência futurista.

## 🧠 Objetivos de desenvolvimento

Este projeto faz parte da exploração prática de desenvolvimento web, com foco em:

- Construção de interfaces com HTML, CSS e JavaScript.
- Organização de componentes e arquivos.
- Desenvolvimento de layouts responsivos.
- Integração de conteúdo externo por meio de iframes.
- Manipulação do DOM e criação de interações.
- Aplicação de identidade visual consistente.
- Experimentação com animações e efeitos de interface.

## 🔮 Possíveis melhorias futuras

- [ ] Persistência das configurações de links com `localStorage`.
- [ ] Sistema de notificações interativas.
- [ ] Dados dinâmicos no terminal e na telemetria.
- [ ] Personalização do perfil do caçador de recompensas.
- [ ] Melhorias de acessibilidade e navegação por teclado.
- [ ] Otimização de carregamento e tratamento de erros.
- [ ] Refinamento da experiência em dispositivos móveis.

## 🚀 Executar localmente

O projeto é desenvolvido com tecnologias front-end e não exige um servidor de aplicação próprio para sua versão estática. Entretanto, recursos externos dependem de conexão com a internet, e determinadas funcionalidades podem exigir execução por um servidor local.

## ⚠️ Créditos e direitos

Este é um projeto independente, desenvolvido para fins de estudo e experimentação em desenvolvimento web.

*Cowboy Bebop* e seus personagens pertencem aos respectivos detentores de direitos. Este projeto não é oficial e não possui vínculo com os criadores ou distribuidores da obra.

## 👨‍💻 Desenvolvedor

Desenvolvido por **Vitor Manoel Ferreira**.

- **GitHub:** [@vitormanoelferreiraa-creator](https://github.com/vitormanoelferreiraa-creator)
- **Instagram:** [@uuvitu\_\_](https://www.instagram.com/uuvitu__/)

---

> *"Whatever happens, happens."*

**BEBOP NET // END OF TRANSMISSION**
