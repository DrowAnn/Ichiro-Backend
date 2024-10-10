import { Test, TestingModule } from '@nestjs/testing';
import { LiquidacionesHorasService } from './liquidaciones-horas.service';

describe('LiquidacionesHorasService', () => {
  let service: LiquidacionesHorasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiquidacionesHorasService],
    }).compile();

    service = module.get<LiquidacionesHorasService>(LiquidacionesHorasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
