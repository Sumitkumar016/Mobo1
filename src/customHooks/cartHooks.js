import { useDispatch } from "react-redux";
import { getCart, postCart, postDeleteCart } from "../store/cart";

export function useAddToCart(){
    const dispatch = useDispatch();

    const add = (productId)=>{
        dispatch(postCart({productId}))
        .then(()=>{
            dispatch(getCart())
        })
    }
    return add;
}

export function useDeleteToCart(){
    const dispatch = useDispatch();

    const remove = (productId)=>{
        dispatch(postDeleteCart({productId}))
    }
    return remove;
}