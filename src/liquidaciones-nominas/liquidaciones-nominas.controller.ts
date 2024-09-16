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
import { LiquidacionesNominasService } from './liquidaciones-nominas.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { CrearLiquidacionNominaDto } from './dto/crear-liquidacion-nomina.dto';
import { PrimaryKeyLiquidacionNominaDto } from './dto/primarykey-liquidacion-nomina.dto';
import { ActualizarLiquidacionNominaDto } from './dto/actualizar-liquidacion-nomina.dto';

@Controller('liquidaciones-nominas')
@UseGuards(AuthGuard)
export class LiquidacionesNominasController {
  constructor(
    private readonly liquidacionesNominasService: LiquidacionesNominasService,
  ) {}

  @Post()
  crearUna(@Body() data: CrearLiquidacionNominaDto) {
    return this.liquidacionesNominasService.crearLiquidacionNomina(data);
  }

  @Get()
  buscarTodas() {
    return this.liquidacionesNominasService.buscarLiquidacionesNominas();
  }

  @Get(':numeroIdentificacion')
  buscarTodasColaborador(
    @Param('numeroIdentificacion') numeroIdentificacion: string,
  ) {
    return this.liquidacionesNominasService.buscarTodasLiquidacionesNominasColaborador(
      numeroIdentificacion,
    );
  }

  @Get(':numeroIdentificacion/:ano')
  buscarTodasColaboradorAño(@Param() params: any) {
    const { numeroIdentificacion, ano } = params;
    return this.liquidacionesNominasService.buscarTodasLiquidacionesNominasColaboradorAño(
      numeroIdentificacion,
      ano,
    );
  }

  @Get(':numeroIdentificacion/:ano/:mes')
  buscarTodasColaboradorMes(@Param() params: any) {
    const { numeroIdentificacion, ano, mes } = params;
    return this.liquidacionesNominasService.buscarTodasLiquidacionesNominasColaboradorMes(
      numeroIdentificacion,
      ano,
      mes,
    );
  }

  @Get(':numeroIdentificacion/:mes/:ano/:quincena')
  buscarUna(@Param() params: PrimaryKeyLiquidacionNominaDto) {
    const { numeroIdentificacion, mes, ano, quincena } = params;
    return this.liquidacionesNominasService.buscarLiquidacionNomina(
      numeroIdentificacion,
      mes,
      ano,
      quincena,
    );
  }

  @Patch(':numeroIdentificacion/:mes/:ano/:quincena')
  actualizacionParcial(
    @Param() params: PrimaryKeyLiquidacionNominaDto,
    @Body() data: ActualizarLiquidacionNominaDto,
  ) {
    const { numeroIdentificacion, mes, ano, quincena } = params;
    return this.liquidacionesNominasService.actualizarLiquidacionNomina(
      numeroIdentificacion,
      mes,
      ano,
      quincena,
      data,
    );
  }

  @Delete(':numeroIdentificacion/:mes/:ano/:quincena')
  borrarLiquidacionNomina(@Param() params: PrimaryKeyLiquidacionNominaDto) {
    const { numeroIdentificacion, mes, ano, quincena } = params;
    return this.liquidacionesNominasService.borrarLiquidacionNomina(
      numeroIdentificacion,
      mes,
      ano,
      quincena,
    );
  }
}
