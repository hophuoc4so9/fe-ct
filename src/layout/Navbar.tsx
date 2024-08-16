import Logo  from "../assets/logo.svg";
import clsx from "clsx";
//import ChevronDown from "../assets/chevron-down.svg";
import { useEffect, useState } from "react";
import { siteMenu } from "../common/config/site";
import { ButtonTab } from "../compoment/button/ButtonTab";
import { RouterLink } from "../util/Routerlink";
import { useLocation, useNavigate } from "react-router-dom";
export const Navbar = ()=>
{
    const location=useLocation()
    const navigate= useNavigate()
    const [type,setType]=useState<string>(RouterLink.TAPOS); 
    useEffect(()=>{
        setType(location.pathname)
    },[])
    return(
     
        <div className=" h-98 max-w-[1200px] mx-auto py-[29px] items-center justify-between flex ">

            <img src={Logo}/>
            <div className="flex gap-8">
            {
                siteMenu.map((e)=>{
                    return <div
                    key={e.title}
                            onClick={() =>{
                                navigate(e.link)
                                setType(e.link)
                            } 
                                
                            }
                            className={clsx(
                                    type === e.link ? " text-neutral-500": "text-neutral-400",
                                "font-bold text-base cursor-pointer"
                                )
                                }
                    >
                        
                        {e.title} </div>
                })
            }
            </div>
            <ButtonTab />
            {/* <div className="max-w[1200px] m-x-auto my-4 flex items-center justify-between">
           
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
                <li className={`z-10 w-1/2 text-center rounded-2xl  cursor-pointer px-2 py-1 ${active ? 'text-white bg-rose-500 ' : 'text-black text-black '}`}
                onClick={()=>{setActive(!active)}} >Mainnet</li>   
                <li className={`z-10 w-1/2 text-center rounded-2xl  cursor-pointer px-2 py-1 ${!active ? 'text-white bg-rose-500 ' : 'text-black translate-x-0 '}`}
                onClick={()=>{setActive(!active)}} >Testnet</li>
                
            </ul>

            </div> */}
        
        </div>
    )
}