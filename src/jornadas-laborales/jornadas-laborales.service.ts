import { Injectable } from '@nestjs/common';
import { JornadasLaborales } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearJornadaLaboralDto } from './dto/crear-jornada-laboral.dto';
import { ActualizarJornadaLaboralDto } from './dto/actualizar-jornada-laboral.dto';

@Injectable()
export class JornadasLaboralesService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearJornadaLaboral(
    data: CrearJornadaLaboralDto,
  ): Promise<JornadasLaborales> {
    return await this.prismaService.jornadasLaborales.create({
      data,
    });
  }

  async buscarJornadasLaborales(): Promise<JornadasLaborales[]> {
    return await this.prismaService.jornadasLaborales.findMany();
  }

  async buscarJornadasLaboralesColaborador(
    numeroIdentificacion: string,
  ): Promise<JornadasLaborales[]> {
    return await this.prismaService.jornadasLaborales.findMany({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async buscarJornadaLaboral(
    numeroIdentificacion: string,
    diaJornada: Date,
  ): Promise<JornadasLaborales> {
    return await this.prismaService.jornadasLaborales.findUnique({
      where: {
        numeroIdentificacion_diaJornada: {
          numeroIdentificacion,
          diaJornada,
        },
      },
    });
  }

  async actualizarJornadaLaboral(
    numeroIdentificacion: string,
    diaJornada: Date,
    data: ActualizarJornadaLaboralDto,
  ): Promise<JornadasLaborales> {
    return await this.prismaService.jornadasLaborales.update({
      where: {
        numeroIdentificacion_diaJornada: {
          numeroIdentificacion,
          diaJornada,
        },
      },
      data,
    });
  }

  async borrarJornadaLaboral(
    numeroIdentificacion: string,
    diaJornada: Date,
  ): Promise<JornadasLaborales> {
    return await this.prismaService.jornadasLaborales.delete({
      where: {
        numeroIdentificacion_diaJornada: {
          numeroIdentificacion,
          diaJornada,
        },
      },
    });
  }
}
