import Logo  from "../assets/logo.svg";
import ChevronDown from "../assets/chevron-down.svg";
import { useState } from "react";
export const Navbar = ()=>
{
    const [active,setActive]=useState<boolean>(true);
    const [changeColor,setChangeColor]=useState<boolean[]>([false, false, false,false]);
    const handleClickHeader = (index: number) => {
        const newChangeColor = [false, false, false,false];
        console.log(newChangeColor)
        newChangeColor[index] = true;
        setChangeColor(newChangeColor);
  
    };
    return(
     
        <div className="bg-blue-200 h-98">
            <div className="mx-20 my-4 border-2 flex items-center justify-between">
            <img src={Logo}/>
            <ul className="flex space-x-8 text-gray-500">
                <li className={changeColor[0]?"text-black":"" }
                   onClick={()=>handleClickHeader(0)}
                >Tapos</li>   
                <li className={changeColor[1]?"text-black":""}
                      onClick={()=>handleClickHeader(1)}
                      >Wallet</li>
                <li className={changeColor[2]?"text-black":""}
                      onClick={()=>handleClickHeader(2)}
                       >Leaderboard</li>
                <li className={changeColor[3]?"text-black":""}
                      onClick={()=>handleClickHeader(3)}
                       >Shop</li>
                <li className="flex items-center text-orange-600 font-medium">More <img src={ChevronDown}></img> </li>
            </ul>
            
            <ul className="flex border-2 rounded-2xl border-amber-400 bg-rose-200 font-medium">
                <li className={ active?"bg-rose-500 rounded-2xl px-2 py-1 text-white" :"rounded-2xl px-2 py-1" } 
                onClick={()=>{setActive(!active)}} >Mainnet</li>   
                <li className={ !active?"bg-rose-500 rounded-2xl px-2 py-1 text-white" :"rounded-2xl px-2 py-1"} 
                onClick={()=>{setActive(!active)}} >Testnet</li>
                
            </ul>

            </div>
        
        </div>
    )
}