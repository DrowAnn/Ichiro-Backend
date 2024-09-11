/*
  Warnings:

  - The `horaProgramadaEntrada` column on the `JornadasLaborales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `horaProgramadaSalida` column on the `JornadasLaborales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `horaEntrada` column on the `JornadasLaborales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `horaSalida` column on the `JornadasLaborales` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `LiquidacionesNomina` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `ano` to the `LiquidacionesNomina` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numeroIdentificacion` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JornadasLaborales" DROP COLUMN "horaProgramadaEntrada",
ADD COLUMN     "horaProgramadaEntrada" TIMESTAMP(3),
DROP COLUMN "horaProgramadaSalida",
ADD COLUMN     "horaProgramadaSalida" TIMESTAMP(3),
DROP COLUMN "horaEntrada",
ADD COLUMN     "horaEntrada" TIMESTAMP(3),
DROP COLUMN "horaSalida",
ADD COLUMN     "horaSalida" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "LiquidacionesNomina" DROP CONSTRAINT "LiquidacionesNomina_pkey",
ADD COLUMN     "ano" SMALLINT NOT NULL,
ADD CONSTRAINT "LiquidacionesNomina_pkey" PRIMARY KEY ("numeroIdentificacion", "mes", "ano", "quincena");

-- AlterTable
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_pkey",
DROP COLUMN "id",
ADD COLUMN     "numeroIdentificacion" TEXT NOT NULL,
ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("numeroIdentificacion");

-- AddForeignKey
ALTER TABLE "Colaboradores" ADD CONSTRAINT "Colaboradores_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Usuarios"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;
