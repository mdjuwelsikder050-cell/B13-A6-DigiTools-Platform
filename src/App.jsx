import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import products from "./data/products.json";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  const [tab, setTab] = useState("products");
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    if (cart.some((i) => i.id === p.id)) return;
    setCart([...cart, p]);
    toast.success(`${p.name} added to cart`);
  };
  const remove = (p) => {
    setCart(cart.filter((i) => i.id !== p.id));
    toast.info(`${p.name} removed from cart`);
  };
  const checkout = () => {
    setCart([]);
    toast.success("Checkout complete. Thank you for your purchase!");
  };

  const tabBtn = (key, label) => (
    <button onClick={() => setTab(key)} className={`btn rounded-full px-8 ${tab === key ? "btn-primary" : "btn-ghost"}`}>{label}</button>
  );

  return (
    <>
      <Navbar count={cart.length} />
      <Banner />
      <Stats />
      <section id="products" className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Premium Digital Tools</h2>
          <p className="text-gray-500 mt-2">Choose from our curated collection of premium digital products.</p>
          <div className="inline-flex mt-6 p-1 rounded-full bg-base-200">
            {tabBtn("products", "Products")}
            {tabBtn("cart", `Cart (${cart.length})`)}
          </div>
        </div>
        {tab === "products" ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} added={cart.some((i) => i.id === p.id)} onBuy={addToCart} />
            ))}
          </div>
        ) : (
          <Cart items={cart} onRemove={remove} onCheckout={checkout} />
        )}
      </section>
      <Steps />
      <Pricing />
      <CTA />
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
