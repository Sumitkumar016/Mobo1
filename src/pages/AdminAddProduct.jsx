import { Send } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { usePostAdminAddProduct } from "../customHooks/adminHooks";

export default function AddProduct() {
  const [name, setName] = useState();
  const [brand, setBrand] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [description, setDescription] = useState();
  const dispatch = useDispatch();
  const addProduct = usePostAdminAddProduct();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    dispatch(addProduct(name, brand, price, category, description));
    
  };

  return (
    <section className="pt-44 md:pt-48 pb-0 md:pb-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-2 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 rounded-xl border">
        
        <div className="text-center mt-0 mb-3 md:mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1.5 md:mb-3">
            Add Product
          </h2>
          <p className="text-gray-600 text-md md:text-lg">
            We’d love to hear from you!
          </p>
        </div>

        <div className="grid gap-10 bg-white p-5 md:p-8 rounded-xl shadow-lg mb-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-2">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="Product Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="brand" className="block text-sm font-medium text-gray-700 mb-2">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={brand}
                onChange={(e)=>setBrand(e.target.value)}
                placeholder="Brand"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <input
                 type="number"
                 id="price"
                 name="price"
                 min="0"
                 step="1"
                 value={price}
                 onChange={(e)=>setPrice(e.target.value)}
                 placeholder="0.00"
                 className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                 onWheel={(e) => e.target.blur()} // prevent scroll changing value
                 required
               />

            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={category}
                onChange={(e)=>setCategory(e.target.value)}
                placeholder="category"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Description
              </label>
              <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  placeholder="Enter product description..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                  required
              ></textarea>
            </div>


            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              <Send size={18} />
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
