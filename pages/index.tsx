import { getProviders } from 'next-auth/react'
import Signin from '../components/Signin'
import { SigninProps } from '@src/typings'


const Home = ({ providers }: SigninProps) => <Signin providers={providers} />

export const getServerSideProps = async () => {
  const providers = await getProviders()

  return { props: {providers} }
}

export default Home
