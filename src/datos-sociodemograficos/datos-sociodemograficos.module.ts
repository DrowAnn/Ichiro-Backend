import { Module } from '@nestjs/common';
import { DatosSociodemograficosService } from './datos-sociodemograficos.service';
import { DatosSociodemograficosController } from './datos-sociodemograficos.controller';

@Module({
  controllers: [DatosSociodemograficosController],
  providers: [DatosSociodemograficosService],
})
export class DatosSociodemograficosModule {}
