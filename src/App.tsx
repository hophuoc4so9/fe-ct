

import { Navbar } from "./layout/Navbar";

import { Content } from "./layout";

function App() {
  return(
    <div className="bg-gradient-to-b from-white rose-100 to-rose-200">
       <Navbar/>
       <Content />
       {/* <ToDoList />
       <ChangeTitle />
       <CountDown />
       <ChangeAvatar /> */}
    </div>
   
  )
}
export default App
