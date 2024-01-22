import Link from "next/link"

const Navbar = () => {

    return (
        <nav className="lg:px-16 px-6 bg-red-950 shadow-md flex-start flex-wrap items-center lg:py-4 py-2">
            <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul className="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex  lg:pt-0">
                    <li className="py-2 lg:py-0 ">
                        <Link passHref href={'/pokemon'} className="text-amber-400 hover:pb-4 hover:border-b-4 hover:border-yellow-400">
                            {'Pokemon'}
                        </Link>
                    </li>
                    <li className="py-2 lg:py-0 ">
                        <Link passHref href={`/PokeCategory`} className="text-amber-400 hover:pb-4 hover:border-b-4 hover:border-yellow-400">
                            {'category'}
                        </Link>
                    </li>
                    <li className="py-2 lg:py-0 ">
                        <Link passHref href={`/search`} className="text-amber-400 hover:pb-4 hover:border-b-4 hover:border-yellow-400">
                            {'search'}
                        </Link>
                    </li>
                </ul>
            </nav>
            </div>
        </nav>
    )
}

export default Navbar