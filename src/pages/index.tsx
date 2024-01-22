import Layout from '@/layout'
import { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { Card, PokemonCard, PokemonGrid } from '@/components'
import Pokemon from './pokemon'

const HomePage : NextPageWithLayout = () => {
  return (

    <>
      <Head>
        <title>{'halaman index'}</title>
      </Head>
      <Card>
        {'silahkan klik menu navbar'}
      </Card>
    </>

  )
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default HomePage