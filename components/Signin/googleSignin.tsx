import { signIn } from 'next-auth/react'

import { SigninProps } from '@src/typings'

import { GoogleSvg } from '@public/Icons'
import { googleButton, continueWithGoogleBtn } from '@comp/Signin/styles'

const GoogleSignin = ({ providers }: SigninProps) => (
  <>
    {Object.values(providers).map(provider => (
      <div key={provider.id} className={continueWithGoogleBtn}>
        {provider.name === 'Google' && (
          <button
            type='button'
            data-mdb-ripple='true'
            data-mdb-ripple-color='light'
            onClick={() => signIn(provider.id)}
            className={googleButton}
          >
            Continue with {provider.name}
            <GoogleSvg />
          </button>
        )}
      </div>
    ))}
  </>
)

export default GoogleSignin
