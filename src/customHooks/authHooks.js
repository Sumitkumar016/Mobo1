import { useDispatch, useSelector } from "react-redux";
import { getUser, postLogin, postLogout, postSignup } from "../store/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartActions, getCart } from "../store/cart";
import { favouriteAction, getFavItems } from "../store/favourite";

export function UseGetUserHook(){
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getUser())
    },[dispatch])
}

export function usePostLoginHook(){
    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

    const login =async (email, password)=>{
        await dispatch(postLogin({email, password}))
        dispatch(getCart())
        dispatch(getFavItems())
        
    }
    return { login, loading, error, isAuthenticated };
}

export function usePostLogOutHook(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logout = async ()=>{
        await dispatch(postLogout())
        dispatch(cartActions.clearCart());
        dispatch(favouriteAction.clearFav());
        navigate('/');
    } 
    return logout;
}

export function UsePostSignUpHook(){
    const dispatch = useDispatch();

    const signup = (name, email, password, phone)=>{
        dispatch(postSignup({name, email, password, phone}))
    }
    return signup;
}