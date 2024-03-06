import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import PublicLayout from "../comps/layouts/PublicLayout"
import Home from "../pages/Home"
import { AdminProtectedRoute, UserProtectedRoute, useProtectedRoutes } from "./ProtectedRoutes"
import AdminLayout from "../comps/layouts/AdminLayout"
import AdminDashboard from "../pagesAdmin/AdminDashboard"
import About from "../pages/About"
import Portfolio from "../pages/Portfolio"
import Contact from "../pages/Contact"
import Clients from "../pages/Clients"
import UserLayout from "../comps/layouts/UserLayout"
import UserDashboard from "../pagesUser/UserDashboard"
import EditWebsite from "../pagesAdmin/EditWebsite"


//-----------------PUBLIC ROUTES------------------------//
export const ROOT = "/"
export const ABOUT = "/about-us"
export const PORTFOLIO = "/portfolio"
export const CONTACT = "/contact"
export const CLIENTS = "/clients"

//-----------------PRIVATE User ROUTES------------------------//
export const PROTECTED = "/protected"
export const USER_DASHBOARD = "/protected/dashboard"

//----------------PRIVATE ADMIN ROUTES----------------------//
export const ADMIN = "/admin"
export const ADMIN_DASHBOARD = "/admin/dashboard"
export const EDIT_WEBSITE = "/admin/edit-website"



export const router = createBrowserRouter(
    createRoutesFromElements(

        <Route path={ROOT}>
            <Route element={<PublicLayout/>}>
                <Route index element={<Home/>}/>
                <Route path={ABOUT} element={<About/>}/>
                <Route path={PORTFOLIO} element={<Portfolio/>}/>
                <Route path={CONTACT} element={<Contact/>}/>
                <Route path={CLIENTS} element={<Clients/>}/>
            </Route>


            <Route path={ADMIN} element={<AdminProtectedRoute><AdminLayout/></AdminProtectedRoute>}>
                <Route path={ADMIN_DASHBOARD} element={<AdminDashboard/>}/>
                <Route path={EDIT_WEBSITE} element={<EditWebsite/>}/>
            </Route>


            <Route path={PROTECTED} element={<UserProtectedRoute><UserLayout/></UserProtectedRoute>}>
                <Route path={USER_DASHBOARD} element={<UserDashboard/>}/>
            </Route>
        </Route>
    )
)