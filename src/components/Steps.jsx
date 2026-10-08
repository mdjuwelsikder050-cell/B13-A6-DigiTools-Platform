import user from "../assets/user.png";
import rocket from "../assets/rocket.png";
import portfolio from "../assets/portfolio.png";
const steps = [
  { icon: user, title: "Create Account", text: "Sign up in seconds, no credit card needed." },
  { icon: portfolio, title: "Choose Products", text: "Browse the catalog and pick the tools you need." },
  { icon: rocket, title: "Start Creating", text: "Download or launch your tools and get to work." },
];
export default function Steps() {
  return (
    <section className="bg-base-200 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-500 mt-2">Start using premium digital tools in minutes.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {steps.map((s, i) => (
            <div key={s.title} className="card bg-base-100 shadow-md">
              <div className="card-body items-center">
                <span className="badge badge-primary absolute top-4 right-4">{i + 1}</span>
                <img src={s.icon} alt="" className="w-16 h-16 p-3 rounded-full bg-base-200" />
                <h3 className="card-title">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

