-- AddForeignKey
ALTER TABLE "DatosSociodemograficos" ADD CONSTRAINT "DatosSociodemograficos_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JornadasLaborales" ADD CONSTRAINT "JornadasLaborales_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiquidacionesNomina" ADD CONSTRAINT "LiquidacionesNomina_numeroIdentificacion_fkey" FOREIGN KEY ("numeroIdentificacion") REFERENCES "Colaboradores"("numeroIdentificacion") ON DELETE RESTRICT ON UPDATE CASCADE;
