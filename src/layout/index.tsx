import { Navbar } from "@/components"
import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Layout = ({children}: Props) => {
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    )
}

export default Layout