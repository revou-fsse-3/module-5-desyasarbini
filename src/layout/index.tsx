import { Navbar, PokemonCard } from "@/components"
import PokemonGrid from "@/components/PokemonGrid"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <div>
            <Navbar/>
            {/* <PokemonGrid/>
            <PokemonCard/> */}
            {children}
        </div>
    )
}

export default Layout