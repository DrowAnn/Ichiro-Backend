/*
  Warnings:

  - The primary key for the `JornadasLaborales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `LiquidacionesNomina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `diaJornada` on table `JornadasLaborales` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mes` on table `LiquidacionesNomina` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quincena` on table `LiquidacionesNomina` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JornadasLaborales" DROP CONSTRAINT "JornadasLaborales_pkey",
ALTER COLUMN "diaJornada" SET NOT NULL,
ADD CONSTRAINT "JornadasLaborales_pkey" PRIMARY KEY ("numeroIdentificacion", "diaJornada");

-- AlterTable
ALTER TABLE "LiquidacionesNomina" DROP CONSTRAINT "LiquidacionesNomina_pkey",
ALTER COLUMN "mes" SET NOT NULL,
ALTER COLUMN "quincena" SET NOT NULL,
ADD CONSTRAINT "LiquidacionesNomina_pkey" PRIMARY KEY ("numeroIdentificacion", "mes", "quincena");
