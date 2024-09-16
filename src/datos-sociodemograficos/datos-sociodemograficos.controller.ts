import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { DatosSociodemograficosService } from './datos-sociodemograficos.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CrearDatosSociodemograficosDto } from './dto/crear-datos-sociodemograficos.dto';
import { ActualizarDatosSociodemograficosDto } from './dto/actualizar-datos-sociodemograficos.dto';

@Controller('datos-sociodemograficos')
@UseGuards(AuthGuard)
export class DatosSociodemograficosController {
  constructor(
    private readonly datosSociodemograficosService: DatosSociodemograficosService,
  ) {}

  @Post()
  crearUno(@Body() data: CrearDatosSociodemograficosDto) {
    return this.datosSociodemograficosService.crearDatosSociodemograficos(data);
  }

  @Get()
  buscarTodos() {
    return this.datosSociodemograficosService.buscarDatosSociodemograficosColaboradores();
  }

  @Get(':numeroIdentificacion')
  buscarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.datosSociodemograficosService.buscarDatosSociodemograficosColaborador(
      numeroIdentificacion,
    );
  }

  @Patch(':numeroIdentificacion')
  actualizacionParcial(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Body() data: ActualizarDatosSociodemograficosDto,
  ) {
    return this.datosSociodemograficosService.actualizarDatosSociodemograficos(
      numeroIdentificacion,
      data,
    );
  }

  @Delete(':numeroIdentificacion')
  borrarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.datosSociodemograficosService.borrarDatosSociodemograficos(
      numeroIdentificacion,
    );
  }
}
