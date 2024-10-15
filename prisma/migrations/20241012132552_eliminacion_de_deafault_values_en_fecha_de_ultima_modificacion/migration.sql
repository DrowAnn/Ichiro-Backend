-- AlterTable
ALTER TABLE "AuditoriasHorarios" ALTER COLUMN "fechaUltimaModificacionAuditoria" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Colaboradores" ALTER COLUMN "fechaUltimaModificacionColaborador" DROP DEFAULT;

-- AlterTable
ALTER TABLE "DatosHijos" ALTER COLUMN "fechaUltimaModificacionDatosHijo" DROP DEFAULT;

-- AlterTable
ALTER TABLE "DatosSociodemograficos" ALTER COLUMN "fechaUltimaModificacionDatosSociodemograficos" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Horarios" ALTER COLUMN "fechaUltimaModificacionHorarios" DROP DEFAULT;

-- AlterTable
ALTER TABLE "LiquidacionesHoras" ALTER COLUMN "fechaUltimaModificacionLiquidacionHoras" DROP DEFAULT;

-- AlterTable
ALTER TABLE "LiquidacionesNomina" ALTER COLUMN "fechaUltimaModificacionLiquidacionNomina" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "fechaUltimaModificacionUsuario" DROP DEFAULT;
