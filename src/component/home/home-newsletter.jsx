import '../../App.css'
import { Mail, Gift } from "lucide-react"

export default function HomeNewsletter() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-full">
              <Mail className="h-12 w-12 text-white" />
            </div>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Stay Updated with Latest Deals</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter and get exclusive discounts, new product alerts, and mobile tips delivered
            straight to your inbox.
          </p>

      
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter your email address"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 px-3 py-3 pr-16 rounded-md outline-none"
                required
              />
              <button type="submit" className="bg-white text-purple-600 hover:bg-blue-50 font-bold text-lg px-10 py-3 rounded-md outline-none">
                Subscribe Now
              </button>
            </form>
        

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-100">
            <div className="flex items-center">
              <Gift className="h-6 w-6 mr-2 text-yellow-300" />
              <span className="font-semibold">Get 15% off on your first order!</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-2 text-green-300" />
              <span className="font-semibold">Weekly exclusive deals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
