# PRX · Plataforma Unificada de Propostas de Parceria

Sistema multi-tenant de alto padrão construído em **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Lenis**, **GSAP** e **Motion**, seguindo rigorosamente a especificação do **Modelo Padrão**.

Desenvolvido para hospedar todas as propostas comerciais e de parcerias estratégicas da **PRX** em um único projeto na Vercel com roteamento dinâmico por subdomínio.

---

## ⚡ Principais Características

- **Zero novos projetos na Vercel**: Todas as propostas rodam no mesmo projeto através de roteamento por subdomínio via Next.js Middleware.
- **Animação de Entrada Cinematográfica**: Introdução animada com a logo oficial da PRX em SVG, transição com `✕` e logo da marca parceira em SVG.
- **Modelo Padrão Rigoroso**:
  - Fundo branco puro (`#ffffff`) por padrão.
  - Seleção de texto na cor de destaque da marca (`::selection`).
  - Cursores `cursor-pointer` em todos os controles interativos.
  - Rolagem inercial suave Lenis sincronizada no loop RAF com GSAP ScrollTrigger.
  - Responsividade absoluta multi-dispositivo (touch targets >= 48px, zero transbordamento horizontal).
  - Assinatura comentada `// Hello World` na primeira linha de todos os arquivos.
- **Rodapé Institucional Obrigatório**: "Desenvolvido por Viral Web", com a logo da Viral Web e link direto para `https://viralweb.online`.
- **Favicon Oficial**: Ícone SVG da PRX (`icon.svg`).
- **Geração de PDF Instantânea**: Botão "Salvar em PDF" com regras `@media print` otimizadas para geração limpa de documentos comerciais.
- **Integração WhatsApp**: Botão de aprovação direta com celebração de confetes e mensagem pré-configurada.

---

## 📁 Estrutura do Projeto

```text
Propostas/
├── public/
│   └── icon.svg                      # Favicon e ícone oficial PRX
├── src/
│   ├── app/
│   │   ├── globals.css               # Estilos Tailwind v4, ::selection e print
│   │   ├── layout.tsx                # Server Component raiz com metadados e SEO
│   │   ├── not-found.tsx             # 404 para subdomínios inexistentes
│   │   ├── page.tsx                  # Central de Propostas (visão geral e listagem)
│   │   └── propostas/
│   │       └── [subdomain]/
│   │           └── page.tsx          # Página dinâmica que renderiza a proposta
│   ├── components/
│   │   ├── prx/
│   │   │   ├── PrxLogo.tsx           # Logo SVG completa e símbolo da PRX
│   │   │   └── PrxPartnerIntro.tsx   # Animação de entrada PRX ✕ Marca Parceira
│   │   ├── viralweb/
│   │   │   └── ViralWebLogo.tsx      # Logo SVG da Viral Web com link oficial
│   │   ├── Footer.tsx                # Rodapé "Desenvolvido por Viral Web"
│   │   ├── Header.tsx                # Cabeçalho com ações rápidas e WhatsApp
│   │   ├── ProposalView.tsx          # Visualizador principal da proposta
│   │   └── SmoothScrollProvider.tsx  # Lenis + GSAP ScrollTrigger RAF
│   ├── data/
│   │   └── proposals/
│   │       ├── types.ts              # Tipagem estrita de cada proposta
│   │       ├── index.ts              # Dicionário e registro mestre de subdomínios
│   │       ├── queirozsilveira.ts    # Proposta Queiroz Silveira (subdomínio: queirozsilveira)
│   │       └── boticario.ts          # Proposta Boticário (subdomínio: boticario)
│   └── middleware.ts                 # Extração de subdomínio e rewrite transparente
├── PROMPT_GUIA.md                    # Como solicitar novas propostas pelo chat
├── VERCEL_SETUP.md                   # Instruções de apontamento Wildcard na Vercel
├── package.json
└── tsconfig.json
```

---

## 🚀 Como Executar Localmente

1. Instalar as dependências:
   ```bash
   npm install
   ```

2. Iniciar o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Acessar no navegador:
   - Central de propostas: `http://localhost:3000`
   - Proposta Queiroz Silveira: `http://localhost:3000/propostas/queirozsilveira` ou `http://localhost:3000/?subdomain=queirozsilveira`
   - Proposta Boticário: `http://localhost:3000/propostas/boticario` ou `http://localhost:3000/?subdomain=boticario`

---

## 📝 Como Adicionar Novas Propostas

Consulte o arquivo [`PROMPT_GUIA.md`](./PROMPT_GUIA.md) para ver os modelos de prompts que você pode enviar para o agente.
