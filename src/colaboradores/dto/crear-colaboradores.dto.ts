import { $Enums, Colaboradores } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';

export class CrearColaboradoresDto implements Colaboradores {
  nombreModificadorColaborador: string;
  fechaUltimaModificacionColaborador: Date;
  numeroIdentificacion: string;
  primerNombre: string;
  segundoNombre: string;
  primerApellido: string;
  segundoApellido: string;
  celular: string;
  correo: string;
  direccion: string;
  telefonoFijo: string;
  fechaNacimiento: Date;
  fechaIngreso: Date;
  genero: string;
  cargo: string;
  area: $Enums.Area;
  riesgoARL: number;
  tipoContrato: string;
  profesion: string;
  escolaridad: string;
  experienciaAnos: number;
  salarioBase: Decimal;
  horasMensualesContratadas: number;
  formaPago: string;
  activo: boolean;
}
