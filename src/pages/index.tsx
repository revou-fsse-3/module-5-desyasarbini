import Layout from '@/layout'
import { NextPageWithLayout } from './_app'
import Head from 'next/head'
import { Card } from '@/components'

const HomePage : NextPageWithLayout = () => {
  return (

    <>
      <Head>
        <title>{'halaman index'}</title>
      </Head>
      <Card>
        {'ini adalah content index'}
      </Card>
    </>

  )
}

HomePage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}

export default HomePage
// localhost:3000/
// export default function Home() {
//   return (
//     <div>

//     </div>
//   )
// }
