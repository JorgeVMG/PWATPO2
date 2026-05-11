import { ButtonNav } from "../Button/ButtonNav"
export const Header = () => {
    return (
        <nav className="fixed top-0 left-0 w-full h-12 bg-gray-900 text-white z-50 shadow-md">
            <div className="h-full flex items-center px-4">
                <ButtonNav text="Home" />
                <ButtonNav text="Product" />
                <ButtonNav text="Perfil" />
            </div>
        </nav>
    )
}