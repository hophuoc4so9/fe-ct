

import { Navbar } from "./layout/Navbar";
import ToDoList from "./btvn/7-2/Todolist";
import { Content } from "./layout";

function App() {
  return(
    <div className="bg-gradient-to-b from-white rose-100 to-rose-200">
       <Navbar/>
       <Content />
       <ToDoList />
    </div>
   
  )
}
export default App
