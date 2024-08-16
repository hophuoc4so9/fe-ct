import iconNext from "../assets/IconNext1.svg"
import { AppButton } from "../compoment/button/AppButton"
import { useEffect, useState } from "react"

interface CommonComponentProps {
    content: any;
}

export const Content: React.FC<CommonComponentProps> = ({ content })=>
{
    const [connectXAcc,setConnectXAcc]=useState<string>("Connect your X account")
    const [connectToX,setConnectToX]=useState<boolean>(false);
    
    useEffect(() => {
        if(content === undefined || content === null)
        {
            setConnectXAcc("Connect your X account")
        }
        else
        {
            setConnectXAcc(`@${content.twitterUsername}`)
        }
    }, [content]);
    return(
       
        <div className="mx-10 border-red-400 ">
           
            <div>
                <p className="text-4xl font-bold text-center"> Social Tasks</p>
                <p className="text-sm py-2 text-center">Complete the Social Tasks to earn extra $Heart token</p>
                <div className="border-2 rounded-2xl border-rose-200 bg-white">
                    <div className="py-10 pl-5">
                       <p className="text-2xl font-medium pb-10">Connect Your X account</p>
                        <div>
                            <p>You need connect your X account to join Social Task</p>
                            <a className="flex items-center text-blue-500"> Learn more 
                                <img className="pl-2" src={iconNext}></img> 
                             </a> 
                            <AppButton className="bg-orange-500 text-white font-medium"
                             loading={connectToX} 
                             onClick={()=>setConnectToX(!connectToX)} 
                             diabled={ !(content === undefined || content === null) }
                             >{connectXAcc}</AppButton>
                            
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}