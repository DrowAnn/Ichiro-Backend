-- CreateTable
CREATE TABLE "Colaboradores" (
    "numeroIdentificacion" INTEGER NOT NULL,
    "primerNombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "primerApellido" TEXT NOT NULL,
    "segundoApellido" TEXT,

    CONSTRAINT "Colaboradores_pkey" PRIMARY KEY ("numeroIdentificacion")
);
