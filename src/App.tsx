

import { Navbar } from "./layout/Navbar";

import { Content } from "./layout";
import { useEffect,useState } from "react";
//import { IUser } from "./type";
import { HomeAPI } from "./services/homeService";

import Search, { SearchProps } from "antd/es/input/Search";
import { notification } from "antd";
function App() {
  //const [user, setUser] = useState<IUser[]>([]);
  const [userInfo, setUserInfo] = useState<any>();
  const getUser = async (address: string) => {
        try {
        const rq = await HomeAPI.getUserById(address);
        if (rq?.success ) {
          setUserInfo(rq?.msg)
         
      } else {
          setUserInfo(undefined)
      }
        } catch (error)
        {
          console.log(error);
        }
};
  useEffect(() => {

  }, []);
  const create =  async (address: string) => {
          try {
          const rg = await HomeAPI.createUser({
          address: address,
          password: "1234156",
          });
          if(rg?.success)
          {
            notification.info({
              message: "success",
              })
              
            }else  {
                notification.warning({
                message: "error",
                })
            }
          }
         catch (error)
          {console.log(error);
          notification.error({
          message: "error",
          });
          }
    };
  const onSearch: SearchProps["onSearch"] = (value) => {getUser(value)};
  const onCreateUser: SearchProps["onSearch"] = (value) => {create(value)};
  return(
    <div className="bg-gradient-to-b from-white rose-100 to-rose-200">
       <Navbar/>
       <Content  content= {userInfo} />
      
      <p>== =================get user by Id=============</p>
      <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
        onSearch={onSearch}
    />
  
       {
        userInfo ? (  
          <>
            <p>address: {userInfo?.address}</p>
            <p>twitterUsername: {userInfo?.twitterUsername}</p>
          </>

        ):("")
       }
       <p>== =================Create user by Id=============</p>
      <Search
          placeholder="input search text"
          allowClear
          enterButton="Create"
          size="large"
        onSearch={onCreateUser}
    />
    </div>
   
  )
}
export default App
