/*
  Warnings:

  - The `area` column on the `Colaboradores` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `rol` column on the `Usuarios` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('Super_Usuario', 'Administrador', 'Lider_De_Area', 'Colaborador');

-- CreateEnum
CREATE TYPE "Area" AS ENUM ('Asistencial', 'Administrativo', 'Financiero', 'Estetica', 'Comercial', 'Recepcion', 'Programacion', 'Instrumental_Y_Central_De_Lavado', 'Farmacia', 'Hospitalizacion', 'Servicios_Generales', 'Mantenimiento', 'Medicina_General', 'Rayos_X');

-- AlterTable
ALTER TABLE "Colaboradores" DROP COLUMN "area",
ADD COLUMN     "area" "Area";

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "rol",
ADD COLUMN     "rol" "Roles" NOT NULL DEFAULT 'Colaborador';
