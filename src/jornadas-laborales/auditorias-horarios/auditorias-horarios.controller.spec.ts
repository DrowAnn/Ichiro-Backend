import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriasHorariosController } from './auditorias-horarios.controller';
import { AuditoriasHorariosService } from './auditorias-horarios.service';

describe('AuditoriasHorariosController', () => {
  let controller: AuditoriasHorariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuditoriasHorariosController],
      providers: [AuditoriasHorariosService],
    }).compile();

    controller = module.get<AuditoriasHorariosController>(AuditoriasHorariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
