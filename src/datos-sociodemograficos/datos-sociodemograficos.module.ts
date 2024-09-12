import { Module } from '@nestjs/common';
import { DatosSociodemograficosService } from './datos-sociodemograficos.service';
import { DatosSociodemograficosController } from './datos-sociodemograficos.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DatosSociodemograficosController],
  providers: [DatosSociodemograficosService],
  imports: [PrismaModule],
})
export class DatosSociodemograficosModule {}
