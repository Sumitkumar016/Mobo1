import '../App.css';
import {Settings, ShoppingBag, LogOut} from "lucide-react"
import { usePostLogOutHook } from '../customHooks/authHooks';
import { useSelector } from 'react-redux';

export function User_Profile(){
    const isAuthenticated = useSelector(state=>state.auth.isAuthenticated)
    const logout = usePostLogOutHook();
    return <>
        <section className='h-full items-center flex justify-center md:px-60 '>
            <div className='relative h-96 w-11/12 md:h-1/2 md:w-10/12 border-2 border-gray-200 rounded-lg flex flex-col md:flex-row'>
                {/* left div */}
                <div className='mx-10 mt-5 md:my-10 flex flex-col items-center'>
                    <img className='w-20 h-20 md:w-56 md:h-56 rounded-full' src="/profile.png" alt="" />
                    <h2 className='mt-4 text-2xl md:text-3xl'>
                        Sumit Kumar
                    </h2>
                </div>
                {/* vertical line */}
                <div className='hidden md:flex ml-6 md:mt-6 border-r-2 border-gray-150 h-96'></div>
                {/* mid div */}
                <div className=''>
                    {/* info */}
                    <div className='pl-2 md:px-8 py-4 md:p-12 font-medium text-lg md:text-2xl'>
                        <h2 className='py-1.5 px-1 md:p-2'>Name :- Sumit Kumar</h2>
                        <h2 className='py-1.5 px-1 md:p-2'>Gender :- Male</h2>
                        <h2 className='py-1.5 px-1 md:p-2 '>E-mail :- <span className='text-base md:text-2xl'>sumitkumardevil143@gmail.com</span></h2>
                        <h2 className='py-1.5 px-1 md:p-2'>Phone :- 9102992342</h2>
                        <h2 className='py-1.5 px-1 md:p-2'>Address :- koat bazar sitamarhi, Bihar</h2>
                    </div>
                </div>
                {/* right div for laptop */}
                <div className='hidden md:flex flex-col items-end ml-auto'>
                    <Settings className='mt-4 mr-4 cursor-pointer hover:rotate-180 transition-transform duration-500 ease-in-out' size={32} strokeWidth={1.25} />
                    <ShoppingBag className='mt-4 mr-4 cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2' size={32} strokeWidth={1.25} />
                    <button className='mt-auto' onClick={logout}>
                        <p className=' mb-4 mr-2 font-medium text-blue-500 text-2xl p-2 cursor-pointer hover:underline'>Sign out</p>
                    </button>
                </div>

                {/* right div for mobile */}
                <div className='absolute right-0 md:hidden flex-col items-end ml-auto'>
                    <Settings className='mt-3 mr-2 cursor-pointer hover:rotate-180 transition-transform duration-500 ease-in-out' size={28} strokeWidth={1.25} />
                    <ShoppingBag className='mt-3.5 mr-2 cursor-pointer transform transition-transform duration-300 ease-in-out hover:-translate-y-2' size={28} strokeWidth={1.25} />
                    <button onClick={logout}>
                        <LogOut className={`mt-3.5 mr-2 cursor-pointer transform transition-transform duration-300 ease-in-out hover:translate-x-1 hover:text-blue-500 ${!isAuthenticated ? 'hidden' : ''}`} size={28} strokeWidth={1.25} />
                    </button>
                </div> 
            </div>
        </section>
    </>
}