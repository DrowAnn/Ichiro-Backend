-- CreateTable
CREATE TABLE "DatosHijos" (
    "numeroIdentificacion" TEXT NOT NULL,
    "nombreHijo" TEXT NOT NULL,
    "identificacionHijo" TEXT NOT NULL,
    "fechaNacimientoHijo" DATE NOT NULL,
    "generoHijo" TEXT NOT NULL,

    CONSTRAINT "DatosHijos_pkey" PRIMARY KEY ("numeroIdentificacion")
);

-- AddForeignKey
ALTER TABLE "DatosHijos" ADD CONSTRAINT "DatosHijos_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;
