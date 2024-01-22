import { CSSProperties, ReactNode } from "react"
import styled from "styled-components"

interface Props {
    children: ReactNode
    display?: CSSProperties['display']
    className?: string
    direction?: CSSProperties['flexDirection']
}

const BaseCard = styled.div<Props>`
    display: ${(props) => props.display}
    flex-direction: ${(props) => props.direction}
`

// default displaynya flex
const Card = ({ children, display ='flex', className}: Props) => {
    
    return (
        <BaseCard display={display} className={className}>
            {children}
        </BaseCard>
    )
}
export default Card