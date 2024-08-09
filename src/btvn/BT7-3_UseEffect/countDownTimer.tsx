import { Button } from "antd";
import { useEffect, useState } from "react"


function countDownTimer() {
    const  [countDown,setCountDown] = useState(180);
    const  [toggle,setToggle] = useState(false);
    useEffect(
        ()=>{
            console.log('hihi')
          const interval =   setInterval(() => {
                setCountDown(preState=>preState-1)
              
            }, 1000);
            return () => clearInterval(interval);
        },[])
     return (
      
        <div>
        <Button onClick={()=> setToggle(!toggle)}>Toggle countDown </Button>
        {toggle && <p> {countDown} s</p> }
       
         

    </div>
     )
  }

export default countDownTimer

