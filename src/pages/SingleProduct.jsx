import '../App.css'
import { Star , Heart} from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { cartActions } from '../store/cart';
import { useEffect } from 'react';
import { fetchProductsById } from '../store/shop';

export default function SingleProduct(){
    const { id } = useParams();
    
    const dispatch = useDispatch();
    const addToCart = (product)=>{
        dispatch(cartActions.addToCart(product));
    }
    useEffect(()=>{
        if(id){
            dispatch(fetchProductsById(id));
        }
    },[dispatch, id])
    const product = useSelector(state=>state.shop.singleProduct)
    if (!product) {
        return <h2 className="pt-96 text-center text-2xl">Product not found.</h2>;
    }
    return(
        <section>
            <div className='group flex flex-col md:flex-row px-8 pt-36 md:p-0 pb-0 md:pt-52'>
                {/* left side */}
                <div className='md:h-1/3 md:w-1/3 py-8 pb-0 md:ml-28'>
                    <img className='object-cover rounded-lg hover:scale-105 transition-transform duration-500' src="/nothing.avif" alt="" />
                </div>
                
                {/* right side */}
                <div className='group py-4 md:p-6 md:ml-6 relative md:mt-3'>
                    {/* content */}
                    <div className='mb-3'>

                        {/* badge */}
                        <div className='mb-1 md:mb-6'>
                            <span className="text-xs md:text-sm font-medium text-purple-600 border border-purple-200 py-0.5 px-2 rounded-lg">{product.brand}</span>
                        </div>

                        <h2 className="cursor-pointer font-medium text-xl md:text-3xl text-gray-900 mb-1 md:mb-5 line-clamp-2 group-hover:text-purple-600 transition-colors">
                            {product.name}
                        </h2>

                        {/* reviews laptop */}
                        <div className='hidden md:flex items-center md:mb-6'>
                            <div className='flex items-center '>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-yellow-400 fill-current' size={28}/>
                                <Star className='text-gray-400' size={28}/>
                            </div>
                            <span className='text-2xl text-gray-600 ml-2 font-medium'>{product.rating} ({product.reviews} reviews)</span>
                        </div>

                        {/* reviews mobile */}
                        <div className='flex md:hidden items-center mb-1.5 md:mb-6'>
                            <div className='flex items-center '>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-yellow-400 fill-current' size={16}/>
                                <Star className='text-gray-400' size={16}/>
                            </div>
                            <span className='text-sm md:text-xl text-gray-600 ml-2 font-medium'>{product.rating} ({product.reviews} reviews)</span>
                        </div>
                        

                        <div className='flex items-center gap-2 mb-5 md:mb-6'>
                            <span className='text-2xl md:text-3xl font-semibold text-gray-900 group-hover:text-purple-600'>
                                ₹{product.price} {" "}
                            </span>
                            <span className='text-xl md:text-2xl text-gray-500 line-through group-hover:text-red-600'>
                                ₹{product.originalPrice}
                            </span>
                        </div>
                        {/* laptop */}
                        <div className='hidden absolute bottom-4 md:flex gap-3'>
                            <button onClick={()=>{addToCart(product)}} className='px-20 py-3 text-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold text-white rounded-lg'>Add to Cart</button>
                            <button className='px-24 py-3 text-2xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold text-white rounded-lg'>Buy Now</button>
                        </div>
                        {/* mobile */}
                        <div className='flex flex-col md:hidden gap-3'>
                            <button onClick={()=>{addToCart(product)}} className='px-8 py-2 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-medium text-white rounded-lg'>Add to Cart</button>
                            <button className='px-8 py-2 text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-medium text-white rounded-lg'>Buy Now</button>
                        </div>
                    </div>
                </div>
                 
            </div>
        </section>
    )
}