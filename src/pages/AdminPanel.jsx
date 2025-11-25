import { useState } from "react";
import { Link } from "react-router-dom"
export default function FinanceDashboard() {
  const [products, setProducts] = useState([
    { id: 1, name: "Premium Plan", users: 1200, revenue: 15000 },
    { id: 2, name: "Basic Plan", users: 3000, revenue: 9000 },
    { id: 3, name: "Enterprise Plan", users: 200, revenue: 20000 },
  ]);

  return (
   <section className="h-full">
      <div className="h-screen pt-44 bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6">ADMIN PANEL</h2>
          <nav className="space-y-4">
            <a href="#" className="block p-2 rounded hover:bg-gray-200">Dashboard</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-200">Products</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-200">Users</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-200">Transactions</a>
            <a href="#" className="block p-2 rounded hover:bg-gray-200">Settings</a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6"> Dashboard</h1>

          {/* Top stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">Total Revenue</p>
              <p className="text-2xl font-bold">$44,000</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">Active Users</p>
              <p className="text-2xl font-bold">4,400</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-500">Transactions</p>
              <p className="text-2xl font-bold">5,200</p>
            </div>
            <Link to='/admin/get-products'>
              <div className="bg-white p-6 rounded-lg shadow">
                <p className="text-gray-500">Get Product</p>
                <p className="text-2xl font-bold">200</p>
              </div>
            </Link>
            <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow">
              <Link to='/admin/addproduct'>
                <p className="text-3xl font-bold">Add Product </p>
              </Link>
            </div>
          </div>
        </main>
      </div>
   </section> 
  )
}
