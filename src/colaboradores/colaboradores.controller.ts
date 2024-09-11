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
import { AuthGuard } from 'src/auth/guards/auth/auth.guard';
import { CrearColaboradoresDto } from './dto/crear-colaboradores.dto';
import { ActualizarColaboradoresDto } from './dto/actualizar-colaboradores.dto';

@Controller('colaboradores')
@UseGuards(AuthGuard)
export class ColaboradoresController {
  constructor(private readonly colaboradoresService: ColaboradoresService) {}

  @Post()
  crearUno(@Body() data: CrearColaboradoresDto) {
    return this.colaboradoresService.crearColaborador(data);
  }

  @Get()
  buscarTodos() {
    return this.colaboradoresService.buscarColaboradores();
  }

  @Get(':numeroIdentificacion')
  buscarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.colaboradoresService.buscarColaborador(numeroIdentificacion);
  }

  @Patch(':numeroIdentificacion')
  actualizacionParcial(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Body() data: ActualizarColaboradoresDto,
  ) {
    return this.colaboradoresService.actualizarColaborador(
      numeroIdentificacion,
      data,
    );
  }

  @Delete(':numeroIdentificacion')
  borrarUno(@Param('numeroIdentificacion') numeroIdentificacion: string) {
    return this.colaboradoresService.borrarColaborador(numeroIdentificacion);
  }
}
