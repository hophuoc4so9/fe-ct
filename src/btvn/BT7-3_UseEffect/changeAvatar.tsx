
import { useEffect, useState } from "react"

interface FileWithPreview extends File {
    preview?: string;
}
function changeAvatar() {
    const [avatar,setAvatar] = useState<FileWithPreview>();
    useEffect(()=>
    {
        
            return ()=>
            {
             avatar &&   URL.revokeObjectURL(avatar?.preview || "")
            }
    },[avatar]

    )
    const handlePreviewAvatar = (e: React.ChangeEvent<HTMLInputElement>  )=>
        {
            const file = e.target.files?.[0];
           if (file) {
            const fileWithPreview: FileWithPreview = file as FileWithPreview;
            fileWithPreview.preview=URL.createObjectURL(file || "")
            setAvatar(file)
       //     console.log(file)
           }
        }

     return (
      
        <div>
        
         <input type="file" onChange={handlePreviewAvatar}/>
        {avatar && <img src={avatar.preview}/>}
    </div>
     )
  }

export default changeAvatar

