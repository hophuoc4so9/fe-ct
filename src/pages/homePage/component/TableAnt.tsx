import { Button, Table } from "antd";
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
    const pageSize = 10; 
    const totalRows = user?.length;
  const totalPages = Math.ceil((totalRows===undefined? 0:totalRows / pageSize  ));

  const paginationConfig = {
    pageSize,
    total: totalRows,
    itemRender: (current, type, originalElement) => {
      if (type === 'prev') {
        return<Button className="ba">Previous</Button>;
      }
      if (type === 'next') {
        return<Button>Next</Button>;
      }
      if (type === 'page') {
        return (
          <a>
            Page {current} of {totalPages}
          </a>
        );
      }
      return originalElement;
    },
  };
    return (
        <div className="max-w-[1200px] mx-auto ">
           
            <Table dataSource={user} columns={columns} pagination={paginationConfig} />;
        </div>
    )
}