import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux";


export const AuthRouter = () => {

    const { status } = useSelector( state => state.auth );

    if (status === 'authenticated') {
        return <Navigate to='/journal'/>
    }

    return <Outlet/>
}
