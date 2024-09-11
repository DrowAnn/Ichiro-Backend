/*
  Warnings:

  - The primary key for the `Colaboradores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `DatosSociodemograficos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "DatosSociodemograficos" DROP CONSTRAINT "DatosSociodemograficos_numeroIdentificacion_fkey";

-- DropForeignKey
ALTER TABLE "JornadasLaborales" DROP CONSTRAINT "JornadasLaborales_numeroIdentificacion_fkey";

-- DropForeignKey
ALTER TABLE "LiquidacionesNomina" DROP CONSTRAINT "LiquidacionesNomina_numeroIdentificacion_fkey";

-- AlterTable
ALTER TABLE "Colaboradores" DROP CONSTRAINT "Colaboradores_pkey",
ALTER COLUMN "numeroIdentificacion" SET DATA TYPE TEXT,
ADD CONSTRAINT "Colaboradores_pkey" PRIMARY KEY ("numeroIdentificacion");

-- AlterTable
ALTER TABLE "DatosSociodemograficos" DROP CONSTRAINT "DatosSociodemograficos_pkey",
ALTER COLUMN "numeroIdentificacion" SET DATA TYPE TEXT,
ADD CONSTRAINT "DatosSociodemograficos_pkey" PRIMARY KEY ("numeroIdentificacion");

-- AlterTable
ALTER TABLE "JornadasLaborales" ALTER COLUMN "numeroIdentificacion" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "LiquidacionesNomina" ALTER COLUMN "numeroIdentificacion" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "DatosSociodemograficos" ADD CONSTRAINT "DatosSociodemograficos_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JornadasLaborales" ADD CONSTRAINT "JornadasLaborales_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidacionesNomina" ADD CONSTRAINT "LiquidacionesNomina_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;
