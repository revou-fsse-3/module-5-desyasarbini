import { Card } from '@/components'
import Layout from '@/layout';
import axios from 'axios';


export interface Props {
 pokeName : HasilPokeName[]
}

export interface HasilPokeName {
  name: string
}

export const getServerSideProps = async () => {
  const fetchPokeName = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
  const data: HasilPokeName[] = fetchPokeName.data.results

  return {
    props: {
      pokeName: data
    }
  }
}

const PokemonPage = ({pokeName}: Props) => {
  return (
    <Layout>
      <Card className="grid grid-cols-4 gap-4 m-5">
        {pokeName.map((poke, index) => (
          <Card key={index} className="border-2 border-gray-300 p-4 text-center">
            {poke.name}
          </Card>
        ))}
      </Card>
    </Layout>
  )
}

export default PokemonPage;