import { Module } from '@nestjs/common';
import { JornadasLaboralesService } from './jornadas-laborales.service';
import { JornadasLaboralesController } from './jornadas-laborales.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [JornadasLaboralesController],
  providers: [JornadasLaboralesService],
  imports: [PrismaModule],
})
export class JornadasLaboralesModule {}
