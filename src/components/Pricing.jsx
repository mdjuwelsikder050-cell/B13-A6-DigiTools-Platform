const plans = [
  { name: "Starter", price: 0, text: "Perfect for getting started", features: ["Access to 10 free tools", "Basic templates", "Community support"], featured: false },
  { name: "Pro", price: 29, text: "Best for professionals", features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Cloud sync"], featured: true },
  { name: "Enterprise", price: 99, text: "For teams and companies", features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated manager"], featured: false },
];
export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-gray-500 mt-2">Choose the plan that fits your needs.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10 items-stretch">
          {plans.map((p) => (
            <div key={p.name} className={`card text-left shadow-md ${p.featured ? "bg-primary text-primary-content md:scale-105" : "bg-base-100 border border-base-200"}`}>
              <div className="card-body">
                {p.featured && <span className="badge badge-warning self-start">Most Popular</span>}
                <h3 className="card-title text-2xl">{p.name}</h3>
                <p className="opacity-80 text-sm">{p.text}</p>
                <p className="my-2"><span className="text-4xl font-bold">${p.price}</span><span className="opacity-80">/Month</span></p>
                <ul className="space-y-2 text-sm flex-1">{p.features.map((f) => <li key={f}>✔ {f}</li>)}</ul>
                <button className={`btn rounded-full mt-4 ${p.featured ? "bg-white text-primary border-0 hover:bg-gray-100" : "btn-primary"}`}>
                  {p.price === 0 ? "Get Started Free" : "Choose Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
