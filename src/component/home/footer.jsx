import {Link} from "react-router-dom"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react"
// import MoboLoader from '../Loader'

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Shipping Info", href: "/shipping" },
    { name: "Returns & Refunds", href: "/returns" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ]

  const categories = [
    { name: "Phone Cases", href: "/categories/cases" },
    { name: "Chargers & Cables", href: "/categories/chargers" },
    { name: "Headphones & Earbuds", href: "/categories/headphones" },
    { name: "Screen Protectors", href: "/categories/screen-guards" },
    { name: "Power Banks", href: "/categories/power-banks" },
    { name: "Repair Services", href: "/services" },
  ]

  const brands = [
    "Apple",
    "Samsung",
    "OnePlus",
    "Xiaomi",
    "Realme",
    "Vivo",
    "Oppo",
    "Google",
    "Nothing",
    "Motorola",
    "Sony",
    "Anker",
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white p-3 rounded-xl">
                  <span className="font-bold text-xl">RK</span>
                </div>
                <div>
                  <h3 className="font-bold text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    RK Mobile Centre
                  </h3>
                  <p className="text-sm text-gray-400">Premium Mobile Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for authentic mobile accessories, genuine spare parts, and expert repair services.
                Quality guaranteed with professional support.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">+91 98765 43210</p>
                  <p className="text-sm text-gray-400">24/7 Support Available</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-green-600 p-2 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">info@RKmobile.com</p>
                  <p className="text-sm text-gray-400">Quick Response Guaranteed</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-purple-600 p-2 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">123 Mobile Street, Tech City</p>
                  <p className="text-sm text-gray-400">Visit Our Store</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">Mon - Sat: 9AM - 9PM</p>
                  <p className="text-sm text-gray-400">Sunday: 10AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Categories</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 transform duration-200 inline-block"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brands & Social */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Popular Brands</h4>
            <div className="grid grid-cols-2 gap-2 mb-8">
              {brands.map((brand) => (
                <Link
                  key={brand}
                  to={`/brands/${brand.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors text-sm py-1"
                >
                  {brand}
                </Link>
              ))}
            </div>

            <div>
              <h5 className="font-bold text-lg mb-4 text-white">Follow Us</h5>
              <div className="flex space-x-4">
                <Link to="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link to="#" className="bg-sky-500 p-3 rounded-lg hover:bg-sky-600 transition-colors">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link to="#" className="bg-pink-600 p-3 rounded-lg hover:bg-pink-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link to="#" className="bg-red-600 p-3 rounded-lg hover:bg-red-700 transition-colors">
                  <Youtube className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-gray-400 text-center lg:text-left">
              © 2024 RK Mobile Centre. All rights reserved. | Designed with ❤️ for mobile enthusiasts
            </p>
            <div className="flex space-x-6 mt-4 lg:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <MoboLoader/> */}
    </footer>
  )
}
