import { Table } from "antd";
import { useEffect, useState } from "react";
import { IUser } from "../../../type";
import { HomeAPI } from "../../../services/homeService";

  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Address',
      dataIndex: 'address.zipcode',
      render: (_text: string, record: IUser) => record.address.zipcode,
      key: 'address',
    },
  ];
  
  


export const TableAnt = () => {
    const [user, setUser] = useState<IUser[] | undefined>([]);
    const getUser = async () => {
        try {
        const rq = await HomeAPI.getUser();
        if (rq?.status ) {
           
        const usersWithKeys = rq.data.map((user: IUser) => ({
            ...user,
            key: user.id, 
          }));
          setUser(usersWithKeys);
      } else {
        setUser(undefined)
      }
        } catch (error)
        {
          console.log(error);
        }
};
    useEffect( ()=>{
        getUser();
         
        
    } ,[]) 
   
    return (
        <div className="max-w-[1200px] mx-auto ">
           
            <Table dataSource={user} columns={columns} className="rounded-3xl"/>;
        </div>
    )
}