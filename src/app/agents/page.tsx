import AgentCard from "@/components/AgentCard";
import { AGENTS } from "@/data/agents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agents",
  description: "Meet our trusted, experienced advisors.",
};

export default function AgentsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold text-foreground">Our agents</h1>
      <p className="mt-1 text-sm text-foreground/70">
        Dedicated professionals focused on outcomes and client experience.
      </p>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        {AGENTS.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>
    </div>
  );
}
