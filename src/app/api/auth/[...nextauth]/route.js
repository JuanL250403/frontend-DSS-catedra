import { jwtDecode } from "jwt-decode"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const refresh = async (token) => {
    const respuesta = await fetch("http://127.0.0.1:8000/api/auth/refresco", {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    const respuestaJson = await respuesta.json()

    const fecha = new Date()
    return {
        ...token,
        accessToken: respuestaJson.access_token,
        tokenExpires: fecha.setSeconds(fecha.getSeconds + respuestaJson.expires_in)
    }

}

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials) {
                const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email: credentials.email,
                        password: credentials.password
                    })
                })
                
                const data = await response.json()

                if (!response.ok) return console.log(response)

                const dataJWT = jwtDecode(data.access_token)
                
                let fecha = new Date()
                fecha.setSeconds(fecha.getSeconds() + data.expires_in)
                return {
                    usuario: dataJWT.usuario,
                    rol: dataJWT.rol,
                    token: data.access_token,
                    tokenExpires: fecha.setSeconds(fecha.getSeconds() + data.expires_in) 
                }
            }
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            
            if (user) {
                token.usuario = user.usuario
                token.rol = user.rol
                token.accessToken = user.token
                token.expires = user.tokenExpires

            }

            if(new Date().getSeconds() < token.expires){
                return token
            } 
            
            return refresh(token)
        },

        async session({ session, token }) {
            session.user.usuario = token.usuario
            session.user.rol = token.rol
            session.accessToken = token.accessToken

            return session
        }
    },

    session: {
        strategy: "jwt"
    },

    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }