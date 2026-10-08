
export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white text-center py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold">Ready To Transform Your Workflow?</h2>
      <p className="mt-3 opacity-90">Join thousands of professionals who are already using DigiTools.</p>
      <div className="mt-6 flex flex-wrap gap-3 justify-center">
        <a href="#products" className="btn bg-white text-primary border-0 rounded-full px-8">Explore Products</a>
        <a href="#pricing" className="btn btn-outline text-white rounded-full px-8">View Pricing</a>
      </div>
    </section>
  );
}
