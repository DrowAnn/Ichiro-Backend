import { Injectable } from '@nestjs/common';
import { Colaboradores } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColaboradoresService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearColaborador(data: Colaboradores): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.create({
      data,
    });
  }

  async buscarColaboradores(): Promise<Colaboradores[]> {
    return await this.prismaService.colaboradores.findMany();
  }

  async buscarColaborador(
    numeroIdentificacion: number,
  ): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.findUnique({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async actualizarColaborador(
    numeroIdentificacion: number,
    data: Colaboradores,
  ): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.update({
      where: {
        numeroIdentificacion,
      },
      data,
    });
  }

  async borrarColaborador(numeroIdentificacion: number) {
    return await this.prismaService.colaboradores.delete({
      where: {
        numeroIdentificacion,
      },
    });
  }
}
