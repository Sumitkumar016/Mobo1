import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Youtube, } from "lucide-react";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <section className="pt-44 md:pt-48 pb-0 md:pb-8 bg-gradient-to-br from-gray-50 to bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 bg-gradient-to-br from-purple-50 via-blue-50 to bg-indigo-100 rounded-xl border">
        {/* Heading */}
        <div className="text-center mt-3 mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1.5 md:mb-3">Contact Us</h2>
          <p className="text-gray-600 text-md md:text-lg">We’d love to hear from you! Fill out the form or reach us using the details below.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-5 md:p-8 rounded-xl shadow-lg mb-4">
          {/* Left Side - Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Doe"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                required
              />
            </div>
            {/* laptop feedback */}
            <div className="hidden md:block">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                required
              ></textarea>
            </div>

            {/* mobile feedback */}
            <div className="visible md:hidden">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows="3"
                placeholder="Write your message here..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>

          {/* Right Side - Contact Info */}
          <div className="flex flex-col justify-center space-y-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 pt-8 md:p-8 rounded-xl">
            <h3 className="text-2xl font-semibold md:mb-4">Get in Touch</h3>

            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6" />
              <p>123 Main Street, Bihar, India</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6" />
              <p>support@mobostore.com</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex space-x-4">
                <Link to="#" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Facebook className="h-5 w-5 text-white" />
                </Link>
                <Link to="#" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Twitter className="h-5 w-5 text-white" />
                </Link>
                <Link to="#" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Instagram className="h-5 w-5 text-white" />
                </Link>
                <Link to="#" className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    <Youtube className="h-5 w-5 text-white" />
                </Link>
            </div>


            <p className="mt-6 text-sm  md:text-base opacity-90">
              We're available Monday–Saturday, 9:00 AM to 9:00 PM.  
              Feel free to reach out anytime!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
