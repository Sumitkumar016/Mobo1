import '../App.css'
import { Star, ShoppingCart, Heart, Eye } from "lucide-react"
import clsx from 'clsx';
import Footer from '../component/home/footer';
import FilterProduct from '../component/filter';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { favouriteAction } from '../store/favourite';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../store/shop';
import { useAddToCart } from '../customHooks/cartHooks';
import { useAddToFav } from '../customHooks/favHooks';
// const products = [
// {
//     id: 1,
//     name: "iPhone 15 Pro Max Leather Case - Premium Quality",
//     price: 2999,
//     originalPrice: 3999,
//     rating: 4.8,
//     reviews: 124,
//     image: "/placeholder.svg?height=300&width=300&text=iPhone Case",
//     category: "Phone Cases",
//     brand: "Apple",
//     inStock: true,
//     description: "Premium leather case with MagSafe compatibility",
// },
// {
//     id: 2,
//     name: "Samsung Galaxy S24 Ultra Screen Protector",
//     price: 599,
//     originalPrice: 899,
//     rating: 4.6,
//     reviews: 89,
//     image: "/placeholder.svg?height=300&width=300&text=Screen Protector",
//     category: "Screen Guards",
//     brand: "Samsung",
//     inStock: true,
//     description: "Tempered glass with anti-fingerprint coating",
// },
// {
//     id: 3,
//     name: "OnePlus Warp Charge 65W Super Fast Charger",
//     price: 2499,
//     originalPrice: 2999,
//     rating: 4.7,
//     reviews: 156,
//     image: "/placeholder.svg?height=300&width=300&text=Fast Charger",
//     category: "Chargers",
//     brand: "Oneplus",
//     inStock: true,
//     description: "65W fast charging with Type-C cable",
// },
// {
//     id: 4,
//     name: "Sony WH-1000XM5 Wireless Headphones",
//     price: 24999,
//     originalPrice: 29999,
//     rating: 4.9,
//     reviews: 267,
//     image: "/placeholder.svg?height=300&width=300&text=Sony Headphones",
//     category: "Headphones",
//     brand: "Sony",
//     inStock: true,
//     description: "Industry-leading noise cancellation",
// },
// {
//     id: 5,
//     name: "Anker PowerCore 20000mAh Power Bank",
//     price: 3999,
//     originalPrice: 4999,
//     rating: 4.5,
//     reviews: 203,
//     image: "/placeholder.svg?height=300&width=300&text=Power Bank",
//     category: "Power Banks",
//     brand: "Anker",
//     inStock: true,
//     description: "High-capacity portable charger with fast charging",
// },
// {
//     id: 6,
//     name: "JBL Flip 6 Portable Bluetooth Speaker",
//     price: 8999,
//     originalPrice: 11999,
//     rating: 4.4,
//     reviews: 91,
//     image: "/placeholder.svg?height=300&width=300&text=JBL Speaker",
//     category: "Speakers",
//     brand: "JBL",
//     inStock: true,
//     description: "Waterproof portable speaker with powerful sound",
// },
// ]

const badges = [
      { text: "Best Seller", color: "bg-gradient-to-r from-green-500 to-green-600" },
      { text: "Hot Deal", color: "bg-gradient-to-r from-red-500 to-red-600" },
      { text: "Popular", color: "bg-gradient-to-r from-blue-500 to-blue-600" },
      { text: "Premium", color: "bg-gradient-to-r from-purple-500 to-purple-600" },
      { text: "Top Rated", color: "bg-gradient-to-r from-yellow-500 to-yellow-600" },
      { text: "New Arrival", color: "bg-gradient-to-r from-pink-500 to-pink-600" },
    ]

export function ProductCategories(){
    const { categories, brands, rating, price } = useSelector((state) => state.filters);
    const dispatch = useDispatch();
    const addToCart = useAddToCart();
    const addToFav = useAddToFav();
    const {products, loading, error, currentPage, totalPages } = useSelector(state=>state.shop);

    const [page, setPage] = useState(1);
    const limit = 20;

    useEffect(()=>{
        dispatch(fetchProducts({page, limit}));
    },[dispatch, page])

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const filteredProducts = products.filter(product=>{
        const matchCategory = categories.length === 0 || categories.includes(product.category);
        const matchBrand = brands.length === 0 || brands.includes(product.brand);
        const matchRating = rating === 0 || product.rating >= rating;
        const matchPrice = product.price <= price || price === 0;

        return matchCategory && matchBrand && matchRating && matchPrice;
    })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return <>
        <section className='pt-44 px-4 py-4 bg-gradient-to-br from-gray-50 to-blue-50'>
            <div className='flex flex-col md:flex-row '>
                {/* filter component */}
                <FilterProduct/>
                <div>
                    {/* heading component */}
                    <div className='flex items-center justify-between pt-4 md:pt-2.5 pb-8 px-1.5'>
                        <div>
                            <h2 className="text-md md:text-2xl font-bold text-slate-900">Mobile Accessories</h2>
                            <p className="text-sm text-slate-600">{filteredProducts.length} products found</p>
                        </div>
                        <div>
                            <select className='px-0 md:px-5 py-2 border rounded-md' name="Headingfilter" id="Headingfilter">
                                <option value="featured">Featured</option>
                                <option value="newest">Newest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-8 '>
                        {filteredProducts.length>0?(filteredProducts.map((product, index)=>{
                            const badge = badges[index % badges.length];
                            const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                            return(
                            <div key={product.id} className=' group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg hover:-translate-y-2 rounded-md'>
                            {/* image div */}
                            <div className='relative overflow-hidden'>
                                <Link to={`/product/${product.id}`}>
                                    <img className='w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500' src="/nothing.avif" alt="" />
                                </Link>
                                <div>
                                    <span className={`absolute top-4 left-4 text-xs border-0 rounded-lg text-white ${badge.color} px-3 py-1 font-semibold`}>{badge.text}</span>
                                </div>
                                <div>
                                    <span className={clsx("absolute top-4 right-4 text-xs border-0 rounded-xl text-white bg-red-500  px-3 py-1 font-semibold  hover:bg-gray-950")}>{discount}% OFF</span>
                                </div>

                                {/* action button */}
                                <div className='absolute opacity-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-100 transition-opacity duration-500'>
                                    <Link to={`/product/${product.id}`}>
                                        <button className='mr-2.5 outline-none rounded-md p-3  bg-white'>
                                            <Eye className="h-4 w-4" />
                                        </button>
                                    </Link>
                                    <button onClick={()=>{addToFav(product._id)}} className='p-3 outline-none rounded-md bg-white'>
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
                                        <span className="text-xs font-medium text-purple-600 border border-purple-200 py-0 px-2 rounded-lg">{product.brand}</span>
                                    </div>

                                    <h2 className="cursor-pointer font-bold text-lg text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
                                        {product.name}
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
                                        <span className=' text-sm text-gray-600 ml-2 font-medium'>{product.rating} ({product.reviews} reviews)</span>
                                    </div>
                                    

                                    <div className='flex items-center gap-2 mb-6'>
                                        <span className='text-2xl font-bold text-gray-900 group-hover:text-purple-600'>
                                            ₹{product.price} {" "}
                                        </span>
                                        <span className='text-lg text-gray-500 line-through group-hover:text-red-600'>
                                            ₹{product.originalPrice}
                                        </span>
                                    </div>
                                </div>
                                <button onClick={()=>{addToCart(product._id) }} className='flex items-center justify-center w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-2 text-lg rounded-lg'>
                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                            )
                        })):(<p className="text-gray-500 text-lg">No products found.</p>)}
                        
                    </div> 
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mt-8">
                <button
                    disabled={page === 1}
                    onClick={handlePrev}
                    className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                >
                    Prev
                </button>

                <span className="font-medium">
                    Page {currentPage} of {totalPages}
                </span>

                <button
                    disabled={page === totalPages}
                    onClick={handleNext}
                    className="px-4 py-2 rounded bg-gray-200 disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </section>
        <Footer/>
    </>
}

