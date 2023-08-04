import { Navigate, Outlet } from "react-router-dom"
import { JournalPage } from "../journal/pages/JournalPage"

import { useSelector } from "react-redux";


export const JournalRouter = () => {

    const { status } = useSelector( state => state.auth );

    if (status === 'not-authenticated') {
        return <Navigate to='/auth/login'/>
    }

    return <JournalPage/>
}