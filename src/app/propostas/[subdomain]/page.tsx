// Hello World
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getProposalBySubdomain,
  getAllProposals,
  getAllSubdomains,
} from "@/data/proposals";
import { ProposalView } from "@/components/ProposalView";
import { hostBrand } from "@/components/brand/hosts";

interface ProposalPageProps {
  params: Promise<{
    subdomain: string;
  }>;
}

// Pré-renderização de todas as propostas cadastradas no build
export async function generateStaticParams() {
  const subdomains = getAllSubdomains();
  return subdomains.map((subdomain) => ({
    subdomain,
  }));
}

// Metadados dinâmicos e precisos para cada proposta
export async function generateMetadata({
  params,
}: ProposalPageProps): Promise<Metadata> {
  const { subdomain } = await params;
  const proposal = getProposalBySubdomain(subdomain);

  if (!proposal) {
    return {
      title: "Proposta Não Encontrada | PRX",
      description: "A proposta solicitada não foi localizada.",
    };
  }

  // Favicon da marca que assina a proposta (PRX ou ViraWeb)
  const icon = hostBrand(proposal.host).icon;

  return {
    title: proposal.meta.title,
    description: proposal.meta.description,
    icons: {
      icon,
      shortcut: icon,
      apple: icon,
    },
    openGraph: {
      title: proposal.meta.title,
      description: proposal.meta.description,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function ProposalPage({ params }: ProposalPageProps) {
  const { subdomain } = await params;
  const proposal = getProposalBySubdomain(subdomain);

  if (!proposal) {
    notFound();
  }

  return <ProposalView proposal={proposal} />;
}
