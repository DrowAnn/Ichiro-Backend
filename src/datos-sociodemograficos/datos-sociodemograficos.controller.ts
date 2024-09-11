import { Controller } from '@nestjs/common';
import { DatosSociodemograficosService } from './datos-sociodemograficos.service';

@Controller('datos-sociodemograficos')
export class DatosSociodemograficosController {
  constructor(private readonly datosSociodemograficosService: DatosSociodemograficosService) {}
}
