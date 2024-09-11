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
  buscarUna(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('diaJornada') diaJornada: Date,
  ) {
    return this.jornadasLaboralesService.buscarJornadaLaboral(
      numeroIdentificacion,
      diaJornada,
    );
  }

  @Patch(':numeroIdentificacion')
  actualizacionParcial(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('diaJornada') diaJornada: Date,
    @Body() data: ActualizarJornadaLaboralDto,
  ) {
    return this.jornadasLaboralesService.actualizarJornadaLaboral(
      numeroIdentificacion,
      diaJornada,
      data,
    );
  }

  @Delete(':numeroIdentificacion')
  borrarUno(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('diaJornada') diaJornada: Date,
  ) {
    return this.jornadasLaboralesService.borrarJornadaLaboral(
      numeroIdentificacion,
      diaJornada,
    );
  }
}
