import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearDatosSociodemograficosDto } from './dto/crear-datos-sociodemograficos.dto';
import { DatosSociodemograficos } from '@prisma/client';
import { ActualizarDatosSociodemograficosDto } from './dto/actualizar-datos-sociodemograficos.dto';

@Injectable()
export class DatosSociodemograficosService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearDatosSociodemograficos(
    data: CrearDatosSociodemograficosDto,
  ): Promise<DatosSociodemograficos> {
    return await this.prismaService.datosSociodemograficos.create({
      data,
    });
  }

  async buscarDatosSociodemograficosColaboradores(): Promise<
    DatosSociodemograficos[]
  > {
    return await this.prismaService.datosSociodemograficos.findMany();
  }

  async buscarDatosSociodemograficosColaborador(
    numeroIdentificacion: string,
  ): Promise<DatosSociodemograficos> {
    return await this.prismaService.datosSociodemograficos.findUnique({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async actualizarDatosSociodemograficos(
    numeroIdentificacion: string,
    data: ActualizarDatosSociodemograficosDto,
  ): Promise<DatosSociodemograficos> {
    return await this.prismaService.datosSociodemograficos.update({
      where: {
        numeroIdentificacion,
      },
      data,
    });
  }

  async borrarDatosSociodemograficos(
    numeroIdentificacion: string,
  ): Promise<DatosSociodemograficos> {
    return await this.prismaService.datosSociodemograficos.delete({
      where: {
        numeroIdentificacion,
      },
    });
  }
}
