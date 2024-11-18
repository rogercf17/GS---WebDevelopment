import { Outlet } from "react-router-dom"
import Header from "./Componentes/Header"
import Footer from "./Componentes/Footer"

export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}