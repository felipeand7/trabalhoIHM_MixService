# Mix Service

Site institucional e catálogo de soluções de segurança eletrônica desenvolvido como trabalho acadêmico de Interação Humano–Máquina.

> [!NOTE]
> Este repositório é um fork de [MiqueiasNogueira/site_cameras](https://github.com/MiqueiasNogueira/site_cameras) e representa um trabalho em grupo. Consulte o histórico dos repositórios para compreender as contribuições individuais.

## Visão geral

A aplicação apresenta produtos, acessórios e serviços de uma empresa fictícia de câmeras e monitoramento. O conteúdo é distribuído entre página inicial, catálogo, apresentação da equipe e contato.

## Funcionalidades

- Navegação entre páginas com React Router;
- banners e seções institucionais;
- carrosséis de produtos e acessórios;
- grade de catálogo;
- FAQ interativo;
- depoimentos e apresentação da equipe;
- formulário com validação no navegador;
- integração do envio de contato por FormSubmit;
- área preparada para mapa externo;
- layout responsivo.

## Tecnologias

- React 19
- React Router
- JavaScript e JSX
- CSS
- React Icons
- Vite 7

## Como executar

Requisitos: Node.js e npm.

```bash
git clone https://github.com/felipeand-dev/trabalhoIHM_MixService.git
cd trabalhoIHM_MixService
npm install
npm run dev
```

Abra o endereço exibido pelo Vite.

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Estrutura

```text
src/
├── Paginas/
├── components/
├── App.jsx
└── main.jsx
```

O diretório `docs/` contém uma versão compilada da aplicação.

## Limitações atuais

- Os itens do catálogo são dados estáticos;
- não há carrinho, checkout, autenticação ou banco de dados;
- a rota de serviços ainda não possui uma página própria;
- o mapa depende de uma API carregada externamente;
- o formulário envia dados para um serviço e endereço configurados no código, que devem ser revisados antes de reutilização.

## Contexto acadêmico

Projeto voltado à aplicação prática de navegação, feedback visual, consistência, legibilidade e organização de conteúdo em uma interface.

