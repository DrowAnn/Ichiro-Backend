import { PartialType } from '@nestjs/mapped-types';
import { CrearDatosSociodemograficosDto } from './crear-datos-sociodemograficos.dto';

export class ActualizarDatosSociodemograficosDto extends PartialType(
  CrearDatosSociodemograficosDto,
) {}
