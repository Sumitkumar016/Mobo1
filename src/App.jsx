import './App.css'
import Header from './component/home/header'
import Home from './pages/home'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import { CartSection } from './pages/cart';
import { ProductCategories } from './pages/Product_Section';
import { ShopCategories } from './pages/Category_Section';
import { User_Profile } from './pages/User_Profile';
import {UnderWorking} from './pages/UnderWorking';
import SingleProduct from './pages/SingleProduct';
import Contact from './pages/Contact';
import Brands from './pages/Brands';
import { FavouriteSection } from './pages/Favourite';
import Login from './pages/loginFrom';
import CreateAcc from './pages/createAccount';
import AddProduct from './pages/AdminAddProduct';
import AdminDashboard from './pages/AdminPanel';
import ProtectedRoute from './component/route/ProtectedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './store/auth'
import PublicRoute from './component/route/PublicRoute';
import { getCart } from './store/cart';
import { getFavItems } from './store/favourite';
import { AdminProducts } from './pages/adminProducts';
import EditProduct from './pages/AdminEditProduct';


function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getUser())
    dispatch(getCart())
    dispatch(getFavItems())
  },[dispatch])

  const isAuthenticated = useSelector((state)=>state.auth.isAuthenticated)
    
 return <div className='h-screen'>
    <BrowserRouter>
      <Header />
      
        <Routes>

          {/* public */}
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<ProductCategories/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/categories' element={<ShopCategories/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/brands' element={<Brands/>}/>
          <Route path='/login' element={<PublicRoute isAuthenticated={isAuthenticated}> <Login/> </PublicRoute>}/>
          <Route path='/createAcc' element={<CreateAcc/>}/>
          <Route path='/admin/adminpanel' element={ <AdminDashboard /> }/>
          <Route path='/admin/get-products' element={ <AdminProducts /> }/>
          <Route path='/admin/edit-product/:id' element={ <EditProduct /> }/>
          <Route path='*' element={<UnderWorking/>}/>

          {/* Protected */}   

          <Route path='/cart' element={<ProtectedRoute> <CartSection /> </ProtectedRoute>}/>
          <Route path='/profile' element={<ProtectedRoute> <User_Profile/> </ProtectedRoute>}/>
          <Route path='/favourite' element={<ProtectedRoute> <FavouriteSection/> </ProtectedRoute>}/>
          <Route path='/admin/addproduct' element={<ProtectedRoute> <AddProduct/> </ProtectedRoute>}/>
          {/* <Route path='/admin/adminpanel' element={<ProtectedRoute> <AdminDashboard /> </ProtectedRoute>}/> */}

        </Routes>
    </BrowserRouter>
 </div>
}

export default App
