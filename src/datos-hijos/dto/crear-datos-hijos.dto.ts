import { DatosHijos } from '@prisma/client';

export class CrearDatosHijosDto implements DatosHijos {
  nombreModificadorDatosHijo: string;
  fechaUltimaModificacionDatosHijo: Date;
  numeroIdentificacion: string;
  nombreHijo: string;
  identificacionHijo: string;
  fechaNacimientoHijo: Date;
  generoHijo: string;
}
