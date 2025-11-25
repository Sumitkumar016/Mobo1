import { useDispatch } from "react-redux";
import { getProducts, getProductsById, getEditProducts, postAddProduct, postDeleteProducts, postEditProducts, adminActions } from '../store/admin'
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


// export function useGetAdminProducts(){
//     const dispatch = useDispatch();
    
//     useEffect(()=>{
//         dispatch(getProducts())
//     },[dispatch])
// }

// export function useGetAdminProductsById(){
//     const dispatch = useDispatch();
    
//     useEffect(()=>{
//         dispatch(getProductsById())
//     },[dispatch])
// }
export function useGetEditProducts(){
    const { id } = useParams();
    const dispatch = useDispatch();
    console.log(id)
    useEffect(()=>{
        dispatch(getEditProducts(id))
    },[dispatch, id])
}

export function usePostAdminAddProduct(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addProduct = async (name, brand, price, category, description)=>{
        await dispatch(postAddProduct({name, brand, price, category, description}));
        navigate('/');
    }
    return addProduct;
}


export function usePostAdminEditProduct(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const editProduct =  (productId, name, brand, price, category, description)=>{
        dispatch(postEditProducts({ productId, name, brand, price, category, description }))
        
        dispatch(adminActions.clearSingleProduct());
        navigate('/');
        
    }
    return editProduct;
}

export function usePostAdminDeleteProduct(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const deleteProduct = async (productId)=>{
        await dispatch(postDeleteProducts({productId}))
        navigate('/');
    } 
    return deleteProduct;
}
