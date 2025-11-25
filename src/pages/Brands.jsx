import React from "react";
import { Apple, Smartphone, Laptop, Cpu, Camera, Watch } from "lucide-react";

export default function Brands() {
  const brands = [
    { id: 1, name: "Apple", icon: <Apple className="h-10 w-10 text-gray-800" /> },
    { id: 2, name: "Samsung", icon: <Smartphone className="h-10 w-10 text-blue-500" /> },
    { id: 3, name: "OnePlus", icon: <Smartphone className="h-10 w-10 text-red-600" /> },
    { id: 4, name: "Xiaomi", icon: <Smartphone className="h-10 w-10 text-orange-500" /> },
    { id: 5, name: "Realme", icon: <Smartphone className="h-10 w-10 text-yellow-500" /> },
    { id: 6, name: "Vivo", icon: <Smartphone className="h-10 w-10 text-blue-400" /> },
    { id: 7, name: "Oppo", icon: <Smartphone className="h-10 w-10 text-green-500" /> },
    { id: 8, name: "Google Pixel", icon: <Camera className="h-10 w-10 text-gray-700" /> },
    { id: 9, name: "Dell", icon: <Laptop className="h-10 w-10 text-gray-600" /> },
    { id: 10, name: "HP", icon: <Laptop className="h-10 w-10 text-blue-700" /> },
    { id: 11, name: "Lenovo", icon: <Laptop className="h-10 w-10 text-red-500" /> },
    { id: 12, name: "Asus", icon: <Cpu className="h-10 w-10 text-indigo-600" /> },
  ];

  return (
    <section className="py-16 pt-52 overflow-hidden bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Trusted by Top Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 w-40"
            >
              <div className="mb-3">{brand.icon}</div>
              <p className="font-semibold text-gray-700">{brand.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
