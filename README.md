# 🚗 AutoCar Marketplace

## Descrição
Autocar Marketplace é uma plataforma web para compra e venda de veículos. O projeto oferece funcionalidades como busca, galeria de imagens, compartilhamento e um sistema de favoritos.

## 📁 Estrutura do Projeto

```
autocar-marketplace/
├── index.html              # Página inicial
├── detalhes.html           # Página de detalhes do veículo
├── README.md               # Este arquivo
├── css/
│   ├── style.css          # Estilos da página inicial
│   └── detalhes.css       # Estilos da página de detalhes
└── js/
    ├── script.js          # Scripts da página inicial
    ├── detalhes.js        # Scripts da página de detalhes
    └── galeria.js         # Galeria de imagens
```

## 🎯 Funcionalidades

### Página Inicial
- 🔍 **Busca de Veículos**: Busca em tempo real com debounce
- ❤️ **Sistema de Favoritos**: Salva favoritos no localStorage
- 📱 **Design Responsivo**: Adaptável a todos os tamanhos de tela
- ♿ **Acessibilidade**: Suporte a navegação por teclado

### Página de Detalhes
- 🛒 **Compra**: Sistema de compra com modal de confirmação
- 📤 **Compartilhamento**: Integração com WhatsApp, Facebook, Twitter e Email
- 📸 **Galeria de Imagens**: Navegação por teclado e mouse
- 🎨 **Notificações**: Sistema de notificações visual

## 🚀 Como Usar

### Em Seu Computador

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/lorenzofb09/autocar-marketplace.git
   cd autocar-marketplace
   ```

2. **Abra a página inicial**:
   - Abra `index.html` em seu navegador
   - Ou use um servidor local (recomendado)

### Usando um Servidor Local (Recomendado)

**Com Python 3:**
```bash
python -m http.server 8000
```

**Com Node.js (http-server):**
```bash
npx http-server
```

Depois acesse: `http://localhost:8000` (ou a porta indicada)

## 💻 Tecnologias Utilizadas

- **HTML5**: Marcação semântica
- **CSS3**: Grid, Flexbox, Animações
- **JavaScript (ES6+)**: Vanilla JS sem dependências
- **LocalStorage**: Persistência de dados

## 🎨 Temas

### Página Inicial
- Cores: Azul (#007bff), Cinza, Verde
- Tema claro com suporte a tema escuro

### Página de Detalhes
- Cores: Azul escuro (#1e40af), Vermelho, Verde
- Design moderno e limpo

## 📱 Responsividade

- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## ♿ Acessibilidade

- ✅ Navegação por teclado
- ✅ Labels em inputs
- ✅ Suporte a leitores de tela
- ✅ Contraste adequado
- ✅ Suporte a preferências de movimento reduzido

## 🔧 Desenvolvimento

### Scripts Principais

**script.js**: Gerencia a página inicial
- Busca em tempo real
- Sistema de favoritos
- Gerenciamento de notificações

**detalhes.js**: Gerencia a página de detalhes
- Compra de veículos
- Compartilhamento em redes sociais
- Modais e notificações

**galeria.js**: Gerencia a galeria de imagens
- Navegação por clique e teclado
- Thumbnails
- Contador de imagens

## 📝 Notas Futuras

- [ ] Integração com API backend
- [ ] Autenticação de usuários
- [ ] Procesamento real de pagamentos
- [ ] Sistema de comentários
- [ ] Mais opções de filtro
- [ ] Upload de imagens

## 👤 Autor

**Lorenzo FB**
- GitHub: [@lorenzofb09](https://github.com/lorenzofb09)

## 📄 Licença

Este projeto está sob licença MIT. Veja LICENSE para detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Para grandes mudanças, abra uma issue primeiro para discutir.

---

**Desenvolvido com ❤️ para facilitar a compra e venda de veículos**