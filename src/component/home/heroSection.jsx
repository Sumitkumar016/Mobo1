import '../../App.css'
import { Star, ArrowRight, Shield, Truck, Headphones } from 'lucide-react';
import {Link} from 'react-router-dom'

export function HeroSection(){
    return(
        <section className='mt-32 px-1.5 md:px-3.5 relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to bg-indigo-100'>
            {/* Main Hero Section  */}
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-12 space-y-10 items-center px-4 pt-11 md:pt-20 pb-24'>

                {/* left section */}
                <div className=''>
                    
                    {/* Content section */}
                    <div>
                        <div className=' mb-2 inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full text-purple-700 font-medium text-sm'>
                            <Star className='fill-current' size={16} />
                            <h3>Trusted by 10,000+ Customers</h3>
                        </div>
                        <h1 className='mt-4 mb-4 text-5xl lg:text-7xl font-bold'>
                            <span className='text-gray-900'>Premium</span><br />
                            <span className='bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent'>Mobile Solutions</span>
                        </h1>
                        <p className='text-gray-500 text-xl lg:text-2xl leading-relaxed max-w-lg'>Discover authentic mobile accessories, genuine spare parts, and expert repair services. Quality
                        guaranteed with fast delivery.
                        </p>
                    </div>

                    {/* Button section */}
                    <div className='flex flex-col md-flex-row gap-5 mt-8 mb-4 '>
                        <Link to='/products' className='flex items-center justify-center px-12 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg text-white outline-none border-none rounded-md'>
                            <button className='flex items-center justify-center '>
                                Shop Now
                                <ArrowRight className="ml-2 " size={20}/>
                            </button>
                        </Link>
                        <Link to='*' className='flex items-center justify-center px-12 py-2 font-semibold bg-white hover:bg-gradient-to-r from-purple-100 to-blue-200 text-lg hover:text-purple-600 text-black outline-none border-1 border-gray-200 rounded-md'>
                            <button >
                                Repair Services
                            </button>
                        </Link>
                    </div>

                    {/* bottom content box */}
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 pt-8'>
                        <div className='flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-green-200 transition-all duration-300 ease-in cursor-pointer'>
                            <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-lg">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">100% Authentic</h3>
                                <p className="text-sm text-gray-600">Genuine products only</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-blue-200 transition-all duration-300 ease-in cursor-pointer'>
                            <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg">
                                <Truck className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Fast Delivery</h3>
                                <p className="text-sm text-gray-600">Same day in city</p>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-purple-200 transition-all duration-300 ease-in cursor-pointer'>
                            <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-lg">
                                <Headphones className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Expert Support</h3>
                                <p className="text-sm text-gray-600">24/7 assistance</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                <div className='relative rotate-3 hover:rotate-0 transition-all duration-500 '>
                    
                    {/* img */}
                    <div className='relative bg-white rounded-3xl shadow-2xl p-7'>
                        <img className='rounded-3xl ' src="/nothing.avif"  alt="nothing" />
                    </div>
                    
                    {/* upper box */}
                    <div className='absolute -top-6 -left-6 py-4 px-5  bg-gradient-to-r from-green-400 to-green-600 rounded-2xl text-white shadow-lg animate-bounce'>
                        <div className='text-center'>
                            <h3 className="text-2xl font-bold">5000+</h3>
                            <p className='text-sm'>Happy Customers</p>
                        </div>
                    </div>

                    {/* bottom box */}
                    <div className='absolute -bottom-6 -right-6 py-4 px-5   bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl text-white shadow-lg animate-pulse'>
                        <div className='text-center'>
                            <h3 className="text-2xl font-bold">99.5%</h3>
                            <p className='text-sm'>Satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
