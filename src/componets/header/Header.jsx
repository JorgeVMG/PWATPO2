import { ButtonNav } from "../Button/ButtonNav"
import { Link,useNavigate } from "react-router-dom"
export const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className="fixed top-0 left-0 w-full h-12 bg-gray-900 text-white z-50 shadow-md">
            <div className="h-full flex items-center px-4">
                <Link to="/">
                    <ButtonNav text="Home"/>
                </Link>
                <Link to="/">
                    <ButtonNav text="Product"/>
                </Link>
                <Link to="/">
                    <ButtonNav text="Perfil"/>
                </Link>
            </div>
        </nav>
    )
}