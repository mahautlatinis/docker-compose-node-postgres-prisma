import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@alice.com',
    },
  });
  console.log({ alice });
}

main()
  .then(async () => {
    console.info('Great');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(`ERROR: ${e}`);
    await prisma.$disconnect();
    process.exit(1);
  });
