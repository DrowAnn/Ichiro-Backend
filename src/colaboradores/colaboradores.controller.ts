import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ColaboradoresService } from './colaboradores.service';
import { Colaboradores } from '@prisma/client';
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';

@Controller('colaboradores')
@UseGuards(AuthGuard)
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Post()
  // @UseGuards(AuthGuard)
  crearUno(@Body() data: Colaboradores) {
    return this.colaboradoresService.crearColaborador(data);
  }

  @Get()
  // @UseGuards(kAuthGuard)
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
  // @UseGuards(AuthGuard)
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
  // @UseGuards(AuthGuard)
  borrarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.colaboradoresService.borrarColaborador(
      Number(numeroIdentificacion),
    );
  }
}
