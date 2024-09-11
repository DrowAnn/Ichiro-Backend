/*
  Warnings:

  - The primary key for the `Usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nombre` on the `Usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[numeroIdentificacion]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nombreUsuario` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Colaboradores" DROP CONSTRAINT "Colaboradores_numeroIdentificacion_fkey";

-- AlterTable
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_pkey",
DROP COLUMN "nombre",
ADD COLUMN     "nombreUsuario" TEXT NOT NULL,
ALTER COLUMN "correo" DROP NOT NULL,
ALTER COLUMN "numeroIdentificacion" DROP NOT NULL,
ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("nombreUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_numeroIdentificacion_key" ON "Usuarios"("numeroIdentificacion");

-- AddForeignKey
ALTER TABLE "Usuarios" ADD CONSTRAINT "Usuarios_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE SET NULL ON UPDATE CASCADE;
