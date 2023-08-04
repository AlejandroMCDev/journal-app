import { Navigate, Outlet } from "react-router-dom";
import { ErrorPage } from "../../ErrorPage";
import { authRoutes } from "../auth/routes/AuthRoutes";
import { JournalPage } from "../journal/pages/JournalPage";
import { AuthRouter } from "./AuthRouter";
import { JournalRouter } from "./JournalRouter";

export const  getRoutes = [
    {
        path: "/auth",
        element: <AuthRouter/>,
        errorElement: <ErrorPage/>,
        children: authRoutes
    },
    {
        path: "/journal",
        element: <JournalRouter/>,    
        errorElement: <ErrorPage/>,
    },
    {
        path: "*",
        element: <Navigate to="/auth"/>,
    }

];