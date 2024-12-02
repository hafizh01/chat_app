import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom"

export default function SplasScreen(){

    const navigate = useNavigate()

    // to Login
    const toLogin = ()=>{
        navigate("/login")
    }

    useEffect(()=>{
        let user = localStorage.getItem("chat_app_user")
        if (user){
            return navigate("/chat")
        }
    },[])


    return(
        <main className="w-screen h-screen p-8 bg-gradient-to-t from-orange-700 to-orange-500 flex flex-col  ">
            <h1 className="text-[52px] text-white font-bold leading-10">
                Menata 
                Senja
            </h1>

            <p className="text-[16px] text-white font-semibold mt-4">
                Chat Apapun yang kamu mau
                ke orang orang yang sedang boring
                di seluruh dunia . . . . 
            </p>

            

            <button className="w-full text-white bg-black mt-auto rounded-lg z-[100]" 
                onClick={toLogin}
            >
                Login Now
            </button>
            
            <img src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=2" alt=""
            className="w-screen h-screen object-cover absolute opacity-25 top-0 left-0"
            />

        </main>
    )

}