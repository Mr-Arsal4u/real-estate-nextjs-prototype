export default function Stats() {
  const stats = [
    { label: "Years in business", value: "15+" },
    { label: "Properties sold", value: "3,200+" },
    { label: "Average days on market", value: "21" },
    { label: "Client satisfaction", value: "98%" },
  ];
  return (
    <section className="container mt-16">
      <div className="grid grid-cols-2 gap-4 rounded-lg border border-muted-2 bg-white p-6 text-center shadow md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="text-2xl font-semibold text-primary">{s.value}</div>
            <div className="mt-1 text-xs text-foreground/70">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
