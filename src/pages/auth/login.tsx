import { ROLE } from "../../common/constan";
import { useAuth } from "../../common/context/AuthContext"
import { AppButton } from "../../compoment/button/AppButton";

export const Login = () =>{
    const { login} =useAuth();
    return(
    <>
    <AppButton
        onClick={() => {
            login(
              {address:"ph",
                name:"p", 
                role:ROLE.ADMIN,
             }  
            )
            }}
        >
        Login
    </AppButton>
    </>
)
}