import '@/styles/globals.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement, ReactNode } from 'react'

// tipe TS yg akan mengambil tipe dari next
// buat object baru getLayout jika butuh Layout
// nextPage di ambil lalu di masukkan object baru getLayout
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

// untuk menggabungkan layout dari next
export type AppPropsPageWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsPageWithLayout) {
  
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <Head>
          <title>{'Pokemon Project'}</title>
      </Head>
      {getLayout(<Component {...pageProps}/>)}
    </>
  )
}
