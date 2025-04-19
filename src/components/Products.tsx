// components/Products.tsx
import React, { useState } from 'react';

type Product = {
  name: string;
  price: number;
  img: string;
};

const items: Product[] = [
  { name: 'Blú Shallow Bowl', price: 2500, img: '...' },
  { name: 'Blú Deep Bowl', price: 2700, img: '...' },
  { name: 'Blú Dinner Plate', price: 3500, img: '...' },
  { name: 'Blú Spoon', price: 1200, img: '...' },
];

export default function Products(): JSX.Element {
  const [selected, setSelected] = useState<Product>(items[0]);

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-semibold text-blue-500 mb-6">Products</h2>
      <div className="flex flex-wrap lg:flex-nowrap gap-8">
        <div className="flex flex-col gap-4 w-full lg:w-1/3">
          {items.map((item) => (
            <button key={item.name} onClick={() => setSelected(item)} className="text-left">
              <div className="flex items-center gap-3 p-2 hover:bg-blue-50 rounded">
                <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                <span>{item.name}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="w-full lg:w-2/3">
          <div className="bg-blue-50 p-6 rounded-xl">
            <div className="w-full h-64 bg-white mb-4 rounded shadow"></div>
            <h3 className="text-xl font-semibold mb-2">{selected.name}</h3>
            <p className="text-gray-700 mb-2">${selected.price}</p>
            <p className="text-sm text-gray-500 mb-4">
              Hand-painted porcelain bowl. Suitable for hot and cold dishes.
            </p>
            <div className="flex gap-4 items-center">
              <label>Colors</label>
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <label>Quantity</label>
              <input type="number" defaultValue={1} className="w-16 p-1 border rounded" />
            </div>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full">Buy</button>
          </div>
        </div>
      </div>
    </section>
  );
}
