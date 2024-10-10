import { Test, TestingModule } from '@nestjs/testing';
import { AuditoriasHorariosService } from './auditorias-horarios.service';

describe('AuditoriasHorariosService', () => {
  let service: AuditoriasHorariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuditoriasHorariosService],
    }).compile();

    service = module.get<AuditoriasHorariosService>(AuditoriasHorariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
