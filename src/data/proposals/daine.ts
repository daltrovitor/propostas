// Hello World
import { ProposalData } from "./types";
import { VIRAWEB_PACKAGE_PHONE } from "./constants";
import { DAINE_LOGO } from "./logos/daine";

/**
 * Diagnóstico do dainedermato.com.br + Pacote ViraWeb.
 * Todas as medições foram feitas em 15/10/2026 no site publicado: Google Lighthouse 13.5
 * (2 rodadas no computador, 3 no celular), leitura do HTML, sitemap e status de cada URL.
 */
export const daineProposal: ProposalData = {
  subdomain: "daine",
  host: "viraweb",
  clientBrand: {
    name: "Daíne Dermato",
    logoVector: DAINE_LOGO,
    website: "https://dainedermato.com.br",
    tagline: "Dermatologia · Goiânia",
  },
  intro: {
    title: "ViraWeb ✕ Daíne Dermato",
    tagline: "Dra. Daíne Vargas · Diagnóstico do site",
    quote: "O diagnóstico completo do dainedermato.com.br e o plano para um site à altura do seu consultório.",
  },
  accentColor: "#1958a5", // Azul da seta do símbolo ViraWeb
  meta: {
    title: "ViraWeb ✕ Daíne Dermato | Diagnóstico e Proposta do Novo Site",
    description:
      "Análise completa do dainedermato.com.br — velocidade, Google, celular, textos e regras do CFM — e a proposta do Pacote ViraWeb com calculadora de investimento.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "Diagnóstico digital · dainedermato.com.br",
    headline: "Seu consultório é referência. Seu site precisa ser também.",
    subheadline:
      "Analisamos o dainedermato.com.br página por página — velocidade, Google, celular, textos e regras do CFM. Aqui está o que encontramos, como o Pacote ViraWeb resolve e uma calculadora para você montar o investimento.",
    dateFormatted: "Outubro de 2026",
    primaryCta: "Aprovar Proposta",
    secondaryCta: "Ver o Diagnóstico",
    panelLabel: "Diagnóstico",
    panelStatus: "Concluído",
  },
  metrics: [
    { value: "34–41", label: "Desempenho no computador", detail: "Google Lighthouse, de 0 a 100" },
    { value: "7 s", label: "Para o banner aparecer", detail: "No computador (LCP)" },
    { value: "0", label: "Títulos H1 na home", detail: "E 28 títulos H2 no lugar" },
    { value: "12/12", label: "Imagens sem descrição", detail: "Inclusive a logo e a sua foto" },
  ],
  executiveSummary: {
    label: "Resumo do diagnóstico",
    title: "O site tem boas fotos e bom conteúdo. A estrutura é que ficou para trás.",
    paragraph1:
      "O dainedermato.com.br roda em WordPress com Elementor. Só a página inicial carrega 31 folhas de estilo e 18 scripts externos; as imagens mais antigas são de 2021 e nenhum dos 23 conteúdos do blog foi atualizado desde novembro de 2023.",
    paragraph2:
      "Nas medições do Google Lighthouse, o desempenho no computador ficou entre 34 e 41 de 100, com o banner levando cerca de 7 segundos para aparecer. A home não tem título principal (H1), as 12 imagens estão sem descrição, há uma página de teste publicada no Google e o CRM e o RQE não aparecem na página inicial.",
    paragraph3:
      "Nada disso salta aos olhos de quem passa rápido — mas pesa no Google, no celular da paciente e na confiança de quem está escolhendo onde marcar a consulta. Abaixo, cada ponto vem com a prova e a correção.",
  },
  chapters: [
    {
      number: "01",
      title: "Primeira impressão",
      kicker: "Design e experiência",
      blocks: [
        {
          type: "paragraph",
          text: "Abrimos o site em um computador e em um celular de 375 px de largura, do jeito que uma paciente faria.",
        },
        {
          type: "findings",
          items: [
            {
              severity: "critico",
              title: "O topo abre desfocado",
              evidence:
                "O banner é um carrossel: nos primeiros segundos aparece uma foto desfocada da sala e o texto entra por animação. No celular, 3 segundos depois de abrir, o seu nome e o botão de agendar ainda estavam ilegíveis na nossa captura.",
              fix: "Topo fixo, sem carrossel, com a sua foto nítida, nome, especialidade com RQE e o botão de agendamento visíveis já no primeiro quadro.",
            },
            {
              severity: "importante",
              title: "Textos claros sobre fundos claros",
              evidence:
                "O Lighthouse mediu contraste de 1,12:1 em um texto branco sobre cinza (#f1f1f1) e de 2,61:1 no botão dourado. A norma WCAG AA pede 4,5:1 (ou 3:1 em títulos grandes).",
              fix: "Paleta com contraste conferido em cada combinação de texto e fundo.",
            },
            {
              severity: "importante",
              title: "Tratamentos em formato de índice",
              evidence:
                "Os 11 tratamentos e os 11 procedimentos aparecem como duas colunas de links pequenos, sem foto nem explicação do que cada um resolve.",
              fix: "Páginas organizadas por queixa (manchas, rugas, flacidez, queda de cabelo) e por procedimento, cada uma com foto, explicação e botão de agendamento.",
            },
            {
              severity: "ajuste",
              title: "A seção do Instagram está parada em 2023",
              evidence:
                "A área “Veja minhas postagens e vídeos no Instagram” é uma única imagem enviada em agosto de 2023, não as suas postagens atuais. Mesmo assim, o plugin de feed do Instagram continua carregando a sua folha de estilos — duas vezes.",
              fix: "Feed real e leve, que se atualiza sozinho, ou uma seleção de conteúdos escolhida por você.",
            },
            {
              severity: "ajuste",
              title: "Detalhes que passam descuido",
              evidence:
                "Cartões de procedimentos com fotos em cortes diferentes e faixas cinzas, mapa do rodapé como imagem estática e o ícone da aba do navegador com uma ilustração genérica de médica, não a sua marca.",
              fix: "Direção de arte única, endereço com rota direta no mapa e favicon desenhado a partir da logo daíne vargas.",
            },
          ],
        },
      ],
    },
    {
      number: "02",
      title: "Velocidade",
      kicker: "Google Lighthouse · 15/10/2026",
      blocks: [
        {
          type: "scores",
          items: [
            {
              value: "34–41",
              label: "Desempenho no computador",
              detail: "2 medições, de 0 a 100",
              status: "ruim",
              bar: 38,
            },
            {
              value: "57–81",
              label: "Desempenho no celular",
              detail: "3 medições, de 0 a 100",
              status: "regular",
              bar: 69,
            },
            {
              value: "7 s",
              label: "Para o banner aparecer no computador",
              detail: "LCP de 7,0 e 7,2 s; o Google considera bom até 2,5 s",
              status: "ruim",
            },
            {
              value: "88",
              label: "Acessibilidade",
              detail: "De 0 a 100",
              status: "regular",
              bar: 88,
            },
          ],
          caption:
            "Google Lighthouse 13.5, medições feitas em 15 de outubro de 2026 no site publicado. As notas variam a cada rodada; por isso mostramos a faixa entre a pior e a melhor.",
        },
        {
          type: "findings",
          items: [
            {
              severity: "critico",
              title: "Página pesada para o que mostra",
              evidence:
                "A página inicial faz 107 requisições e transfere mais de 2 MB: 31 folhas de estilo, 18 scripts externos (incluindo jQuery e jQuery Migrate), quatro famílias de fonte (Playfair Display, Poppins, Montserrat e Roboto) e três identificadores de tags do Google.",
              fix: "Site em Next.js que entrega só o código de cada página, imagens em AVIF/WebP no tamanho exato e uma tipografia de marca.",
            },
            {
              severity: "importante",
              title: "Arquivos que travam a abertura",
              evidence:
                "O Lighthouse estima 2,5 s de ganho só eliminando arquivos que bloqueiam a primeira exibição, além de cerca de 500 KiB de JavaScript sem uso e 527 KiB de economia possível nas imagens.",
              fix: "CSS essencial embutido, scripts carregados só quando necessários e imagens responsivas.",
            },
            {
              severity: "ajuste",
              title: "Pré-carregamento desperdiçado",
              evidence:
                "O próprio navegador avisa que a imagem de fundo bgimg-main-min.jpg é pré-carregada mas não é usada nos primeiros segundos — banda gasta antes do que importa.",
              fix: "Pré-carregar só a imagem que aparece primeiro na tela.",
            },
          ],
        },
      ],
    },
    {
      number: "03",
      title: "Google e SEO",
      kicker: "Como o Google lê o site",
      blocks: [
        {
          type: "paragraph",
          text: "O Lighthouse dá 100 em SEO porque confere só o básico — título, descrição e permissão de indexação. Os problemas que encontramos estão na estrutura que o Google lê:",
        },
        {
          type: "findings",
          items: [
            {
              severity: "critico",
              title: "Uma página de teste está no Google",
              evidence:
                "dainedermato.com.br/teste/ está no ar, liberada para indexação e listada no sitemap, com textos de modelo como “Seu título h1” e “Título 1”.",
              fix: "Remover a página, responder 410 (removida) e limpar o sitemap.",
            },
            {
              severity: "critico",
              title: "Nenhum título principal (H1)",
              evidence:
                "A página inicial não tem H1 e usa 28 títulos H2 — inclusive para os telefones e o horário de atendimento. A página /procedimentos-realizados/ também não tem H1.",
              fix: "Um H1 por página (ex.: “Dermatologista em Goiânia — Dra. Daíne Vargas”) e hierarquia H2/H3 de verdade.",
            },
            {
              severity: "importante",
              title: "Uma cópia da home competindo com ela",
              evidence:
                "/sua-dermatologista-em-goiania/ repete o título, a descrição e os blocos da página inicial, e cada uma se declara a versão oficial (canonical).",
              fix: "Redirecionar (301) para a home ou transformar em página própria sobre o consultório no Setor Bueno.",
            },
            {
              severity: "importante",
              title: "O Google não recebe o seu endereço",
              evidence:
                "Os dados estruturados são os padrões do plugin Yoast: um “Person/Organization” chamado “Dra. Daíne”. Não há Physician nem MedicalClinic com endereço, telefones, horário e especialidade.",
              fix: "Schema Physician + MedicalClinic com o endereço do Walk Bueno Business, horários, telefones, CRM e RQE.",
            },
            {
              severity: "importante",
              title: "Título sem a cidade",
              evidence:
                "O título da home é “Dra. Daíne Vargas Dermatologista Clínica e Trat. Estéticos”: abreviado e sem Goiânia ou Setor Bueno, que são o que define uma busca local.",
              fix: "Títulos e descrições escritos para as buscas reais, página por página.",
            },
            {
              severity: "ajuste",
              title: "Páginas que não deveriam estar indexadas",
              evidence:
                "/whatsapp/ é uma página indexável cuja única função é redirecionar para o WhatsApp via JavaScript. O único artigo do blog tem o endereço genérico /artigo/, não tem meta descrição e carrega um caractere invisível no título.",
              fix: "Link direto para o WhatsApp, endereços descritivos e descrição própria em cada página.",
            },
            {
              severity: "ajuste",
              title: "Menus e endereços com erro",
              evidence:
                "Clicar em “Tratamentos” no menu leva à página de Botox, e em “Principais queixas”, à de rugas. A página de queda de cabelo está publicada como /queda-de-cabelos-e-calvivie/.",
              fix: "Menus que abrem as listas certas e endereços corrigidos, com redirecionamento 301 dos antigos.",
            },
            {
              severity: "ajuste",
              title: "Conteúdo parado desde 2023",
              evidence:
                "No sitemap, a última atualização dos 23 conteúdos do blog é de 10/11/2023.",
              fix: "Calendário de conteúdo com textos revisados por você, que mantêm o site vivo para o Google.",
            },
          ],
        },
      ],
    },
    {
      number: "04",
      title: "Celular e acessibilidade",
      kicker: "Lighthouse: 88 de 100",
      blocks: [
        {
          type: "findings",
          items: [
            {
              severity: "importante",
              title: "Sem botão fixo para agendar no celular",
              evidence:
                "Não há nenhum elemento fixo na tela do celular: o botão de agendar só aparece quando a paciente passa por ele, numa página de quase 9.000 px de altura.",
              fix: "Barra fixa com WhatsApp e ligação, sempre a um toque.",
            },
            {
              severity: "importante",
              title: "Alvos de toque pequenos demais",
              evidence:
                "O Lighthouse apontou 22 alvos de toque abaixo do mínimo: os links de tratamentos têm 22 px de altura e os marcadores do carrossel, 6 px.",
              fix: "Todo botão e link com área de pelo menos 48 px.",
            },
            {
              severity: "importante",
              title: "Imagens e links sem descrição",
              evidence:
                "As 12 imagens da página inicial têm texto alternativo vazio — inclusive a logo e a sua foto — e 9 links não têm nome legível por leitores de tela.",
              fix: "Descrição em cada imagem e nome claro em cada link.",
            },
            {
              severity: "ajuste",
              title: "Sem área principal marcada",
              evidence:
                "A página não tem a marcação <main>, que os leitores de tela usam para pular direto ao conteúdo.",
              fix: "Estrutura semântica completa: cabeçalho, navegação, conteúdo e rodapé.",
            },
          ],
        },
      ],
    },
    {
      number: "05",
      title: "Textos, CFM e LGPD",
      kicker: "Revisão de conteúdo e conformidade",
      blocks: [
        {
          type: "findings",
          items: [
            {
              severity: "critico",
              title: "CRM e RQE fora da página inicial",
              evidence:
                "A home não mostra CRM nem RQE. Nas páginas internas eles aparecem só no rodapé, como CRM-MS — mas o consultório fica em Goiânia. A Resolução CFM nº 2.336/2023 (art. 4º) pede nome, número do CRM onde o médico atua e, ao citar especialidade, o RQE.",
              fix: "Identificação completa — nome, CRM do estado de atuação e RQE de Dermatologia — no topo e no rodapé de todas as páginas.",
            },
            {
              severity: "importante",
              title: "“Especialista em estética”",
              evidence:
                "O banner diz “Médica Dermatologista especialista em estética”. O CFM não reconhece estética como especialidade médica e veda anunciar especialidade não reconhecida.",
              fix: "“Dermatologista — RQE nº … — com atuação em dermatologia estética”, com a redação final revisada com você.",
            },
            {
              severity: "importante",
              title: "Privacidade com link quebrado",
              evidence:
                "O link “Preferências e privacidade” das páginas internas leva a um erro 404, e a home não tem link nenhum. Não há aviso de cookies, embora o site carregue Google Tag Manager e Google Analytics 4 — ponto de atenção para a LGPD.",
              fix: "Política de privacidade publicada e aviso de cookies com consentimento antes de ativar as medições.",
            },
            {
              severity: "ajuste",
              title: "Erros de digitação",
              evidence:
                "“calvívie” (calvície) no menu e no endereço da página, “hiperhirose” (hiperidrose), “PRICIPAIS” (principais), “aperfeçoamento” (aperfeiçoamento) e “Eleva” no menu para o bioestimulador que o endereço chama de “Elleva”.",
              fix: "Revisão ortográfica e dos nomes comerciais em todas as páginas.",
            },
            {
              severity: "ajuste",
              title: "Informações desencontradas",
              evidence:
                "Seu nome aparece ora como “Daíne”, ora como “Daine” — no nome do site, que entra no título das páginas internas, e na biografia. As sociedades aparecem como “Sociedade de Dermatologia (SBD)” e “Sociedade de Cirurgia Dermatológica (SBCD)”, sem o “Brasileira”, e o rodapé ainda diz ©2023.",
              fix: "Um padrão único de nome, títulos e créditos em todo o site.",
            },
            {
              severity: "ajuste",
              title: "Uma promessa que o site não cumpre",
              evidence:
                "O rodapé diz “Pelo meu site você agenda sua consulta de um jeito rápido e prático”, mas não há agenda nem formulário: todos os caminhos levam ao WhatsApp.",
              fix: "Agendamento guiado pelo ViraBot no WhatsApp, 24 horas por dia.",
            },
            {
              severity: "ajuste",
              title: "Avaliações antigas na vitrine",
              evidence:
                "O widget mostra 14 avaliações do Google, e as primeiras exibidas são de setembro de 2023.",
              fix: "Estratégia contínua para novas avaliações no Google Meu Negócio, exibidas em tempo real.",
            },
          ],
        },
      ],
    },
    {
      number: "06",
      title: "O novo site",
      kicker: "O que a ViraWeb entrega",
      blocks: [
        {
          type: "paragraph",
          text: "Não é um tema novo sobre a mesma base. É um site feito do zero em Next.js — a mesma tecnologia do viraweb.dev.br — pensado para a paciente que pesquisa pelo celular e decide em segundos.",
        },
        {
          type: "facts",
          items: [
            { value: "20–30", label: "dias úteis para o site completo" },
            { value: "100%", label: "código, domínio e acessos seus" },
            { value: "301", label: "em todas as URLs atuais, sem perder o Google" },
          ],
        },
        {
          type: "list",
          intro: "Cada ponto deste diagnóstico vira item de entrega:",
          items: [
            "Meta de 95+ no Lighthouse, no celular e no computador",
            "Um H1 por página e schema Physician + MedicalClinic",
            "CRM e RQE visíveis em todas as páginas",
            "Páginas por queixa e por procedimento, com endereços corrigidos",
            "Botão fixo de WhatsApp e ligação no celular",
            "Política de privacidade e consentimento de cookies",
            "Textos revisados conforme a Resolução CFM nº 2.336/2023",
            "Página de teste, cópia da home e /whatsapp/ fora do Google",
          ],
        },
        {
          type: "steps",
          title: "Como vamos trabalhar",
          items: [
            {
              title: "Aprovação e briefing",
              text: "Você aprova o pacote; reunimos CRM, RQE, fotos, textos e os acessos ao domínio.",
            },
            {
              title: "Design e conteúdo",
              text: "Layout exclusivo com a identidade daíne vargas e textos revisados para as regras do CFM.",
            },
            {
              title: "Desenvolvimento",
              text: "Next.js, páginas por tratamento, dados estruturados, LGPD e testes em celulares reais.",
            },
            {
              title: "Migração e lançamento",
              text: "Redirecionamento 301 de todas as URLs atuais, sitemap limpo e Google Search Console.",
            },
          ],
        },
      ],
    },
  ],
  pillarsSection: {
    label: "Pacote ViraWeb",
    title: "Atrair, posicionar e converter — no automático.",
    description:
      "Os quatro módulos do Pacote ViraWeb aplicados ao consultório. Contrate todos ou só o que fizer sentido agora.",
    statement: {
      lead: ["Os quatro módulos juntos saem com"],
      emphasis: "20% off no setup e 15% off na mensalidade.",
      trail: ["Monte o seu pacote na calculadora abaixo."],
    },
  },
  pillars: [
    {
      number: "01",
      title: "Website",
      tag: "Next.js",
      description:
        "O novo dainedermato.com.br: rápido, com CRM e RQE, páginas por queixa e agendamento a um toque.",
    },
    {
      number: "02",
      title: "Google Meu Negócio & SEO Local",
      tag: "Goiânia · Setor Bueno",
      description:
        "Ficha otimizada, serviços cadastrados, fotos do consultório e uma estratégia para crescer além das 14 avaliações que o site mostra hoje.",
    },
    {
      number: "03",
      title: "Tráfego Pago",
      tag: "Google Ads + Meta Ads",
      description:
        "Campanhas para os procedimentos que você quer priorizar, dentro das regras do CFM. A verba dos anúncios é paga direto às plataformas.",
    },
    {
      number: "04",
      title: "ViraBot WhatsApp",
      tag: "Atendimento 24/7",
      description:
        "Responde dúvidas frequentes, faz a triagem e encaminha o agendamento — também depois das 20h, aos sábados à tarde e aos domingos.",
    },
  ],
  calculator: {
    label: "Investimento",
    title: "Monte o seu pacote",
    description:
      "Selecione os módulos. Setup e mensalidade são calculados na hora, com o mesmo desconto progressivo do Pacote ViraWeb.",
    packageName: "Pacote ViraWeb",
    services: [
      {
        id: "website",
        name: "Website / Landing Page Alta Conversão",
        description:
          "Site institucional moderno em Next.js, SEO técnico, design exclusivo e responsivo.",
        benefit: "o novo dainedermato.com.br, com todos os pontos deste diagnóstico corrigidos.",
        setup: 1600,
        monthly: 180,
      },
      {
        id: "gmn",
        name: "Google Meu Negócio & SEO Local",
        description:
          "Otimização completa da ficha, cadastro de serviços, estratégia de avaliações e posicionamento no mapa.",
        benefit: "aparecer para quem procura dermatologista em Goiânia e no Setor Bueno.",
        setup: 700,
        monthly: 150,
      },
      {
        id: "ads",
        name: "Gestão de Tráfego Pago (Google Ads + Meta Ads)",
        description:
          "Criação e otimização constante de campanhas para atrair pacientes qualificadas. Verba de anúncios paga pelo cliente.",
        benefit: "campanhas para os procedimentos que você quer priorizar, dentro das regras do CFM.",
        setup: 600,
        monthly: 600,
      },
      {
        id: "virabot",
        name: "ViraBot WhatsApp (Atendimento Automático)",
        description:
          "Chatbot inteligente para triagem, resposta de dúvidas frequentes e agendamento.",
        benefit: "resposta imediata também fora do horário do consultório.",
        setup: 800,
        monthly: 250,
      },
    ],
    tiers: [
      {
        minItems: 2,
        setupRate: 0.1,
        monthlyRate: 0,
        label: "2 a 3 módulos: 10% de desconto no setup",
      },
      {
        minItems: 4,
        setupRate: 0.2,
        monthlyRate: 0.15,
        label: "4 módulos (pacote completo): 20% no setup + 15% na mensalidade",
      },
    ],
    footnote:
      "Valores do Pacote ViraWeb. A verba dos anúncios é paga diretamente ao Google e à Meta. Proposta válida por 30 dias.",
  },
  closing: {
    headline: "Vamos construir o site que o seu consultório já merece?",
    brandLine: "ViraWeb ✕ Daíne Dermato",
    lines: [
      { title: "Tudo neste diagnóstico vira entrega", text: "Os pontos críticos resolvidos já no lançamento." },
      { title: "Sem perder o Google", text: "Migração com redirecionamento de todas as páginas atuais." },
      { title: "Site, código e domínio seus", text: "Propriedade total, sem amarras." },
      { title: "Acompanhamento mensal", text: "Hospedagem e gestão inclusas na mensalidade." },
    ],
    description:
      "Toque abaixo para aprovar pelo WhatsApp. Respondemos com o cronograma e a lista do que precisamos para começar.",
    signature: "ViraWeb — Engenharia Digital",
  },
  whatsapp: {
    phone: VIRAWEB_PACKAGE_PHONE,
    defaultMessage: "Olá ViraWeb! Vi a proposta do novo site da Dra. Daíne Vargas (daine.viraweb.dev.br).",
  },
};
