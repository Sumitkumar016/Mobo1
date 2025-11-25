import '../App.css'
import clsx from 'clsx';
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import { useSelector, useDispatch } from 'react-redux';
import { cartActions, getCart } from '../store/cart';
import { Link } from 'react-router-dom';
import { favouriteAction } from '../store/favourite';
import { useEffect } from 'react';
import { useDeleteToCart } from '../customHooks/cartHooks';
export function CartSection(){
    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();
    const deleteProduct = useDeleteToCart();
    useEffect(()=>{
        dispatch(getCart());
    },[dispatch])
    const addToFav = (product)=>{
        dispatch(favouriteAction.addToFav(product))
    }
    if (!products.length) {
        return <h2 className="text-center text-2xl pt-96">No products found in cart.</h2>;
    }
    return(
        <section className='pt-36 md:pt-44 px-4 pb-4'>
            <div className='flex flex-wrap gap-4 justify-center '>
                {products.map((item, index)=>{
                    console.log(item.product._id)
                    console.log(item.product.id)
                    console.log(item.product)
                    console.log(item._id)
                    return(
                    <div key={index} className='h-auto w-96 md:ml-4 mt-4 border-none rounded-lg group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg hover:-translate-y-2'>
                            {/* image div */}
                            <div className='relative overflow-hidden'>
                                <Link to={`/product/${item.product.id}`}>
                                    <img className='w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500' src="/nothing.avif" alt="" />
                                </Link>
                                <div>
                                    <span className={`absolute top-4 left-4 text-xs border-0 rounded-lg text-white px-3 py-1 font-semibold`}></span>
                                </div>
                                <div>
                                    <span className={clsx("absolute top-4 right-4 text-xs border-0 rounded-xl text-white bg-red-500  px-3 py-1 font-semibold  hover:bg-gray-950")}>50% OFF</span>
                                </div>

                                {/* action button */}
                                <div className='absolute opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-500'>
                                    <button className='mr-2.5 outline-none rounded-md p-3  bg-white'>
                                        <Link to={`/product/${item.product.id}`}>
                                            <Eye className="h-4 w-4" />
                                        </Link>
                                    </button>
                                    <button onClick={()=>{addToFav(item.product)}} className='p-3 outline-none rounded-md bg-white'>
                                        <Heart className={`h-4 w-4  `} />
                                    </button>
                                </div>
                            </div>


                            {/* content & button div */}
                            <div className='p-6'>
                                {/* content */}
                                <div className='mb-3'>

                                    {/* badge */}
                                    <div className='mb-3'>
                                        <span className="text-xs font-medium text-purple-600 border border-purple-200 py-0 px-2 rounded-lg">{item.product.brand}</span>
                                    </div>

                                    <h2 className="cursor-pointer font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                        {item.product.name}
                                    </h2>

                                    {/* reviews */}
                                    <div className='flex items-center mb-3'>
                                        <div className='flex items-center '>
                                            <Star className='text-yellow-400 fill-current' size={16}/>
                                            <Star className='text-yellow-400 fill-current' size={16}/>
                                            <Star className='text-yellow-400 fill-current' size={16}/>
                                            <Star className='text-yellow-400 fill-current' size={16}/>
                                            <Star className='text-gray-400' size={16}/>
                                        </div>
                                        <span className=' text-sm text-gray-600 ml-2 font-medium'>{item.product.rating} ({item.product.reviews} reviews)</span>
                                    </div>
                                    

                                    <div className='flex items-center gap-2 mb-6'>
                                        <span className='text-2xl font-bold text-gray-900 group-hover:text-purple-600'>
                                            ₹{item.product.price} {" "}

                                        </span>
                                        <span className='text-lg text-gray-500 line-through group-hover:text-red-600'>
                                            ₹{item.product.originalPrice}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex gap-3'>
                                    <button className='flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 text-lg rounded-lg'>
                                        <span>Buy</span>
                                    </button>
                                    <button onClick={()=>{deleteProduct(item.product._id)}} className='flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 text-lg rounded-lg'>
                                        <span>Delete</span>
                                    </button>
                                </div>
                            </div>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}