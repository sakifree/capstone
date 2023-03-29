import NextAuth from "next-auth"
import Auth0Provider from "next-auth/providers/auth0"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Auth0Provider({
        clientId: process.env.AUTH_CLIENT_ID,
        clientSecret: process.env.AUTH0_CLIENT.SECRET,
        issuer: process.env.AUTH0_ISSUER
    }),
  ],
  callbacks: {
    async jwt({ token, account}){
      if (account){
        token.accessToken = account.access_token
      }
      return token
    },
    async session({ session, token, user }){
      session.accessToken = token.accessToken
      return session
    }
  }
}
export default NextAuth(authOptions)