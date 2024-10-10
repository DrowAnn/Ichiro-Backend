import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuditoriasHorariosService } from './auditorias-horarios.service';
import { CreateAuditoriasHorarioDto } from './dto/create-auditorias-horario.dto';
import { UpdateAuditoriasHorarioDto } from './dto/update-auditorias-horario.dto';

@Controller('auditorias-horarios')
export class AuditoriasHorariosController {
  constructor(private readonly auditoriasHorariosService: AuditoriasHorariosService) {}

  @Post()
  create(@Body() createAuditoriasHorarioDto: CreateAuditoriasHorarioDto) {
    return this.auditoriasHorariosService.create(createAuditoriasHorarioDto);
  }

  @Get()
  findAll() {
    return this.auditoriasHorariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditoriasHorariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuditoriasHorarioDto: UpdateAuditoriasHorarioDto) {
    return this.auditoriasHorariosService.update(+id, updateAuditoriasHorarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditoriasHorariosService.remove(+id);
  }
}
