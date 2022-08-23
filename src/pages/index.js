import Head from 'next/head'
import React from 'react'
import { Company, Header, Help, News, Trafick,Document, Partner } from '../components'
function IndexPage() {
 
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>
      <Trafick/>
      <Help/>
      <Company/>
      <News/>
      <Document/>
      <Partner/>
    </div>
  )
}
export default IndexPage

