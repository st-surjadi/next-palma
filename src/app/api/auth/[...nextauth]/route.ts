import { AuthRepository } from '@root/src/repository/auth';
import { AuthUseCase } from '@root/src/usecases/auth';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authRepository = new AuthRepository();
const authUseCase = new AuthUseCase(authRepository);

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        try {
          const user = await authUseCase.getUserByUsername(credentials?.username);

          if (!user || user.password !== credentials?.password) {
            throw new Error('Invalid credentials.');
          }
          return {
            id: user.id,
            name: user.name,
            role: user.role,
            email: user.email,
          };
        } catch (error) {
          throw error;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
