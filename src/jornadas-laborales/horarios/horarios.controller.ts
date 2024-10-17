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

  @Post('crear-varios')
  crearVarios(@Body() data: CrearHorarioDto[]) {
    return this.horariosService.crearHorarios(data);
  }

  @Patch('colaborador/:numeroIdentificacion')
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

  @Get('dias')
  buscarUnoDia(
    @Query('fechaHoraIngresoProgramada') fechaHoraIngresoProgramada: Date,
  ) {
    return this.horariosService.buscarHorariosDia(fechaHoraIngresoProgramada);
  }

  @Get('individual/:numeroIdentificacion')
  buscarUno(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
    @Query('fechaHoraIngresoProgramada') fechaHoraIngresoProgramada: Date,
  ) {
    return this.horariosService.buscarHorario(
      numeroIdentificacion,
      fechaHoraIngresoProgramada,
    );
  }

  @Get('colaborador/:numeroIdentificacion')
  buscarColaborador(@Param('numeroIdentificacion') numerIdenticacion: string) {
    return this.horariosService.buscarHorariosColaborador(numerIdenticacion);
  }

  @Delete('colaborador/:numeroIdentificacion')
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
