import { LiquidacionesNomina } from '@prisma/client';
import { Decimal, JsonValue } from '@prisma/client/runtime/library';

export class CrearLiquidacionNominaDto implements LiquidacionesNomina {
  nombreModificadorLiquidacionNomina: string;
  fechaUltimaModificacionLiquidacionNomina: Date;
  idLiquidacion: number;
  numeroIdentificacion: string;
  mes: number;
  ano: number;
  quincena: number;
  salarioBase: Decimal;
  valorHora: Decimal;
  horasLaboradas: number;
  baseLiquidacion: Decimal;
  auxilioTransporte: Decimal;
  horasIncapacidad: number;
  pagoIncapacidad: Decimal;
  cantidadHorasExtrasDiurnas: number;
  valorHorasExtrasDiurnas: Decimal;
  cantidadHorasExtrasNocturnas: number;
  valorHorasExtrasNocturnas: Decimal;
  cantidadHorasExtrasDiurnasDominicalFestiva: number;
  valorHorasExtrasDiurnasDominicalFestiva: Decimal;
  cantidadHorasExtrasNocturnasDominicalFestiva: number;
  valorHorasExtrasNocturnasDominicalFestiva: Decimal;
  cantidadHorasRecargoNocturno: number;
  valorHorasRecargoNocturno: Decimal;
  cantidadHorasRecargoDiurnoDominicalFestivo: number;
  valorHorasRecargoDiurnoDominicalFestivo: Decimal;
  cantidadHorasRecargoNocturnoDominicalFestivo: number;
  valorHorasRecargoNocturnoDominicalFestivo: Decimal;
  productividad: Decimal;
  bonificaciones: Decimal;
  asistenciaTecnica: Decimal;
  totalDevengado: Decimal;
  salud: Decimal;
  pension: Decimal;
  deducciones: JsonValue;
  netoPagado: Decimal;
  aportesAlColaborador: JsonValue;
  seguroVida: Decimal;
  retenciones: Decimal;
  vacaciones: Decimal;
  cesantias: Decimal;
  prima: Decimal;
  totalPagar: Decimal;
}
