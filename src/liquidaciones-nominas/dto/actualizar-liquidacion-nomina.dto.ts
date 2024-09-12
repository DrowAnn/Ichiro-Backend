import { PartialType } from '@nestjs/mapped-types';
import { CrearLiquidacionNominaDto } from './crear-liquidacion-nomina.dto';

export class ActualizarLiquidacionNominaDto extends PartialType(
  CrearLiquidacionNominaDto,
) {}
