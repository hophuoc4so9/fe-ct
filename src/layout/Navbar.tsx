import Logo  from "../assets/logo.svg";
import ChevronDown from "../assets/chevron-down.svg";
import { useState } from "react";
export const Navbar = ()=>
{
    const [active,setActive]=useState<boolean>(true);
    // const [changeColor,setChangeColor]=useState<boolean[]>([false, false, false,false]);
    // const handleClickHeader = (index: number) => {
    //     const newChangeColor = [false, false, false,false];
    //     console.log(newChangeColor)
    //     newChangeColor[index] = true;
    //     setChangeColor(newChangeColor);
  
    // };
    const [type,setType]=useState<string>("");
    console.log(type)
    return(
     
        <div className=" h-98">
            <div className="mx-20 my-4 flex items-center justify-between">
            <img src={Logo}/>
            <ul className="flex space-x-8 text-gray-500">
                <li className={type==="Tapos" ?"text-black":"" }
                   onClick={()=>{  setType("Tapos"); }}
                key="Tapos"
                >Tapos</li>   
                <li className={type==="Wallet"?"text-black":""}
                      onClick={()=>setType("Wallet")}
                    key="Wallet"
                    >Wallet</li>
                <li className={type==="Leaderboard"?"text-black":""}
                      onClick={()=>setType("Leaderboard")}
                        key="Leaderboard"
                       >Leaderboard</li>
                <li className={type==="Shop"?"text-black":""}
                      onClick={()=>setType("Shop")}
                      key="Shop"
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