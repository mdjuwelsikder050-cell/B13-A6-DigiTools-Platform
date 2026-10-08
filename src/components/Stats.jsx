const stats = [["50K+", "Active Users"], ["200+", "Premium Tools"], ["4.9", "Rating"]];
export default function Stats() {
  return (
    <section className="bg-primary text-primary-content">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:divide-x divide-white/30">
        {stats.map(([v, l]) => (
          <div key={l}><p className="text-4xl font-bold">{v}</p><p className="mt-1 opacity-90">{l}</p></div>
        ))}
      </div>
    </section>
  );
}
