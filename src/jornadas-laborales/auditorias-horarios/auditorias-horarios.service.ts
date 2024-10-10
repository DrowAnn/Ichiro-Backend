import { Injectable } from '@nestjs/common';
import { CreateAuditoriasHorarioDto } from './dto/create-auditorias-horario.dto';
import { UpdateAuditoriasHorarioDto } from './dto/update-auditorias-horario.dto';

@Injectable()
export class AuditoriasHorariosService {
  create(createAuditoriasHorarioDto: CreateAuditoriasHorarioDto) {
    return 'This action adds a new auditoriasHorario';
  }

  findAll() {
    return `This action returns all auditoriasHorarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditoriasHorario`;
  }

  update(id: number, updateAuditoriasHorarioDto: UpdateAuditoriasHorarioDto) {
    return `This action updates a #${id} auditoriasHorario`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditoriasHorario`;
  }
}
