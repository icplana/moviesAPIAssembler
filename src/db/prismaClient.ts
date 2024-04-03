import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


// DEVELOPING PURPOSES
// async function main() {
//     const post = await prisma.user.create({
//         data:{
//             name: 'ignasi',
//             email: 'email',
//             password: 'password'
//         }
//     })

//     console.log(post)    
// }

// main()

export default prisma;