import { PartialType } from '@nestjs/mapped-types';
import { CreateAuditoriasHorarioDto } from './create-auditorias-horario.dto';

export class UpdateAuditoriasHorarioDto extends PartialType(CreateAuditoriasHorarioDto) {}
