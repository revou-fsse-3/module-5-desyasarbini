import { useMemo } from "react"

interface Props {
    status: boolean
}

const useStatus = ({status}: Props) => {
    return useMemo (
        () => {
            if(status) {
                return 'active'
            }
            return 'deactive'
        },
        [status]
    )
}

export default useStatus