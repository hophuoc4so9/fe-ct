
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {LayoutApp} from "./common/layout/layoutApp";
import { HomePage } from "./pages/homePage/homePage";
import { RouterLink } from "./util/Routerlink";
import { LeadPage } from "./pages/Lead";
import { WalletPage } from "./pages/Wallet";
import { AuthProvider } from "./common/context/AuthContext";
import { Login } from "./pages/auth/login";
import { NoAuth } from "./pages/auth/NoAuth";
import PrivateRoute from "./common/context/PrivateRoute";
import { ROLE, RoleAll } from "./common/constan";


function App() {
    return (
      <div className="bg-gradient-to-b from-white rose-100 to-rose-200">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={RouterLink.Login} element={<Login />}/>
          <Route element={<LayoutApp />}>
            <Route path={RouterLink.Home} element={<HomePage />}/>

            <Route element={<PrivateRoute roles={RoleAll}/>}>
              <Route path={RouterLink.WALLET} element={<WalletPage />}/>
            </Route>
            
            <Route element={<PrivateRoute roles={[ROLE.ADMIN]}/>}>
              <Route path={RouterLink.Leaderboard} element={<LeadPage />}/>
            </Route>

          </Route>
          <Route path="*" element={<NoAuth />}/>
       </Routes>
      </AuthProvider>
    </BrowserRouter>
    </div>
    )
   
}
export default App
