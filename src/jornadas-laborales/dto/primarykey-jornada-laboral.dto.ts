import { PartialType } from '@nestjs/mapped-types';
import { CrearJornadaLaboralDto } from './crear-jornada-laboral.dto';

export class PrimaryKeyJornadaLaboralDto extends PartialType(
  CrearJornadaLaboralDto,
) {
  numeroIdentificacion: string;
  diaJornada: Date;
}
