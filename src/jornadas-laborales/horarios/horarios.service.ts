import { Injectable } from '@nestjs/common';
import { CrearHorarioDto } from './dto/crear-horario.dto';
import { ActualizarHorarioDto } from './dto/actualizar-horario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Horarios } from '@prisma/client';

@Injectable()
export class HorariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearHorario(data: CrearHorarioDto): Promise<Horarios> {
    return await this.prismaService.horarios.create({
      data,
    });
  }

  async crearHorarios(data: CrearHorarioDto[]) {
    await this.prismaService.horarios.createMany({
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
    return await this.prismaService.horarios.findMany({
      where: {
        fechaHoraIngresoProgramada,
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
