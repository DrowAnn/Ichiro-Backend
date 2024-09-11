import { JornadasLaborales } from '@prisma/client';

export class CrearJornadaLaboralDto implements JornadasLaborales {
  idJornada: number;
  numeroIdentificacion: string;
  diaJornada: Date;
  festivo: boolean;
  horaProgramadaEntrada: Date;
  horaProgramadaSalida: Date;
  horaEntrada: Date;
  horaSalida: Date;
  llegadaTarde: boolean;
  cantidadHorasExtrasDiurnas: number;
  cantidadHorasExtrasNocturnas: number;
  cantidadHorasExtrasDiurnasDominicalFestiva: number;
  cantidadHorasExtrasNocturnasDominicalFestiva: number;
  cantidadHorasRecargoNocturno: number;
  cantidadHorasRecargoDiurnoDominicalFestivo: number;
  cantidadHorasRecargoNocturnoDominicalFestivo: number;
}
