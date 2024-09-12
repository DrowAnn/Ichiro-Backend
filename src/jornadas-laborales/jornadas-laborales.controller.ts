import {
  Controller,
  Body,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { JornadasLaboralesService } from './jornadas-laborales.service';
import { CrearJornadaLaboralDto } from './dto/crear-jornada-laboral.dto';
import { ActualizarJornadaLaboralDto } from './dto/actualizar-jornada-laboral.dto';
import { PrimaryKeyJornadaLaboralDto } from './dto/primarykey-jornada-laboral.dto';

@Controller('jornadas-laborales')
export class JornadasLaboralesController {
  constructor(
    private readonly jornadasLaboralesService: JornadasLaboralesService,
  ) {}

  @Post()
  crearUna(@Body() data: CrearJornadaLaboralDto) {
    return this.jornadasLaboralesService.crearJornadaLaboral(data);
  }

  @Get()
  buscarTodas() {
    return this.jornadasLaboralesService.buscarJornadasLaborales();
  }

  @Get(':numeroIdentificacion')
  buscarTodasColaborador(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
  ) {
    return this.jornadasLaboralesService.buscarJornadasLaboralesColaborador(
      numeroIdentificacion,
    );
  }

  @Get(':numeroIdentificacion/:diaJornada')
  buscarUna(@Param() params: PrimaryKeyJornadaLaboralDto) {
    const numeroIdentificacion = params.numeroIdentificacion;
    const diaJornada = new Date(params.diaJornada);
    return this.jornadasLaboralesService.buscarJornadaLaboral(
      numeroIdentificacion,
      diaJornada,
    );
  }

  @Patch(':numeroIdentificacion/:diaJornada')
  actualizacionParcial(
    @Param() params: PrimaryKeyJornadaLaboralDto,
    @Body() data: ActualizarJornadaLaboralDto,
  ) {
    const numeroIdentificacion = params.numeroIdentificacion;
    const diaJornada = new Date(params.diaJornada);
    return this.jornadasLaboralesService.actualizarJornadaLaboral(
      numeroIdentificacion,
      diaJornada,
      data,
    );
  }

  @Delete(':numeroIdentificacion/:diaJornada')
  borrarUno(@Param() params: PrimaryKeyJornadaLaboralDto) {
    const numeroIdentificacion = params.numeroIdentificacion;
    const diaJornada = new Date(params.diaJornada);
    return this.jornadasLaboralesService.borrarJornadaLaboral(
      numeroIdentificacion,
      diaJornada,
    );
  }
}
