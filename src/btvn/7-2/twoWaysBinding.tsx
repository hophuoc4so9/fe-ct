import { useState } from "react";
// random
// const gifts=[
//     "laptop",
//     "tv",
//     "phone",
// ];

// function TwoWaysBinding() {
//     const [gift, setgift] = useState("");
//     const random =() =>
//     {
//         const id=Math.floor(Math.random() * gifts.length);
//         setgift(gifts[id]);
//     }
//     return(
//         <div>
//             <h1>{gift|| "Chưa có phần thưởng"}</h1>
//             <button onClick={random}>lấy thưởng</button>
//         </div>
//     )
//   };

//   input 
//   function TwoWaysBinding() {
//     const [name, setName] = useState("Nguyen Van A");
    
//     return(
//         <div>
//             <input
//             value={name}
//             onChange={e => setName(e.target.value)}
//             >
            
//             </input>
//             <button onClick={()=> setName("Nguyen Van B")} >change</button>
//         </div>
//     )
//   };

// dang ky
//   function TwoWaysBinding() {
//     const [name, setName] = useState("Nguyen Van A");
//     const [email, setEmail] = useState("");
//     const handleSumit = () =>
//     {
//         console.log(
//             {
//                 name,
//                 email,
//             }

//         )
//     }
//     return(
//         <div>
//             <input
//             value={name}
//             onChange={e => setName(e.target.value)}
//             >
            
//             </input>
            
//             <br></br>
//             <input
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             >
            
//             </input>
//             <button onClick={handleSumit} >Register</button>
//         </div>

       
//     )
//   };


//   // radio
// const courses=
// [
//     "html",
//     "css",
//     "js"
// ]
//   function TwoWaysBinding() {
//     const [checked, setChecked] = useState<number[]>([]);
//     console.log(checked)
//     const handleChecked = (index: number) =>
//     {
       
//         setChecked(
//             prev =>
//                 {   
        
//                     const isChecked=checked.includes(index)
                   
//                 if(isChecked)
//                 {
                 
//                     return checked.filter(item => item !==index)
//                 }
//                 else
//                 return [...prev,index]
//                 }
//         )
           
            
        
//     }
//     return(
//         <div>
//             {
//                 courses.map((course, index)=>
//                     <div key={index}>
//                         <input type="radio"
//                          onClick={() => handleChecked(index)}
                         
//                          checked={checked.includes(index)}
//                          /> {course}
//                     </div>
//                 )
//             }
//         </div>

       
//     )
//   };


// checkbox
const courses=
[
    "html",
    "css",
    "js"
]
  function TwoWaysBinding() {
    const [checked, setChecked] = useState<number[]>([]);
    console.log(checked)
    const handleChecked = (index: number) =>
    {
       
        setChecked(
            prev =>
                {   
        
                    const isChecked=checked.includes(index)
                   
                if(isChecked)
                {
                 
                    return checked.filter(item => item !==index)
                }
                else
                return [...prev,index]
                }
        )
           
            
        
    }
    return(
        <div>
            {
                courses.map((course, index)=>
                    <div key={index}>
                        <input type="checkbox"
                         onClick={() => handleChecked(index)}
                         
                         checked={checked.includes(index)}
                         /> {course}
                    </div>
                )
            }
        </div>

       
    )
  };
  export default TwoWaysBinding