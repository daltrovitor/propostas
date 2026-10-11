# Guia Oficial de Prompts para Novas Propostas

Este repositório (`Propostas`) foi configurado como uma **aplicação multi-tenant unificada em Next.js**. Você **nunca mais precisará criar um novo repositório nem um novo projeto na Vercel** para cada proposta comercial.

Basta manter este único projeto vinculado à Vercel com um domínio Wildcard (ex: `*.prx.app.br` ou `*.seudominio.com`). Cada nova proposta adicionada aqui fica imediatamente disponível no seu respectivo subdomínio, e todas as propostas anteriores continuam funcionando perfeitamente!

---

## 🎯 Como deve ser o prompt que você me envia

Sempre que você quiser criar uma proposta nova, copie e adapte o modelo de prompt abaixo:

```text
Faça uma proposta de parceria com a PRX no subdomínio [subdominio-aqui] para a marca [Nome da Empresa].

Texto e escopo da proposta:
[Cole aqui o texto, condições, escopo, valores e o que você quer na proposta]

Logo da marca:
[Cole aqui o código SVG da logo, ou o link da imagem, ou me peça para desenhar/procurar a logo em SVG]

Lembre-se de utilizar o Modelo Padrão, a animação de entrada com a logo em SVG da PRX ✕ [Nome da Empresa], o footer 'Desenvolvido por ViraWeb' com a logo horizontal e o favicon da PRX.
```

---

## 💡 Exemplos Práticos de Prompt

### Exemplo 1: Proposta Comercial Direta
```text
Faça uma proposta de parceria com a PRX no subdomínio "natura" para a marca "Natura".

Texto e escopo da proposta:
Parceria para inclusão de produtos Natura no catálogo PRX Pass com cashback em PRX Coins para a base de jovens de 16 a 24 anos. 
Pilares:
1. Cashback em compras online e lojas físicas
2. Lançamento exclusivo de fragrâncias nos eventos PRX Live
3. Campanhas conjuntas no aplicativo
Valores: Plano Inicial R$ 5.000/mês e Plano Enterprise R$ 12.000/mês.

Logo da Natura:
(Pode deduzir a cor da marca como Laranja/Âmbar e usar a logo em SVG da Natura)
```

### Exemplo 2: Proposta com Texto Completo
```text
Crie uma nova proposta no subdomínio "hospital-albert" para o Hospital Israelita Albert Einstein. 
O texto da proposta é o seguinte:
[cole todo o texto que você tiver]
Coloque a animação de entrada PRX ✕ Albert Einstein e aplique o modelo padrão com a cor Verde/Sálvia Cirúrgico.
```

---

## ⚙️ O que o Agente faz automaticamente quando você manda esse prompt?

1. **Cria os dados da proposta** em `src/data/proposals/[subdominio].ts`.
2. **Registra o novo subdomínio** em `src/data/proposals/index.ts`.
3. **Deduz ou aplica a cor de destaque principal** conforme a natureza do cliente (ex: Dourado para luxo, Azul para tech, Terracota para engenharia, etc.).
4. **Gera a animação de entrada** (palco escuro gs.prx, montagem do símbolo PRX, conector ✕ em estilhaços e saída em cortina). Para logos escuras, gera também uma versão branca em `clientBrand.logoPngOnDark`.
5. **Aplica o Modelo Padrão**:
   - Fundo branco puro (`#ffffff`)
   - Seleção de texto na cor de destaque da marca (`::selection`)
   - Todos os botões e links com `cursor-pointer` e touch target >= 48px
   - Rolagem inercial suave Lenis sincronizada com GSAP ScrollTrigger
   - Sem balões sem sentido, sem gradientes exagerados, sem pretextos antes do título principal
   - Assinatura comentada `// Hello World` na primeira linha
   - Botão para Aprovação direta via WhatsApp e botão para Salvar Proposta em PDF (`window.print()`)
   - Rodapé com "Desenvolvido por ViraWeb", logo horizontal e link para `https://viraweb.dev.br`
   - Favicon oficial da PRX
6. **Executa o `git add`, `git commit` e `git push`** para a Vercel publicar automaticamente.

---

## 🌐 Como funciona o roteamento por Subdomínio?

- **Em Produção na Vercel**:
  - `https://queirozsilveira.seudominio.com` ➔ Carrega a proposta da Queiroz Silveira.
  - `https://boticario.seudominio.com` ➔ Carrega a proposta do Grupo Boticário.
  - `https://[subdominio].seudominio.com` ➔ Carrega qualquer nova proposta que você criar.
  - `https://seudominio.com` ➔ Carrega a Central de Propostas listando todas as ativas.

- **Em Desenvolvimento Local**:
  - `http://localhost:3000/propostas/queirozsilveira` (visualização direta via rota)
  - `http://localhost:3000/?subdomain=queirozsilveira` (simulação de subdomínio)
  - `http://queirozsilveira.localhost:3000` (subdomínio local no navegador)
