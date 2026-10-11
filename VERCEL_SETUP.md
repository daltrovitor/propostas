# Configuração Única na Vercel (Wildcard Subdomains)

Para que qualquer subdomínio funcione automaticamente sem você nunca mais precisar entrar no painel da Vercel para criar outro projeto, siga estes 3 passos simples uma única vez:

---

### Passo 1: Criar o Projeto na Vercel (Uma Única Vez)

1. Acesse o dashboard da Vercel (`vercel.com`).
2. Clique em **Add New...** ➔ **Project**.
3. Importe este repositório (`Propostas`).
4. Framework Preset: **Next.js**.
5. Clique em **Deploy**.

---

### Passo 2: Configurar o Domínio Wildcard (`*.seudominio.com`)

1. No projeto que você acabou de criar na Vercel, vá em **Settings** ➔ **Domains**.
2. No campo de texto, adicione o seu domínio principal:
   - Exemplo: `propostasprx.com.br` (ou o domínio que você usa).
3. Em seguida, adicione o domínio com **asterisco (Wildcard)**:
   - Exemplo: `*.propostasprx.com.br` (ou `*.prx.app.br`).
4. A Vercel mostrará as instruções de apontamento DNS.

---

### Passo 3: Configurar o DNS (Cloudflare, Registro.br ou provedor)

No gerenciador de DNS do seu domínio:

1. Crie um registro do tipo **CNAME**:
   - **Nome / Host**: `*`
   - **Destino / Valor**: `cname.vercel-dns.com`
   - **TTL**: Automático ou 3600.
2. (Opcional) Crie também um registro para o domínio raiz (`@` ou `propostas`) apontando para o IP da Vercel (`76.76.21.21`) para a Central de Propostas funcionar na raiz.

---

### Pronto! Como tudo funciona a partir daqui:

- Quando você mandar o prompt para criar uma proposta no subdomínio `boticario`:
  1. O agente adiciona a proposta no código.
  2. O agente faz o commit e push para o repositório.
  3. A Vercel faz o build em ~40 segundos.
  4. O link `https://boticario.seudominio.com` já entra no ar automaticamente!
  5. As outras propostas (ex: `https://queirozsilveira.seudominio.com`) continuam no ar intactas!
