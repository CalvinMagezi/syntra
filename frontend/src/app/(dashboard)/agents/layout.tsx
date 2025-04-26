import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Conversation | Kortix Syntra",
  description: "Interactive agent conversation powered by Kortix Syntra",
  openGraph: {
    title: "Agent Conversation | Kortix Syntra",
    description: "Interactive agent conversation powered by Kortix Syntra",
    type: "website",
  },
};

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 