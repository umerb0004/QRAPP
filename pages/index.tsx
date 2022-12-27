import { getProviders } from 'next-auth/react'

import Login from '../components/googleSignin/login'

interface HomeProps {
  providers: {
    id: string
    name: string
  }[]
}

const Home = ({ providers } : HomeProps) => {
  return (
    <>
      <Login providers={providers} />
    </>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default Home

