import { Spin } from "antd";
import clsx from "clsx";
import React from "react";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLElement>{
    className?:string;
    loading?: boolean;
    diabled?:boolean;
    type?: "button" | "submit" | "reset";
}
export const AppButton = ({className,loading,children,diabled,type="button",onClick} : AppButtonProps) =>{
    return (
        <button className={clsx(
           diabled?"bg-slate-500": "",
         `${className} text-center rounded-full px-5`
        )
        }
            disabled={diabled }  //{ diabled ||loading}
            type={type}
            onClick={onClick}
        >
            
             {loading ? <Spin></Spin>:""}
            {children}
        </button>
    )
}