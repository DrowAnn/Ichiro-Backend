import { Controller } from '@nestjs/common';
import { LiquidacionesNominasService } from './liquidaciones-nominas.service';

@Controller('liquidaciones-nominas')
export class LiquidacionesNominasController {
  constructor(private readonly liquidacionesNominasService: LiquidacionesNominasService) {}
}
