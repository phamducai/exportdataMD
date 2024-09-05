import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import { authConfig } from './auth.config';
import prismaMysql1 from '@/app/lib/mysql1Client';

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await prismaMysql1.users.findUnique({
      where: { email: email as string },
         select: {
        user_id: true,
        name: true,
        email: true,
        password: true,
      },
    });
    return user ? { id: user.user_id, ...user } as User : undefined;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email } = parsedCredentials.data;

          const user = await getUser(email);
          if (!user) return null;

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          // if (passwordsMatch) return user;
          return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});