import { NavLink } from "react-router-dom"

const Header = () => {
    return(
        <header className="
            bg-corPrincipal 
            w-full h-28
            flex items-center
            justify-between
        ">
            <img src="/logo.png" alt="Logo do site" className="w-40 object-cover -rotate-2" />
            <nav className="mr-5">
                <ul className="
                    flex gap-5
                ">
                    <li>
                        <NavLink to='/' className="text-white opacity-80 hover:opacity-50 font-bold text-base">
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/educativo' className="text-white opacity-80 hover:opacity-50 font-bold text-base">
                            Educativo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sobre' className="text-white opacity-80 hover:opacity-50 font-bold text-base">
                            Sobre
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
