import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePostLoginHook } from "../customHooks/authHooks";
export default function Login() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from || "/";
  const { login, loading, error, isAuthenticated } = usePostLoginHook();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
  };

  // Redirect after successful login
  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath); // change to your desired route
    }
  }, [isAuthenticated, navigate, redirectPath]);


  return (
    <section className="pt-44 md:pt-48 pb-0 md:pb-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-2 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 rounded-xl border">
        
         {/* Error message */}
          {error && (
            <p className="text-red-600 font-medium bg-red-100 p-2 rounded">
              {error.message || "Something went wrong"}
            </p>
          )}


        <div className="text-center mt-3 mb-3 md:mb-5">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1.5 md:mb-3">
            Login
          </h2>
          <p className="text-gray-600 text-md md:text-lg">
            We’d love to hear from you!
          </p>
        </div>

        <div className="grid gap-10 bg-white p-5 md:p-8 rounded-xl shadow-lg mb-4">
          <form className="space-y-6" onSubmit={handleSubmit}>

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
                placeholder="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              <Send size={18} />
              {loading ? "Processing..." : "Submit"}
            </button>
          </form>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
                {/* <input type="checkbox" className="h-4 w-4 text-purple-600 border-gray-300 rounded" /> */}
                <Link to='/createAcc' className="text-lg text-purple-600 hover:underline">Create Account</Link>
            </label>
            <Link to="#" className="text-purple-600 hover:underline">Forgot password?</Link>
          </div>

        </div>
      </div>
    </section>
  );
}
