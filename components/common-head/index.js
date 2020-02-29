import Head from 'next/head'

const CommonHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>
)

export default CommonHead