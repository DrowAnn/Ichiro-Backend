import { Module } from '@nestjs/common';
import { AuditoriasHorariosService } from './auditorias-horarios.service';
import { AuditoriasHorariosController } from './auditorias-horarios.controller';

@Module({
  controllers: [AuditoriasHorariosController],
  providers: [AuditoriasHorariosService],
})
export class AuditoriasHorariosModule {}
