/*
  Warnings:

  - The primary key for the `Colaboradores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `experienciaAnos` on the `Colaboradores` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `horasMensualesContratadas` on the `Colaboradores` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `riesgoARL` on the `Colaboradores` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - The primary key for the `DatosSociodemograficos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `estratoSocioeconomico` on the `DatosSociodemograficos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `cantidadDosisCovid19` on the `DatosSociodemograficos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `edadConyuge` on the `DatosSociodemograficos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `cuantosHijosTiene` on the `DatosSociodemograficos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `personasNucleoFamiliar` on the `DatosSociodemograficos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `personasDependientesEconomicamente` on the `DatosSociodemograficos` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `mes` on the `LiquidacionesNomina` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - You are about to alter the column `quincena` on the `LiquidacionesNomina` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `SmallInt`.
  - The `salarioBase` column on the `LiquidacionesNomina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `valorHora` column on the `LiquidacionesNomina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `baseLiquidacion` column on the `LiquidacionesNomina` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `auxilioTransporte` column on the `LiquidacionesNomina` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "DatosSociodemograficos" DROP CONSTRAINT "DatosSociodemograficos_numeroIdentificacion_fkey";

-- DropForeignKey
ALTER TABLE "JornadasLaborales" DROP CONSTRAINT "JornadasLaborales_numeroIdentificacion_fkey";

-- DropForeignKey
ALTER TABLE "LiquidacionesNomina" DROP CONSTRAINT "LiquidacionesNomina_numeroIdentificacion_fkey";

-- AlterTable
ALTER TABLE "Colaboradores" DROP CONSTRAINT "Colaboradores_pkey",
ALTER COLUMN "numeroIdentificacion" SET DATA TYPE BIGINT,
ALTER COLUMN "celular" SET DATA TYPE BIGINT,
ALTER COLUMN "experienciaAnos" SET DATA TYPE SMALLINT,
ALTER COLUMN "horasMensualesContratadas" SET DATA TYPE SMALLINT,
ALTER COLUMN "riesgoARL" SET DATA TYPE SMALLINT,
ALTER COLUMN "telefonoFijo" SET DATA TYPE BIGINT,
ADD CONSTRAINT "Colaboradores_pkey" PRIMARY KEY ("numeroIdentificacion");

-- AlterTable
ALTER TABLE "DatosSociodemograficos" DROP CONSTRAINT "DatosSociodemograficos_pkey",
ALTER COLUMN "numeroIdentificacion" SET DATA TYPE BIGINT,
ALTER COLUMN "estratoSocioeconomico" SET DATA TYPE SMALLINT,
ALTER COLUMN "cantidadDosisCovid19" SET DATA TYPE SMALLINT,
ALTER COLUMN "edadConyuge" SET DATA TYPE SMALLINT,
ALTER COLUMN "telefonoConyuge" SET DATA TYPE BIGINT,
ALTER COLUMN "cuantosHijosTiene" SET DATA TYPE SMALLINT,
ALTER COLUMN "personasNucleoFamiliar" SET DATA TYPE SMALLINT,
ALTER COLUMN "personasDependientesEconomicamente" SET DATA TYPE SMALLINT,
ADD CONSTRAINT "DatosSociodemograficos_pkey" PRIMARY KEY ("numeroIdentificacion");

-- AlterTable
ALTER TABLE "JornadasLaborales" ALTER COLUMN "numeroIdentificacion" SET DATA TYPE BIGINT;

-- AlterTable
ALTER TABLE "LiquidacionesNomina" ALTER COLUMN "numeroIdentificacion" SET DATA TYPE BIGINT,
ALTER COLUMN "mes" SET DATA TYPE SMALLINT,
ALTER COLUMN "quincena" SET DATA TYPE SMALLINT,
DROP COLUMN "salarioBase",
ADD COLUMN     "salarioBase" MONEY,
DROP COLUMN "valorHora",
ADD COLUMN     "valorHora" MONEY,
DROP COLUMN "baseLiquidacion",
ADD COLUMN     "baseLiquidacion" MONEY,
DROP COLUMN "auxilioTransporte",
ADD COLUMN     "auxilioTransporte" MONEY;

-- AddForeignKey
ALTER TABLE "DatosSociodemograficos" ADD CONSTRAINT "DatosSociodemograficos_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JornadasLaborales" ADD CONSTRAINT "JornadasLaborales_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidacionesNomina" ADD CONSTRAINT "LiquidacionesNomina_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;
