import { Link } from 'react-router-dom';
import '../../App.css'
import clsx from 'clsx';
import { Camera, Battery, Shield, Cable, Headphones, Smartphone, Speaker,  Watch} from 'lucide-react';

const categories = [
    {
      name: "Phone Cases",
      icon: Shield,
      count: "500+",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-200",
      href: "/categories/cases",
    },
    {
      name: "Chargers",
      icon: Cable,
      count: "300+",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-200",
      href: "/categories/chargers",
    },
    {
      name: "Headphones",
      icon: Headphones,
      count: "200+",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-200",
      href: "/categories/headphones",
    },
    {
      name: "Screen Guards",
      icon: Smartphone,
      count: "400+",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-200",
      href: "/categories/screen-guards",
    },
    {
      name: "Power Banks",
      icon: Battery,
      count: "150+",
      color: "from-red-400 to-red-600",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-200",
      href: "/categories/power-banks",
    },
    {
      name: "Camera Lens",
      icon: Camera,
      count: "100+",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-200",
      href: "/categories/camera",
    },
    {
      name: "Speakers",
      icon: Speaker,
      count: "80+",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      hoverColor: "hover:bg-pink-200",
      href: "/categories/speakers",
    },
    {
      name: "Smart Watch",
      icon: Watch,
      count: "120+",
      color: "from-teal-400 to-teal-600",
      bgColor: "bg-teal-50",
      hoverColor: "hover:bg-teal-200",
      href: "/categories/smartwatch",
    },
  ]


export function HomeShopCategories(){
    return <section className='px-4 py-20'>
        <div>
            <div className='text-center mb-16'>
                <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                    Shop by{" "}
                    <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                        Category
                    </span> 
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto'>Explore our comprehensive collection of mobile accessories and spare parts for all major brands</p>
            </div> 

            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6'>
                {categories.map((item)=>{
                    
                    return(
                      <Link key={item.name} to={item.href}>
                        <div className={clsx(`flex flex-col items-center justify-center text-center ${item.bgColor} rounded-lg p-8 cursor-pointer border-0 shadow-lg group hover:shadow-2xl ${item.hoverColor} transition-all duration-300 hover:-translate-y-2 `)}>
                            <div className={`p-4 text-white rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110  transition-transform duration-300`}>
                                <item.icon size={40}/>
                            </div>
                            <div>
                                <h3 className='font-bold text-sm md:text-xl text-gray-900 mb-2'>{item.name}</h3>
                                <p className='text-xs md:text-sm text-gray-700 font-medium'>{item.count} Products</p>
                            </div>
                        </div>
                      </Link>
                    )
                })}

            </div> 

        </div>
    </section>
}

