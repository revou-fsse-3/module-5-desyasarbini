import {
    Dispatch,
    ReactNode,
    createContext,
    useState,
    useContext,
    SetStateAction,
} from "react";

interface Pokemon {
    name: string
    id: number
    height: number
    // weight: number
    // sprites: {
    //   front_default: string
    // };
}

interface Context {
    pokemon?: Pokemon
    setPokemon?: Dispatch<SetStateAction<Pokemon | undefined>>
}

const defaultValue: Context = {
    pokemon: undefined,
    setPokemon: undefined
}

interface Props {
    children: ReactNode
}

export const AppContext = createContext(defaultValue)

const AppProvider = ({children}: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon>()

    return(
        <AppContext.Provider value={{pokemon, setPokemon}}>
            {children}
        </AppContext.Provider>
    )
}

export const usePokemon = () => {
    const context = useContext(AppContext)
    if(!context) {
        throw new Error('usePokemon must be used within a AppProvider')
    }
    return context
}
export default AppProvider