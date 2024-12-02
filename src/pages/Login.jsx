import React, {useContext, useEffect} from "react";
import {AvatarContext} from "../context/AvatarContextProvider"
import {useNavigate} from "react-router-dom"



export default function Login(){

    const {avatar,setAvatar} = useContext(AvatarContext)
    const navigate = useNavigate()
   
    
    // CLC
    useEffect(()=>{
        let user = localStorage.getItem("chat_app_user")
        if(user){
            return navigate("/chat")
        }
    },[])


    // ganti avatar sesuai date 
    const handleAvatar = ()=>{
        setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`)
    }

    // handle form
    const handleLogin = (e)=>{
        e.preventDefault()
        let username = e.target.username.value

        localStorage.setItem("chat_app_user", JSON.stringify({
            id : Date.now(),
            username : username,
            avatar : avatar
        }))

        window.location.href = "./chat"

    }

    return(
        <main className="w-screen h-screen p-8 bg-gradient-to-t from-orange-700 to-orange-500 flex flex-col  ">
            <form className="w-full flex flex-col bg-white shadow-lg rounded-lg p-6 z-[100] gap-4" onSubmit={handleLogin}>
                <div className="relative  w-28 mx-auto">
                    <img src={avatar} alt="avatar" 
                    className="w-28 h-28 mx-auto" />
                    <button className="w-10 h-10 bg-green-600 text-white rounded-full absolute -right-3 top-16" type="button"
                        onClick={handleAvatar}
                    >
                        ?
                    </button>
                </div>
                    
                <div className="fflex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required className="w-full h-12 px-3 border-[1px] border-gray-400 rounded-lg"/>
                </div>    

                <button className="w-full h-12 bg-black text-white rounded-lg" type="submit">
                    Login
                </button>
                


            </form>



            <img src="https://images.pexels.com/photos/3184435/pexels-photo-3184435.jpeg?auto=compress&cs=tinysrgb&w=500&h=750&dpr=2" alt=""
            className="w-screen h-screen object-cover absolute opacity-25 top-0 left-0"
            />

        </main>
    )

}