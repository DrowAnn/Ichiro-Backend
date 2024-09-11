import { Module } from '@nestjs/common';
import { LiquidacionesNominasService } from './liquidaciones-nominas.service';
import { LiquidacionesNominasController } from './liquidaciones-nominas.controller';

@Module({
  controllers: [LiquidacionesNominasController],
  providers: [LiquidacionesNominasService],
})
export class LiquidacionesNominasModule {}
