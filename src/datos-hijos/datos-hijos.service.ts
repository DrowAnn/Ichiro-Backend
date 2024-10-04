import { Injectable } from '@nestjs/common';
import { DatosHijos } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearDatosHijosDto } from './dto/crear-datos-hijos.dto';
import { ActualizarDatosHijosDto } from './dto/actualizar-datos-hijos.dto';

@Injectable()
export class DatosHijosService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearDatosHijos(data: CrearDatosHijosDto): Promise<DatosHijos> {
    return await this.prismaService.datosHijos.create({ data });
  }

  async obtenerTodosHijos(): Promise<DatosHijos[]> {
    return await this.prismaService.datosHijos.findMany();
  }

  async obtenerTodosHijosColaborador(
    numeroIdentificacion: string,
  ): Promise<DatosHijos[]> {
    return await this.prismaService.datosHijos.findMany({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async obtenerHijoColaborador(
    numeroIdentificacion: string,
    identificacionHijo: string,
  ): Promise<DatosHijos> {
    return await this.prismaService.datosHijos.findUnique({
      where: {
        numeroIdentificacion_identificacionHijo: {
          numeroIdentificacion,
          identificacionHijo,
        },
      },
    });
  }

  async actualizarHijo(
    numeroIdentificacion: string,
    identificacionHijo: string,
    data: ActualizarDatosHijosDto,
  ): Promise<DatosHijos> {
    return await this.prismaService.datosHijos.update({
      where: {
        numeroIdentificacion_identificacionHijo: {
          numeroIdentificacion,
          identificacionHijo,
        },
      },
      data,
    });
  }

  async borrarHijo(
    numeroIdentificacion: string,
    identificacionHijo: string,
  ): Promise<DatosHijos> {
    return this.prismaService.datosHijos.delete({
      where: {
        numeroIdentificacion_identificacionHijo: {
          numeroIdentificacion,
          identificacionHijo,
        },
      },
    });
  }
}
