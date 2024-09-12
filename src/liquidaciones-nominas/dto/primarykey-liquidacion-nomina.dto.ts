import { PartialType } from '@nestjs/mapped-types';
import { CrearLiquidacionNominaDto } from './crear-liquidacion-nomina.dto';

export class PrimaryKeyLiquidacionNominaDto extends PartialType(
  CrearLiquidacionNominaDto,
) {
  numeroIdentificacion: string;
  mes: number;
  ano: number;
  quincena: number;
}
