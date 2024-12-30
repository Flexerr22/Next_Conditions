import { manufactures, products } from './constants';
import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt'


async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: 'Никита',
                email: 'nikitakrut2005@gmail.com',
                password: hashSync('1111111', 10),
                verified: new Date(),
                role: 'USER',
            },
            {
                fullName: 'Илья',
                email: 'admin@gmail.com',
                password: hashSync('1111111', 10),
                verified: new Date(),
                role: 'ADMIN',
            }
        ]
    });

    await prisma.manufacture.createMany({
        data: manufactures,
    });

    await prisma.product.createMany({
        data: products,
    });
}


async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Manufacture" RESTART IDENTITY CASCADE`;
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}


async function main() {

    try {
        await down();
        await up();
    }

    catch (e) {
        console.error(e);
    }
}


main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });


