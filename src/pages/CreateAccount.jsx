import { Send } from "lucide-react";
import { useState } from "react";
import { postSignup } from "../store/auth";

export default function CreateAcc() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    postSignup(name, email, password, phone)
  }
  return (
    <section className="pt-44 md:pt-48 pb-0 md:pb-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-2 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 rounded-xl border">
        
        <div className="text-center mt-3 mb-3 md:mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1.5 md:mb-3">
            Create An Account
          </h2>
          <p className="text-gray-600 text-md md:text-lg">
            We’d love to hear from you!
          </p>
        </div>

        <div className="grid gap-10 bg-white p-5 md:p-8 rounded-xl shadow-lg mb-4">
          {/* Removed preventDefault — allow normal form submission */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"   
                value={name}
                onChange={(e)=>setName(e.target.value)}
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"   
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phoneNo"
                name="phone"   
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
                inputMode="numeric"
                placeholder="12345 67890"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
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
