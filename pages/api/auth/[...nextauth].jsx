import NextAuth from 'next-auth';   
import GoogleProvider from "next-auth/providers/google"
import GithubProvide from "next-auth/providers/github"


export default NextAuth({
 providers:[
    GoogleProvider({
        clientId:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        clientSecret:process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
    }),
    GithubProvide({
        clientId:process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        clientSecret:process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET
    }),
 ]
})
