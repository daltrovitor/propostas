// Hello World
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSubdomains, getProposalBySubdomain } from "@/data/proposals";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

interface PreviewPageProps {
  params: Promise<{
    subdomain: string;
  }>;
}

// Pré-renderiza a prévia de todas as propostas que têm portfólio
export async function generateStaticParams() {
  return getAllSubdomains()
    .filter((subdomain) => getProposalBySubdomain(subdomain)?.portfolio)
    .map((subdomain) => ({ subdomain }));
}

export async function generateMetadata({ params }: PreviewPageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const proposal = getProposalBySubdomain(subdomain);
  const portfolio = proposal?.portfolio;

  if (!proposal || !portfolio) {
    return { title: "Prévia Não Encontrada | ViraWeb" };
  }

  // Favicon da prévia: o símbolo da marca, como no site final
  const icon = portfolio.icon ?? "/viraweb-icon.svg";

  return {
    title: `${portfolio.title} (prévia)`,
    description: portfolio.description,
    robots: { index: false, follow: false },
    icons: { icon, shortcut: icon, apple: icon },
    openGraph: {
      title: portfolio.title,
      description: portfolio.description,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { subdomain } = await params;
  const proposal = getProposalBySubdomain(subdomain);

  if (!proposal?.portfolio) {
    notFound();
  }

  return (
    <PortfolioPage
      portfolio={proposal.portfolio}
      brandName={proposal.clientBrand.name}
      logo={proposal.clientBrand.logoVector}
      subdomain={proposal.subdomain}
      accentColor={proposal.accentColor}
      whatsappPhone={proposal.whatsapp.phone}
    />
  );
}
