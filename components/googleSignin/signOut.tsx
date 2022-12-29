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

const Signout = ({ session } : SignoutProps) => {
  return (
    <>
      <div className='flex text-center mt-4 ml-5'>
        <p>{session?.user?.name}</p>
        <button
          className='bg-red-500 text-white rounded-full px-1 ml-1'
          onClick={() => signOut()}
        >
          SignOut
        </button>
      </div>
    </>
  )
}

export default Signout
