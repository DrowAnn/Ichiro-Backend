import { PartialType } from '@nestjs/mapped-types';
import { CreateLiquidacionesHoraDto } from './create-liquidaciones-hora.dto';

export class UpdateLiquidacionesHoraDto extends PartialType(CreateLiquidacionesHoraDto) {}
