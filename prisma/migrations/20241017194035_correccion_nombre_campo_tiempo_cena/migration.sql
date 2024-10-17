/*
  Warnings:

  - You are about to drop the column `timpoCena` on the `Horarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Horarios" DROP COLUMN "timpoCena",
ADD COLUMN     "tiempoCena" INTEGER;
