import { getProviders } from 'next-auth/react'

import Login from '../components/googleSignin/login'
import { Button } from 'antd'
import { useState } from 'react'

import { ModalComponent } from '../components/Modal/Modal'

import styles from '../styles/Home.module.css'

interface HomeProps {
  providers: {
    id: string
    name: string
  }[]
}
const Home = ({ providers }: HomeProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <main>
        <h1 className='text-3xl font-bold underline'>WRAPP APP</h1>
        <div className={styles.modal}>
          <Button type='dashed' onClick={() => setOpen(true)}>
            Open Modal
          </Button>
        </div>
      </main>
      {open ? (
        <ModalComponent
          onClose={() => setOpen(false)}
          title='Modal'
          isVisible={open}
        ><h1>Hello</h1> </ModalComponent>
      ) : (
        ''
      )}
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
