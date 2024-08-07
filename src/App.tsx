

import { Navbar } from "./layout/Navbar";
import ToDoList from "./btvn/7-2/Todolist";
import { Content } from "./layout";
import ChangeTitle from "./btvn/BT7-3_UseEffect/changeTitle";
import CountDown from "./btvn/BT7-3_UseEffect/countDownTimer";
import ChangeAvatar from "./btvn/BT7-3_UseEffect/changeAvatar";
function App() {
  return(
    <div className="bg-gradient-to-b from-white rose-100 to-rose-200">
       <Navbar/>
       <Content />
       <ToDoList />
       <ChangeTitle />
       <CountDown />
       <ChangeAvatar />
    </div>
   
  )
}
export default App
