import useAuth from "shared/hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";


const PublicRoute = () => {
    const isUserLogin = useAuth()

    if(isUserLogin){
        return <Navigate to="/contacts"/>
    }
    return <Outlet/>
}

export default PublicRoute;