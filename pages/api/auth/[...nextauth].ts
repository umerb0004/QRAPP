import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import NextAuth, { NextAuthOptions } from 'next-auth/next'
import { PrismaClient } from '@prisma/client'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      type: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { form_email, form_password } = credentials as {
          form_email: string
          form_password: string
        }

        const prisma = new PrismaClient()
        const user = await prisma.users.findUnique({
          where: { email: form_email },
        })

        if (user?.email !== form_email || user?.password !== form_password) {
          throw new Error('Email or Password is not Correct')
        }
        
        return {
          id: user?.id,
          name: user?.first_name + ' ' + user?.last_name,
          email: user?.email,
        }
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
}

export default NextAuth(authOptions)
