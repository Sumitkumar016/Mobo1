import { useDispatch } from "react-redux";
import { postFavItem, postDeleteFavItem, getFavItems } from "../store/favourite"
 

export function useAddToFav(){
    const dispatch = useDispatch();

    const add = (productId)=>{
        dispatch(postFavItem({productId}))
        .then(()=>{
            dispatch(getFavItems())
        })
    }
    return add;
}
export function useDeleteToFav(){
    const dispatch = useDispatch();

    const remove = (productId)=>{
        dispatch(postDeleteFavItem({productId}))
    }
    return remove;
}