import { icons } from "../icons";
const tagStyle = { popular: "badge-secondary", new: "badge-success text-white", "best seller": "badge-warning" };
const periodLabel = { monthly: "/Mo", yearly: "/Yr", "one-time": " one-time" };
export default function ProductCard({ product, added, onBuy }) {
  const { name, description, price, period, tag, tagType, features, icon } = product;
  return (
    <div className="card bg-base-100 border border-base-200 shadow-md h-full">
      <div className="card-body">
        <div className="flex items-start justify-between">
          <img src={icons[icon]} alt={name} className="w-12 h-12 p-2 rounded-xl bg-base-200" />
          <span className={`badge ${tagStyle[tagType] || "badge-neutral"}`}>{tag}</span>
        </div>
        <h3 className="card-title mt-2">{name}</h3>
        <p className="text-gray-500 text-sm">{description}</p>
        <p className="mt-2"><span className="text-3xl font-bold">${price}</span><span className="text-gray-500">{periodLabel[period]}</span></p>
        <ul className="space-y-1 text-sm text-gray-600 my-3 flex-1">
          {features.map((f) => <li key={f}><span className="text-success mr-2">✔</span>{f}</li>)}
        </ul>
        <button onClick={() => onBuy(product)} disabled={added} className={`btn rounded-full w-full ${added ? "btn-success text-white" : "btn-primary"}`}>
          {added ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}
