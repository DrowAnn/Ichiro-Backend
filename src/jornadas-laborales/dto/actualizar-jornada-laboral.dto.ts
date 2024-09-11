import { PartialType } from '@nestjs/mapped-types';
import { CrearJornadaLaboralDto } from './crear-jornada-laboral.dto';

export class ActualizarJornadaLaboralDto extends PartialType(
  CrearJornadaLaboralDto,
) {}
