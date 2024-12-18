import { Injectable } from '@nestjs/common';
import { CrearHorarioDto } from './dto/crear-horario.dto';
import { ActualizarHorarioDto } from './dto/actualizar-horario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Horarios } from '@prisma/client';
import { enviroment } from 'env/enviroment';

@Injectable()
export class HorariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearHorario(data: CrearHorarioDto): Promise<Horarios> {
    return await this.prismaService.horarios.create({
      data,
    });
  }

  async crearHorarios(data: CrearHorarioDto[]) {
    return await this.prismaService.horarios.createMany({
      data,
    });
  }

  async actualizarHorario(
    numeroIdentificacion: string,
    fechaHoraIngresoProgramada: Date,
    data: ActualizarHorarioDto,
  ) {
    return await this.prismaService.horarios.update({
      where: {
        numeroIdentificacion_fechaHoraIngresoProgramada: {
          numeroIdentificacion,
          fechaHoraIngresoProgramada,
        },
      },
      data,
    });
  }

  async buscarHorario(
    numeroIdentificacion: string,
    fechaHoraIngresoProgramada: Date,
  ): Promise<Horarios> {
    return await this.prismaService.horarios.findUnique({
      where: {
        numeroIdentificacion_fechaHoraIngresoProgramada: {
          numeroIdentificacion,
          fechaHoraIngresoProgramada,
        },
      },
    });
  }

  async buscarHorariosDia(
    fechaHoraIngresoProgramada: Date,
  ): Promise<Horarios[]> {
    const baseInicial: Date = new Date(fechaHoraIngresoProgramada);
    const baseFinal: Date = new Date(fechaHoraIngresoProgramada);
    const fechaInicial: Date = new Date(
      baseInicial.setHours(0 - enviroment.offsetTime, 0, 0, 0),
    );
    const fechaFinal: Date = new Date(
      baseFinal.setHours(23 - enviroment.offsetTime, 59, 59, 999),
    );

    return await this.prismaService.horarios.findMany({
      where: {
        fechaHoraIngresoProgramada: {
          gte: fechaInicial,
          lt: fechaFinal,
        },
      },
    });
  }

  async buscarHorariosRango(
    numeroIdentificacion: string,
    fechaHoraInicial: Date,
    fechaHoraFinal: Date,
  ): Promise<Horarios[]> {
    const fechaInicialBusqueda: string = new Date(
      new Date(fechaHoraInicial).setHours(-enviroment.offsetTime),
    ).toISOString();
    const fechaFinalBusqueda: string = new Date(
      new Date(fechaHoraFinal).setHours(23 - enviroment.offsetTime, 59, 59),
    ).toISOString();

    return await this.prismaService.horarios.findMany({
      where: {
        numeroIdentificacion: {
          equals: numeroIdentificacion,
        },
        fechaHoraIngresoProgramada: {
          gte: fechaInicialBusqueda,
          lt: fechaFinalBusqueda,
        },
      },
    });
  }

  async buscarHorariosColaborador(
    numeroIdentificacion: string,
  ): Promise<Horarios[]> {
    return await this.prismaService.horarios.findMany({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async eliminarHorario(
    numeroIdentificacion: string,
    fechaHoraIngresoProgramada: Date,
  ) {
    return await this.prismaService.horarios.delete({
      where: {
        numeroIdentificacion_fechaHoraIngresoProgramada: {
          numeroIdentificacion,
          fechaHoraIngresoProgramada,
        },
      },
    });
  }
}
