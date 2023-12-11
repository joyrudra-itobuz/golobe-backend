import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({ log: ['query'] });

export default async function main() {
  await prisma.demoUser.deleteMany();

  const user = await prisma.demoUser.create({
    data: {
      name: 'joyrudra',
      age: 22,
      email: 'joyrudrabws@gmail.com',
      demoUserPreferences: {
        create: { emailUpdates: true },
      },
    },
    // include: {
    //   demoUserPreferences: true,
    // },
    select: {
      name: true,
      demoUserPreferences: { select: { id: true } },
    },
  });

  console.log(user);
}
