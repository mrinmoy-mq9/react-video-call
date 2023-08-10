import React, { useState, useCallback } from "react";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const [value, setVAlue] = useState();

    const navigate = useNavigate()
    const handleJoinRoom = useCallback(() => {navigate(`/room/${value}`);}, [navigate, value]);
    return (
    <div className="flex  h-screen justify-center items-center">
        <form className="flex flex-col justify-between">
        <h1 className="text-slate-500 text-2xl  text-center">WELCOME</h1>
        <br/>
        <input class=" mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"  
    
        value={value}
        onChange={(e) => setVAlue(e.target.value)} 
        type ="text" 
        placeholder="Enter Room Code" />
        
        <button onClick={handleJoinRoom} class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">join</button>
        </form>
    </div>
    )
};

export default HomePage;