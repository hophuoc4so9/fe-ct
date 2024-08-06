import { useState } from "react";


 function toDoList() {
    const [jobs, setJobs] = useState<string[]>( () => 
    {
        const  jobStorage = localStorage.getItem('jobs') ? JSON.parse(localStorage.getItem('jobs')!) : [];
     
        return jobStorage || [];
    }
    );
  // const [jobs, setJobs] = useState<string[]>()
    const [job, setJob] = useState("");
    const handleSumit = () =>
        {
         
            setJobs(pre=>{
                const newjobs = [...(pre || []), job];
               const jsonjob=JSON.stringify(newjobs);
               localStorage.setItem('jobs',jsonjob);
               return newjobs
            })
        } 
    return(
     
        <div>
         
            <div>
                <input
                 value={job}
                  onChange={e => setJob(e.target.value)}
                ></input>
                <button onClick={handleSumit}>Add</button>
            </div>
            <div>
                <ul>
                    {
                    
                     jobs?.map((job,index)=>
                                <li key={index}>{job}</li>
                            )
                        
                    }
                </ul>
            </div>
        </div>
    )
  };

  export default toDoList