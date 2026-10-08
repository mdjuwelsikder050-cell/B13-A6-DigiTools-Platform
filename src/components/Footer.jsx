const cols = {
  Product: ["Features", "Pricing", "Templates", "Integrations"],
  Company: ["About Us", "Careers", "Blog", "Press"],
  Resources: ["Documentation", "Help Center", "Community", "Contact"],
};
export default function Footer() {
  return (
    <footer className="bg-neutral text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-bold text-white">DigiTools</h3>
          <p className="mt-3 text-sm max-w-xs">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
        </div>
        {Object.entries(cols).map(([h, items]) => (
          <div key={h}>
            <h4 className="font-semibold text-white mb-3">{h}</h4>
            <ul className="space-y-2 text-sm">{items.map((i) => <li key={i}><a href="#" className="hover:text-white">{i}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-700 text-center text-sm py-5">© {new Date().getFullYear()} DigiTools. All rights reserved.</div>
    </footer>
  );
}
