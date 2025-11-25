import '../../App.css'
import clsx from 'clsx'
import { Shield, Award, Truck, Headphones, RefreshCw, CreditCard } from "lucide-react"

const features = [
    {
      icon: Shield,
      title: "100% Authentic Products",
      description: "All products are genuine and come with manufacturer warranty",
      color: "from-green-400 to-green-600",
      hoverColor: "hover:bg-green-200",
    },
    {
      icon: Award,
      title: "Expert Quality Check",
      description: "Every product undergoes rigorous quality testing before dispatch",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:bg-blue-200",
    },
    {
      icon: Truck,
      title: "Lightning Fast Delivery",
      description: "Same day delivery within city, 2-3 days nationwide",
      color: "from-purple-400 to-purple-600",
      hoverColor: "hover:bg-purple-200",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Round-the-clock assistance for all your queries and concerns",
      color: "from-orange-400 to-orange-600",
      hoverColor: "hover:bg-orange-200",
    },
    {
      icon: RefreshCw,
      title: "Easy Returns & Exchange",
      description: "Hassle-free 7-day return policy with no questions asked",
      color: "from-red-400 to-red-600",
      hoverColor: "hover:bg-red-200",
    },
    {
      icon: CreditCard,
      title: "Secure Payment Options",
      description: "Multiple payment methods with bank-level security",
      color: "from-indigo-400 to-indigo-600",
      hoverColor: "hover:bg-indigo-200",
    },
]
export function WhyChooseUs(){
    return  <section className='px-4 py-20'>
        <div>
            <div className='text-center mx-auto mb-16'>
                <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                    Why Choose{" "}
                    <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>
                        RK Mobile Centre
                    </span> 
                </h2>
                <p className='text-xl text-gray-600 max-w-2xl mx-auto'>We're committed to providing the best mobile shopping experience with unmatched quality and service.</p>
            </div> 

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {features.map((item)=>{
                    
                    return(
                      
                        <div key={item.title} className={clsx(`flex flex-col items-start group p-8 rounded-2xl bg-gray-50 ${item.hoverColor} hover:shadow-2xl  transition-all duration-300 hover:-translate-y-1 `)}>
                            <div className={`p-4 text-white rounded-2xl bg-gradient-to-br ${item.color} mb-6 group-hover:scale-110  transition-transform duration-300`}>
                                <item.icon size={30}/>
                            </div>
                            
                            <h3 className='font-bold text-xl text-gray-900 mb-4'>{item.title}</h3>
                            <p className='text-gray-700 leading-relaxed'>{item.description}</p>
                            
                        </div>
                      
                    )
                })}

            </div> 

        </div>
    </section>
}