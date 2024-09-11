import { PartialType } from '@nestjs/mapped-types';
import { CrearColaboradoresDto } from './crear-colaboradores.dto';

export class ActualizarColaboradoresDto extends PartialType(
  CrearColaboradoresDto,
) {}
