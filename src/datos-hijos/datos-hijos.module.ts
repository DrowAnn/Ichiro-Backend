import { Module } from '@nestjs/common';
import { DatosHijosController } from './datos-hijos.controller';
import { DatosHijosService } from './datos-hijos.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DatosHijosController],
  providers: [DatosHijosService],
  imports: [PrismaModule],
})
export class DatosHijosModule {}
