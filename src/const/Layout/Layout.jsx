import { Outlet } from "react-router";
import { Header } from "../../componets/header/Header";

export const Layout = () => {
    return(
        <div className="bg-black">
            <Header/>
            <main className="pt-12">
                <Outlet/>
            </main>
        </div>
    )
}