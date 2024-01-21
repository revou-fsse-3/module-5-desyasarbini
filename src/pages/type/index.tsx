import { Card } from '@/components';
import Layout from '@/layout';
import axios from 'axios';

interface Props {
    pokeTypes : PokeTypeResult[],
}

interface PokeTypeResult {
    name: string;
}

export const getServerSideProps = async () => {
    const fetchType = await axios.get('https://pokeapi.co/api/v2/type')
    const data: PokeTypeResult[] = fetchType.data.results
    
    return {
        props: {
            pokeTypes: data
        }
    }
}

const typePokemonPage = ({pokeTypes}: Props) => {
    return (
        <Layout>
            <Card className="grid grid-cols-4 gap-4 m-5">
                {pokeTypes.map((pokeType, index) => (
                    <Card key={index} className="border-2 border-gray-300 p-4 text-center">
                        {pokeType.name}
                    </Card>
                ))}
            </Card>
        </Layout>
    )
}
export default typePokemonPage