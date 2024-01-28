import { ReactNode } from "react"

interface Props {
    className?: string
    children: ReactNode
    id?: string
}
const Text = ({className, children, id}: Props) => {
    return(
        <p className={className} id={id}>{children}</p>
    )
}
export default Text