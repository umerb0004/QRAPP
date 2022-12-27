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
      <div className='flex-col text-center mt-4'>
        <p>Welcome, {session?.user?.name}</p>
        <button
          className='bg-red-500 text-white rounded-full px-2'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </div>
    </>
  )
}

export default Signout
