import Image from "next/image";

export type Agent = {
  id: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
};

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <div className="rounded-lg border border-muted-2 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image src={agent.photo} alt={agent.name} fill className="object-cover" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{agent.name}</div>
          <div className="text-xs text-foreground/70">{agent.title}</div>
          <div className="mt-2 text-xs text-foreground/70">{agent.phone}</div>
          <div className="text-xs text-foreground/70">{agent.email}</div>
        </div>
      </div>
    </div>
  );
}
