/*
  Warnings:

  - The primary key for the `DatosHijos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "DatosHijos" DROP CONSTRAINT "DatosHijos_pkey",
ADD CONSTRAINT "DatosHijos_pkey" PRIMARY KEY ("numeroIdentificacion", "identificacionHijo");
