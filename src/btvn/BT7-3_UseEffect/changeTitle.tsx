import { Button, Steps } from "antd";
import { useEffect, useState } from "react"
interface Post {
    userId: number;
    id: number;
    title: string;
    name: string;
    body: string;
}
const tabs=['posts','comments','albums']
function changeTitle() {
    const  [width,setWidth] = useState(window.innerWidth);
    const  [toggle,setToggle] = useState(false);
    const  [showGoToTop,setShowGoToTop] = useState(false);
    const  [title,setTitle] = useState("");
    const  [posts,setPosts] = useState<Post[]>([]);
    const  [type,setType] = useState('posts');
    useEffect(() => {
        document.title = title;
     
    });
    useEffect(() => {
       
        fetch(`https://jsonplaceholder.typicode.com/${type}`).then(res=>res.json()).then(posts =>{
            setPosts(posts)
        })
    },[type]);
    
    useEffect(() => {
        const handleScroll=()=>
        {
            if(window.scrollY>=200)
            {
                setShowGoToTop(true)
            
            }
            else
            {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[]);

    useEffect(() => {
        const handleResize=()=>
        {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)

        return ()=>{
            window.removeEventListener('resize',handleResize)
        }
    },[]);

     return (
      
        <div>
        <Button onClick={()=> setToggle(!toggle)}>Toggle </Button>
        {toggle && <p> chiều rộng : {width} px</p> }
        {toggle && <input onChange={e=> setTitle(e.target.value)} />} 
        
    <br></br>
        {toggle&&
             tabs.map(tab =>
                (
                    <Button key={tab} onClick={()=>setType(type)}
                    className={type==tab? "bg-amber-400" : ""}
                    onClickCapture={()=>setType(tab)}
                    > {tab}</Button>
                )
                )

                    
                
                
        }   
         {  toggle&&
                <ul className="list-disc">{posts?.map(post =>(
                    <li key={post.id} className="list-disc">
                        {post.title || post.name} 
                    </li>
                    ))
                }
                </ul>

         }  
         
            {   showGoToTop && <Button className="fixed right-10 bottom-10">Go to Top</Button>

            }  
           
         

    </div>
     )
  }

export default changeTitle

