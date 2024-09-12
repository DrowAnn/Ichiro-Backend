import { Module } from '@nestjs/common';
import { LiquidacionesNominasService } from './liquidaciones-nominas.service';
import { LiquidacionesNominasController } from './liquidaciones-nominas.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [LiquidacionesNominasController],
  providers: [LiquidacionesNominasService],
  imports: [PrismaModule],
})
export class LiquidacionesNominasModule {}
