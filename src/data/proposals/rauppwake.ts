// Hello World
import { ProposalData } from "./types";
import { PRX_APPROVAL_PHONE } from "./constants";

export const rauppWakeProposal: ProposalData = {
  subdomain: "rauppwake",
  clientBrand: {
    name: "Raupp Wake",
    logoPng: "/logos/raupp-wake.webp",
    logoWidth: 303,
    logoHeight: 282,
    logoShape: "badge",
    logoPngOnDark: "/logos/raupp-wake-white.webp",
    tagline: "Wake Park",
  },
  intro: {
    tagline: "PRX OFFLINE — Wake Edition",
  },
  accentColor: "#0e345b", // Azul Navy Raupp (extraído da logo)
  meta: {
    title: "PRX ✕ Raupp Wake | Proposta de Parceria",
    description:
      "Menos tela. Mais vida acontecendo. Desconto exclusivo PRX PASS nas aulas particulares e o PRX OFFLINE — Wake Edition no Wake Park.",
    date: "Outubro de 2026",
  },
  hero: {
    badge: "PRX ✕ Raupp Wake",
    headline: "Menos tela. Mais vida acontecendo.",
    subheadline:
      "Desconto exclusivo nas aulas particulares pelo PRX PASS e uma experiência proprietária capaz de transformar o Wake Park em um ponto de encontro da comunidade PRX.",
    dateFormatted: "Outubro de 2026",
  },
  metrics: [
    {
      value: "PASS",
      label: "Unlock Wake",
      detail: "Desconto nas aulas particulares",
    },
    {
      value: "Offline",
      label: "Wake Edition",
      detail: "Summer experience nas férias",
    },
    {
      value: "17h59",
      label: "Ritual diário",
      detail: "Sunset sem celular",
    },
    {
      value: "Badge",
      label: "PRX Wake Badge",
      detail: "Desbloqueado no app",
    },
  ],
  executiveSummary: {
    label: "Introdução",
    title: "Experiência, esporte, liberdade e comunidade.",
    paragraph1:
      "A parceria entre PRX e Raupp Wake nasce de uma conexão natural entre as duas marcas: experiência, esporte, liberdade e comunidade.",
    paragraph2:
      "A proposta é apresentar o wake para novos jovens através do PRX PASS, oferecendo uma condição exclusiva nas aulas particulares, mas também criar uma experiência proprietária capaz de transformar o Wake Park em um ponto de encontro da comunidade PRX.",
  },
  chapters: [
    {
      number: "01",
      title: "Raupp Wake ✕ PRX PASS",
      blocks: [
        {
          type: "paragraph",
          text: "Usuários PRX terão acesso a um desconto exclusivo nas aulas particulares da Raupp Wake, permitindo que adolescentes que nunca praticaram o esporte tenham uma condição especial para começar e que aqueles que já praticam tenham incentivo para continuar evoluindo.",
        },
        {
          type: "paragraph",
          text: "Dentro do aplicativo, a comunicação pode fugir do tradicional “X% OFF”:",
        },
        {
          type: "feature",
          label: "No app PRX",
          title: "UNLOCK WAKE",
          description: "Seu primeiro rolê na água começa diferente sendo PRX.",
        },
        {
          type: "paragraph",
          text: "Além do desconto, podemos estudar uma condição especial para a primeira aula, incentivando experimentação e aquisição de novos alunos.",
        },
      ],
    },
    {
      number: "02",
      title: "PRX OFFLINE",
      kicker: "Wake Edition",
      blocks: [
        {
          type: "paragraph",
          text: "Minha proposta é criarmos nas férias uma experiência exclusiva para adolescentes:",
        },
        {
          type: "feature",
          label: "Summer experience",
          title: "PRX OFFLINE — Wake Edition",
          description: "A melhor parte das férias não cabe na tela.",
        },
        {
          type: "statement",
          text: "Não será uma colônia de férias.",
        },
        {
          type: "paragraph",
          text: "Será um summer experience com vagas limitadas, pensado para adolescentes, combinando esporte, música, gastronomia, conteúdo, desafios e experiências de marcas parceiras PRX.",
        },
        {
          type: "paragraph",
          text: "A ideia é reproduzir um pouco daquela sensação das melhores viagens de formatura: você chega para participar das atividades, mas o que realmente torna aquilo inesquecível são as pessoas, as histórias e o sentimento de pertencer àquele grupo.",
        },
        {
          type: "paragraph",
          text: "Nada de monitor gritando dinâmica, gincana infantil, camiseta colorida ou brincadeira constrangedora.",
        },
        {
          type: "formula",
          intro: "A linguagem é:",
          items: [
            { title: "Wake" },
            { title: "Sunset" },
            { title: "Música" },
            { title: "Creators" },
            { title: "Esporte" },
            { title: "Experiências" },
          ],
        },
      ],
    },
    {
      number: "03",
      title: "Como funcionaria",
      blocks: [
        {
          type: "paragraph",
          text: "Uma experiência com o número de dias a ser definido, durante as férias, com grupos limitados.",
        },
        {
          type: "statement",
          text: "O wake é o protagonista, mas não ocupa o dia inteiro.",
        },
        {
          type: "paragraph",
          text: "Teríamos iniciação e aulas com a Raupp, desafios entre os participantes e momentos livres no Wake Park, intercalados com experiências PRX.",
        },
        {
          type: "tags",
          intro: "A programação poderia incluir:",
          items: [
            "Wake Sessions",
            "Futebol de sabão",
            "DJ sunset",
            "Coffee party",
            "Criação de conteúdo",
            "Desafios rápidos",
            "Encerramento especial",
          ],
        },
        {
          type: "paragraph",
          text: "E cada parceiro PRX poderia assumir uma experiência.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Recovery Bar",
              meta: "Juistreet",
              text: "A Juistreet, por exemplo, pode assinar o Recovery Bar, com juices e degustações pós-wake.",
            },
            {
              title: "Ativação de mobilidade",
              meta: "Moto Chefe",
              text: "A Moto Chefe pode criar uma ativação de mobilidade no local, respeitando as regras aplicáveis aos veículos e ao espaço.",
            },
            {
              title: "PRX OFFLINE DROP",
              meta: "Parceiro de moda",
              text: "Um parceiro de moda pode desenvolver um PRX OFFLINE DROP, com camiseta/boné exclusivo que não esteja à venda — apenas participantes recebem.",
            },
            {
              title: "Sunset Recovery",
              meta: "Marca de skincare",
              text: "Uma marca de skincare pode criar o Sunset Recovery, com proteção solar e cuidados depois de um dia de esporte.",
            },
            {
              title: "OFFLINE TALK",
              meta: "Fim da tarde · 15 minutos",
              text: "Conversas curtíssimas, de 15 minutos, com jovens interessantes falando de empreendedorismo, esporte, dinheiro, futuro ou comportamento. Sem palco de congresso e sem “palestrinha motivacional”.",
            },
          ],
        },
      ],
    },
    {
      number: "04",
      title: "O momento que pode virar o hype",
      blocks: [
        {
          type: "feature",
          label: "Eu criaria um ritual diário",
          title: "5:59 PM — OFFLINE",
          description: "Às 17h59 começa o sunset.",
        },
        {
          type: "steps",
          items: [
            {
              title: "Phone Parking PRX",
              text: "Celulares vão temporariamente para o Phone Parking PRX e entra o DJ.",
            },
            {
              title: "Cerca de 30 minutos",
              text: "Acontece uma experiência surpresa: música, desafio na água, convidado especial ou simplesmente todo mundo vivendo aquele momento sem filmar.",
            },
            {
              title: "Depois",
              text: "Celulares devolvidos.",
            },
          ],
        },
        {
          type: "quote",
          label: "A provocação da campanha seria:",
          text: "Se ninguém postou, será que aconteceu?",
        },
        {
          type: "statement",
          label: "E a resposta:",
          text: "Aconteceu. Você estava lá.",
        },
        {
          type: "paragraph",
          text: "Isso tem muito mais identidade PRX do que uma colônia tradicional.",
        },
      ],
    },
    {
      number: "05",
      title: "Status e pertencimento",
      blocks: [
        {
          type: "paragraph",
          text: "A experiência precisa ter elementos que façam o adolescente querer participar também pelo pertencimento.",
        },
        {
          type: "list",
          items: [
            "Vagas limitadas",
            "Pulseira PRX OFFLINE",
            "Welcome Kit",
            "Drop exclusivo",
            "Grupo privado dos participantes",
            "Conteúdo oficial",
            "Fotos profissionais",
            "Benefícios Raupp posteriores",
          ],
        },
        {
          type: "paragraph",
          text: "E quem concluir sua primeira experiência de wake pode desbloquear dentro do aplicativo um:",
        },
        {
          type: "feature",
          label: "Conquista no app PRX",
          title: "PRX WAKE BADGE",
          description: "Unlocked at Raupp Wake.",
        },
        {
          type: "statement",
          text: "Não precisa valer nada financeiramente. O valor é justamente ter conquistado.",
        },
      ],
    },
    {
      number: "06",
      title: "Encerramento — PRX OFFLINE Sunset",
      blocks: [
        {
          type: "paragraph",
          text: "No último dia, encerramos com um sunset maior, reunindo participantes, convidados e parceiros.",
        },
        {
          type: "tags",
          items: [
            "DJ",
            "Wake exhibition",
            "Ativações",
            "Gastronomia",
            "Entrega simbólica dos badges",
          ],
        },
        {
          type: "paragraph",
          text: "Sem cerimônia de encerramento. Sem medalhinha. Sem “parabéns, turma”.",
        },
        {
          type: "statement",
          text: "Terminou o último wake, começa o sunset. Simples assim.",
        },
      ],
    },
  ],
  pillarsSection: {
    label: "Conclusão",
    title: "Começa no PRX PASS. Pode evoluir para algo muito maior.",
    description:
      "A parceria começa no PRX PASS com um benefício objetivo: desconto nas aulas particulares da Raupp Wake. Mas pode evoluir para algo muito maior.",
  },
  pillars: [
    {
      number: "01",
      title: "A Raupp ganha",
      description: "Acesso e recorrência junto a uma nova geração de consumidores.",
      tag: "Raupp Wake",
    },
    {
      number: "02",
      title: "A PRX ganha",
      description: "Um território físico extraordinário para construir comunidade.",
      tag: "Comunidade",
    },
    {
      number: "03",
      title: "Os adolescentes ganham",
      description:
        "Aquilo que talvez esteja ficando mais raro: uma experiência boa o suficiente para fazê-los esquecer do celular por alguns minutos.",
      tag: "Experiência",
    },
  ],
  closing: {
    headline: "A melhor parte das férias não cabe na tela.",
    brandLine: "PRX ✕ Raupp Wake · PRX OFFLINE — Wake Edition",
    lines: [
      { title: "PRX PASS", text: "Benefício para praticar." },
      { title: "PRX OFFLINE", text: "Motivo para pertencer." },
    ],
    signature: "PRX — the next pays.",
  },
  whatsapp: {
    phone: PRX_APPROVAL_PHONE,
    defaultMessage: "Olá! Gostaria de avançar na proposta de parceria PRX ✕ Raupp Wake.",
  },
};
