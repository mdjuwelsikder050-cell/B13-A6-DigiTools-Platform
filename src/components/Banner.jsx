import banner from "../assets/banner.png";
import play from "../assets/play.png";
export default function Banner() {
  return (
    <section className="bg-base-200">
      <div className="max-w-7xl mx-auto px-4 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <span className="badge badge-lg badge-primary badge-outline mb-5">New: AI-powered tools available</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            Supercharge Your Digital Workflow
          </h1>
          <p className="mt-5 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity software, all in one place. Start creating faster today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#products" className="btn btn-primary rounded-full px-8">Explore Products</a>
            <button className="btn btn-outline btn-primary rounded-full px-8"><img src={play} alt="" className="w-4 h-4" />Watch Demo</button>
          </div>
        </div>
        <img src={banner} alt="DigiTools dashboard preview" className="w-full max-w-md mx-auto" />
      </div>
    </section>
  );
}
