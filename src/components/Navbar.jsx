import cartIcon from "../assets/shopping-cart.png";
const links = ["Products", "Features", "Pricing", "Testimonials", "FAQ"];
export default function Navbar({ count }) {
  return (
    <header className="sticky top-0 z-30 bg-base-100/95 backdrop-blur border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4">
        <div className="navbar-start">
          <details className="dropdown lg:hidden">
            <summary className="btn btn-ghost btn-square" aria-label="Menu">☰</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">

              {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}

              <li><a className="text-primary font-semibold">Login</a></li> 
            </ul>
          </details>
          <a href="#" className="text-2xl font-bold text-primary">DigiTools</a>
        </div>
        <ul className="navbar-center hidden lg:flex gap-8 text-gray-600 font-medium">
          {links.map((l) => <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary">{l}</a></li>)}
        </ul>
        <div className="navbar-end gap-2">
          <div className="indicator">
            <span className="indicator-item badge badge-secondary badge-sm">{count}</span>
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
          </div>
          <button className="btn btn-ghost hidden sm:inline-flex">Login</button>
          <button className="btn btn-primary rounded-full px-6">Get Started</button>
        </div>
      </div>
    </header>
  );
}
