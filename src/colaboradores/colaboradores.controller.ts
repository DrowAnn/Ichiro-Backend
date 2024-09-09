import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { Colaboradores } from '@prisma/client';

@Controller('colaboradores')
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Post()
  crearUno(@Body() data: Colaboradores) {
    return this.colaboradoresService.crearColaborador(data);
  }

  @Get()
  buscarTodos() {
    return this.colaboradoresService.buscarColaboradores();
  }

  @Get(':numeroIdentificacion')
  buscarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.colaboradoresService.buscarColaborador(
      Number(numeroIdentificacion),
    );
  }

  @Patch(':numeroIdentificacion')
  actualizacionParcial(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Body() data: Colaboradores,
  ) {
    return this.colaboradoresService.actualizarColaborador(
      Number(numeroIdentificacion),
      data,
    );
  }

  @Delete(':numeroIdentificacion')
  borrarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.colaboradoresService.borrarColaborador(
      Number(numeroIdentificacion),
    );
  }
}
