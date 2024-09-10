/*
  Warnings:

  - Added the required column `activo` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `area` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cargo` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `celular` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `direccion` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `escolaridad` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `experienciaAnos` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaIngreso` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fechaNacimiento` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formaPago` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genero` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horasMensualesContratadas` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profesion` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `riesgoARL` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salarioBase` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefonoFijo` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoContrato` to the `Colaboradores` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Colaboradores" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT TRUE,
ADD COLUMN     "area" TEXT NOT NULL,
ADD COLUMN     "cargo" TEXT NOT NULL,
ADD COLUMN     "celular" INTEGER NOT NULL,
ADD COLUMN     "correo" TEXT NOT NULL,
ADD COLUMN     "direccion" TEXT NOT NULL,
ADD COLUMN     "escolaridad" TEXT NOT NULL,
ADD COLUMN     "experienciaAnos" INTEGER NOT NULL,
ADD COLUMN     "fechaIngreso" DATE NOT NULL,
ADD COLUMN     "fechaNacimiento" DATE NOT NULL,
ADD COLUMN     "formaPago" TEXT NOT NULL,
ADD COLUMN     "genero" TEXT NOT NULL,
ADD COLUMN     "horasMensualesContratadas" INTEGER NOT NULL,
ADD COLUMN     "profesion" TEXT NOT NULL,
ADD COLUMN     "riesgoARL" INTEGER NOT NULL,
ADD COLUMN     "salarioBase" MONEY NOT NULL,
ADD COLUMN     "telefonoFijo" INTEGER NOT NULL,
ADD COLUMN     "tipoContrato" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "DatosSociodemograficos" (
    "numeroIdentificacion" INTEGER NOT NULL,
    "estadoCivil" TEXT NOT NULL,
    "promedioIngresosMensuales" TEXT NOT NULL,
    "estratoSocioeconomico" INTEGER NOT NULL,
    "tipoVivienda" TEXT NOT NULL,
    "grupoSanguineo" TEXT NOT NULL,
    "enfermedadesDiagnosticadasPermanentes" BOOLEAN NOT NULL,
    "tiposEnfermedadesPermanentes" JSONB,
    "medicamentoRecetadoPermanente" BOOLEAN NOT NULL,
    "tiposMedicamentosPermanentes" JSONB,
    "fuma" BOOLEAN NOT NULL,
    "consumeBebidasAlcoholicas" BOOLEAN NOT NULL,
    "consumeBebidasEnergeticasConstantemente" BOOLEAN NOT NULL,
    "practicaDeportivaRegular" BOOLEAN NOT NULL,
    "otroTrabajo" BOOLEAN NOT NULL,
    "laboresDomesticas" BOOLEAN NOT NULL,
    "recreacionDeporte" BOOLEAN NOT NULL,
    "estudio" BOOLEAN NOT NULL,
    "otraActividad" BOOLEAN NOT NULL,
    "vacunacion" BOOLEAN NOT NULL,
    "saludOral" BOOLEAN NOT NULL,
    "valoracionMedicoOcupacional" BOOLEAN NOT NULL,
    "examenesLaboratorio" BOOLEAN NOT NULL,
    "spaRelajacionSimilar" BOOLEAN NOT NULL,
    "actividadesSST" BOOLEAN NOT NULL,
    "ninguna" BOOLEAN NOT NULL,
    "cantidadDosisCovid19" INTEGER NOT NULL,
    "ultimaAplicacion" DATE,
    "nombreConyuge" TEXT,
    "edadConyuge" INTEGER,
    "telefonoConyuge" INTEGER,
    "tieneHijos" BOOLEAN NOT NULL,
    "cuantosHijosTiene" INTEGER DEFAULT 0,
    "datosHijos" JSONB,
    "personasNucleoFamiliar" INTEGER NOT NULL,
    "personasDependientesEconomicamente" INTEGER NOT NULL,
    "parentescos" TEXT,
    "eps" TEXT NOT NULL,
    "fondoPension" TEXT NOT NULL,
    "arl" TEXT NOT NULL,
    "nombreContactoEmergencia" TEXT NOT NULL,
    "telefonoContactoEmergencia" TEXT NOT NULL,
    "parentescoContactoEmergencia" TEXT NOT NULL,

    CONSTRAINT "DatosSociodemograficos_pkey" PRIMARY KEY ("numeroIdentificacion")
);

-- CreateTable
CREATE TABLE "JornadasLaborales" (
    "idJornada" SERIAL NOT NULL,
    "numeroIdentificacion" INTEGER NOT NULL,
    "diaJornada" DATE NOT NULL,
    "festivo" BOOLEAN NOT NULL,
    "horaProgramadaEntrada" TIME NOT NULL,
    "horaProgramadaSalida" TIME NOT NULL,
    "horaEntrada" TIME NOT NULL,
    "horaSalida" TIME NOT NULL,
    "llegadaTarde" BOOLEAN NOT NULL,
    "cantidadHorasExtrasDiurnas" DOUBLE PRECISION NOT NULL,
    "cantidadHorasExtrasNocturnas" DOUBLE PRECISION NOT NULL,
    "cantidadHorasExtrasDiurnasDominicalFestiva" DOUBLE PRECISION NOT NULL,
    "cantidadHorasExtrasNocturnasDominicalFestiva" DOUBLE PRECISION NOT NULL,
    "cantidadHorasRecargoNocturno" DOUBLE PRECISION NOT NULL,
    "cantidadHorasRecargoDiurnoDominicalFestivo" DOUBLE PRECISION NOT NULL,
    "cantidadHorasRecargoNocturnoDominicalFestivo" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "JornadasLaborales_pkey" PRIMARY KEY ("idJornada")
);

-- CreateTable
CREATE TABLE "LiquidacionesNomina" (
    "idLiquidacion" SERIAL NOT NULL,
    "numeroIdentificacion" INTEGER NOT NULL,
    "mes" INTEGER NOT NULL,
    "quincena" INTEGER NOT NULL,
    "salarioBase" INTEGER NOT NULL,
    "valorHora" DOUBLE PRECISION NOT NULL,
    "horasLaboradas" DOUBLE PRECISION NOT NULL,
    "baseLiquidacion" DOUBLE PRECISION NOT NULL,
    "auxilioTransporte" DOUBLE PRECISION NOT NULL,
    "horasIncapacidad" DOUBLE PRECISION NOT NULL,
    "pagoIncapacidad" MONEY NOT NULL,
    "cantidadHorasExtrasDiurnas" DOUBLE PRECISION NOT NULL,
    "valorHorasExtrasDiurnas" MONEY NOT NULL,
    "cantidadHorasExtrasNocturnas" DOUBLE PRECISION NOT NULL,
    "valorHorasExtrasNocturnas" MONEY NOT NULL,
    "cantidadHorasExtrasDiurnasDominicalFestiva" DOUBLE PRECISION NOT NULL,
    "valorHorasExtrasDiurnasDominicalFestiva" MONEY NOT NULL,
    "cantidadHorasExtrasNocturnasDominicalFestiva" DOUBLE PRECISION NOT NULL,
    "valorHorasExtrasNocturnasDominicalFestiva" MONEY NOT NULL,
    "cantidadHorasRecargoNocturno" DOUBLE PRECISION NOT NULL,
    "valorHorasRecargoNocturno" MONEY NOT NULL,
    "cantidadHorasRecargoDiurnoDominicalFestivo" DOUBLE PRECISION NOT NULL,
    "valorHorasRecargoDiurnoDominicalFestivo" MONEY NOT NULL,
    "cantidadHorasRecargoNocturnoDominicalFestivo" DOUBLE PRECISION NOT NULL,
    "valorHorasRecargoNocturnoDominicalFestivo" MONEY NOT NULL,
    "productividad" MONEY NOT NULL,
    "bonificaciones" MONEY NOT NULL,
    "asistenciaTecnica" MONEY NOT NULL,
    "totalDevengado" MONEY NOT NULL,
    "salud" MONEY NOT NULL,
    "pension" MONEY NOT NULL,
    "deducciones" JSONB NOT NULL,
    "netoPagado" MONEY NOT NULL,
    "aportesAlColaborador" JSONB NOT NULL,
    "seguroVida" MONEY NOT NULL,
    "retenciones" MONEY NOT NULL,
    "vacaciones" MONEY NOT NULL,
    "cesantias" MONEY NOT NULL,
    "prima" MONEY NOT NULL,
    "totalPagar" MONEY NOT NULL,

    CONSTRAINT "LiquidacionesNomina_pkey" PRIMARY KEY ("idLiquidacion")
);
