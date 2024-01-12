/* export default async function main() {
  try {
    // await prisma.demoUser.deleteMany();
    // const user = await prisma.demoUser.createMany({
    //   data: [
    //     {
    //       name: 'john',
    //       age: 22,
    //       email: 'john1@gmail.com',
    //     },
    //     {
    //       name: 'john',
    //       age: 27,
    //       email: 'john2@gmail.com',
    //     },
    //     {
    //       name: 'john',
    //       age: 24,
    //       email: 'john3@gmail.com',
    //     },
    //   ],
    //   // include: {
    //   //   demoUserPreferences: true,
    //   // },
    //   // select: {
    //   //   name: true,
    //   //   demoUserPreferences: { select: { id: true } },
    //   // },
    // });

    // const user = await prisma.demoUser.update({
    //   where: {
    //     email: 'joyrudrabws@gmail.com',
    //   },
    //   data: {
    //     email: 'arctic@test.com',
    //   },
    // });

    const user = await prisma.demoUser.findMany();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
 */
