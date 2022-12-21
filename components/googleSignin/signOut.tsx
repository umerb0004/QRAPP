import { signOut } from 'next-auth/react'

interface SignoutProps {
  session:
    | {
        user?: userProps
        expires?: string | undefined | null
      }
    | undefined
    | null
}

type userProps =
  | {
      name?: string | undefined | null
      email?: string | undefined | null
      image?: string | undefined | null
    }
  | undefined
  | null

const Signout : React.FC<SignoutProps> = ({ session } : SignoutProps) => {
  return <>
    <div className='flex-col text-4xl text-center my-32'>
      <p>Welcome, {session?.user?.name}!!!</p>
      <button
        className='bg-blue-500 rounded-lg py-2 px-5 my-5'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  </>
}

export default Signout
