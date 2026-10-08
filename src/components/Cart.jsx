import { icons } from "../icons";
export default function Cart({ items, onRemove, onCheckout }) {
  const total = items.reduce((s, i) => s + i.price, 0);
  if (!items.length)
    return <div className="text-center py-16 text-gray-500"><p className="text-xl font-semibold">Your cart is empty</p><p className="mt-1">Add a product to get started.</p></div>;
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-4">
        {items.map((i) => (
          <div key={i.id} className="flex items-center gap-4 p-4 rounded-xl bg-base-200">
            <img src={icons[i.icon]} alt="" className="w-12 h-12 p-2 rounded-xl bg-base-100" />
            <div className="flex-1"><p className="font-semibold">{i.name}</p><p className="text-gray-500">${i.price}</p></div>
            <button onClick={() => onRemove(i)} className="btn btn-sm btn-ghost text-error">Remove</button>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-xl font-bold mt-6 px-2"><span>Total:</span><span>${total}</span></div>
      <button onClick={onCheckout} className="btn btn-primary rounded-full w-full mt-4">Proceed to Checkout</button>
    </div>
  );
}
