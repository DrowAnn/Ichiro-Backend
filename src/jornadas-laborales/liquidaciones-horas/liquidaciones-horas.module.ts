import { Module } from '@nestjs/common';
import { LiquidacionesHorasService } from './liquidaciones-horas.service';
import { LiquidacionesHorasController } from './liquidaciones-horas.controller';

@Module({
  controllers: [LiquidacionesHorasController],
  providers: [LiquidacionesHorasService],
})
export class LiquidacionesHorasModule {}
