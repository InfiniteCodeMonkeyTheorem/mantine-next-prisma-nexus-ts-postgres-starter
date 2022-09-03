import { PrismaClient } from "@prisma/client";
// import your data

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    email: "mike.s.dyer@gmail.com",
    id: "1234",
  });

  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
