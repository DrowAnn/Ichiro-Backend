import {
  Body,
  Param,
  Controller,
  Delete,
  Get,
  Post,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { DatosHijosService } from './datos-hijos.service';
import { CrearDatosHijosDto } from './dto/crear-datos-hijos.dto';
import { DatosHijos } from '@prisma/client';
import { ActualizarDatosHijosDto } from './dto/actualizar-datos-hijos.dto';

@Controller('datos-hijos')
@UseGuards(AuthGuard)
export class DatosHijosController {
  constructor(private readonly datosHijosService: DatosHijosService) {}

  @Post()
  crearHijo(@Body() data: CrearDatosHijosDto): Promise<DatosHijos> {
    return this.datosHijosService.crearDatosHijos(data);
  }

  @Get()
  buscarTodosHijos(): Promise<DatosHijos[]> {
    return this.datosHijosService.obtenerTodosHijos();
  }

  @Get('/:numeroIdentificacion')
  buscarTodosHijosColaborador(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
  ): Promise<DatosHijos[]> {
    return this.datosHijosService.obtenerTodosHijosColaborador(
      numeroIdentificacion,
    );
  }

  @Get('/:numeroIdentificacion/:identificacionHijo')
  buscarHijoColaborador(
    @Param()
    params: {
      numeroIdentificacion: string;
      identificacionHijo: string;
    },
  ): Promise<DatosHijos> {
    return this.datosHijosService.obtenerHijoColaborador(
      params.numeroIdentificacion,
      params.identificacionHijo,
    );
  }

  @Patch('/:numeroIdentificacion/:identificacionHijo')
  actualizarHijoColaborador(
    @Param()
    params: {
      numeroIdentificacion: string;
      identificacionHijo: string;
    },
    @Body() data: ActualizarDatosHijosDto,
  ): Promise<DatosHijos> {
    return this.datosHijosService.actualizarHijo(
      params.numeroIdentificacion,
      params.identificacionHijo,
      data,
    );
  }

  @Delete('/:numeroIdentificacion/:identificacionHijo')
  eliminarHijoColaborador(
    @Param()
    params: {
      numeroIdentificacion: string;
      identificacionHijo: string;
    },
  ): Promise<DatosHijos> {
    return this.datosHijosService.borrarHijo(
      params.numeroIdentificacion,
      params.identificacionHijo,
    );
  }
}
