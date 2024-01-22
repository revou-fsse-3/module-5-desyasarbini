import Link from "next/link"

interface Props {
    name: string
}

const PokemonCard = ({name}: Props) => {
    return(
        <Link 
            href={name}
            className="group rounded-lg border-2 border-gray-200 m-3 px-5 py-4 text-center transition-colors hover:border-gray-300 hover:bg-gray-100"
            key={name + 'card'}
        >
            <h2 className={`text-2xl- front-semibold`}>
                {name.charAt(0).toUpperCase()+name.slice(1)}
            </h2>
        </Link>
    )
}
export default PokemonCard