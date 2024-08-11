import clsx from "clsx";
import { AppButton } from "./AppButton";
import { useState } from "react";

export const ButtonTab = () => {
    const [active, setActive]=useState <boolean>(true)
    
    return (
        <div className="flex bg-red-200 rounded-[100px] p-0.5 h-fit">
            <AppButton
               className={clsx(
                active?"bg-red-500 text-white":  "bg-transparent border-none text-black",
                " h-[30px] px-3 py-1 text-sm font-medium")}
                    onClick={() => setActive(!active)}>
                    Mainnet
            </AppButton>

            <AppButton
                className={clsx(
                    !active?"bg-red-500 text-white":  "bg-transparent border-none text-black",
                    " h-[30px] px-3 py-1 text-sm font-medium")}
                    onClick={() => setActive(!active)}>
                    Testnet
            </AppButton>
        </div>
    )
}
