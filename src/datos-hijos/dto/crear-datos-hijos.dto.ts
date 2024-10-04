import { DatosHijos } from '@prisma/client';

export class CrearDatosHijosDto implements DatosHijos {
  numeroIdentificacion: string;
  nombreHijo: string;
  identificacionHijo: string;
  fechaNacimientoHijo: Date;
  generoHijo: string;
}
