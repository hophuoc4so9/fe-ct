import { useAuth } from "../../common/context/AuthContext";

export const WalletPage = () => {
    const {user} = useAuth();
    return(
        <>
        <div>
            address: { user?.address}
        </div>
        WalletPage
        </>
    )
}