import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { CrearHorarioDto } from './dto/crear-horario.dto';
import { ActualizarHorarioDto } from './dto/actualizar-horario.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('horarios')
@UseGuards(AuthGuard)
export class HorariosController {
  constructor(private readonly horariosService: HorariosService) {}

  @Post()
  crearUno(@Body() data: CrearHorarioDto) {
    return this.horariosService.crearHorario(data);
  }

  @Post()
  crearVarios(@Body() data: CrearHorarioDto[]) {
    return this.horariosService.crearHorarios(data);
  }

  @Patch(':numeroIdentificacion')
  actualizarUno(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('fechaHoraIngresoProgramada') fechaHoraIngresoProgramada: Date,
    @Body() data: ActualizarHorarioDto,
  ) {
    return this.horariosService.actualizarHorario(
      numeroIdentificacion,
      fechaHoraIngresoProgramada,
      data,
    );
  }

  @Get(':numeroIdentificacion')
  buscarUno(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('fechaHoraIngresoProgramada') fechaHoraIngresoProgramada: Date,
  ) {
    return this.horariosService.buscarHorario(
      numeroIdentificacion,
      fechaHoraIngresoProgramada,
    );
  }

  @Get('dias')
  buscarUnoDia(
    @Query('fechaHoraIngresoProgramadan') fechaHoraIngresoProgramada: Date,
  ) {
    return this.horariosService.buscarHorariosDia(fechaHoraIngresoProgramada);
  }

  @Get(':numeroIdentificacion')
  buscarColaborador(@Param('numeroIdentificacion') numerIdenticacion: string) {
    return this.horariosService.buscarHorariosColaborador(numerIdenticacion);
  }

  @Delete(':numeroIdentificacion')
  remove(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('fechaHoraIngresoProgramadan') fechaHoraIngresoProgramadan: Date,
  ) {
    return this.horariosService.eliminarHorario(
      numeroIdentificacion,
      fechaHoraIngresoProgramadan,
    );
  }
}
