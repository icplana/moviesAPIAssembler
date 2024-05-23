/*
  Warnings:

  - You are about to drop the column `userId` on the `Movies` table. All the data in the column will be lost.
  - You are about to drop the `MovieGenre` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genre` to the `Movies` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MovieGenre" DROP CONSTRAINT "MovieGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "MovieGenre" DROP CONSTRAINT "MovieGenre_movieId_fkey";

-- DropForeignKey
ALTER TABLE "Movies" DROP CONSTRAINT "Movies_userId_fkey";

-- AlterTable
ALTER TABLE "Movies" DROP COLUMN "userId",
ADD COLUMN     "genre" VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE "MovieGenre";
