import { Test, TestingModule } from '@nestjs/testing';
import { LiquidacionesHorasController } from './liquidaciones-horas.controller';
import { LiquidacionesHorasService } from './liquidaciones-horas.service';

describe('LiquidacionesHorasController', () => {
  let controller: LiquidacionesHorasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiquidacionesHorasController],
      providers: [LiquidacionesHorasService],
    }).compile();

    controller = module.get<LiquidacionesHorasController>(LiquidacionesHorasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
