import { Injectable } from '@nestjs/common';
import { Colaboradores } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearColaboradoresDto } from './dto/crear-colaboradores.dto';
import { ActualizarColaboradoresDto } from './dto/actualizar-colaboradores.dto';

@Injectable()
export class ColaboradoresService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearColaborador(data: CrearColaboradoresDto): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.create({
      data,
    });
  }

  async buscarColaboradores(): Promise<Colaboradores[]> {
    const colaborador = await this.prismaService.colaboradores.findMany();
    console.log(colaborador);
    return colaborador;
  }

  async buscarColaborador(
    numeroIdentificacion: string,
  ): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.findUnique({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async actualizarColaborador(
    numeroIdentificacion: string,
    data: ActualizarColaboradoresDto,
  ): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.update({
      where: {
        numeroIdentificacion,
      },
      data,
    });
  }

  async borrarColaborador(
    numeroIdentificacion: string,
  ): Promise<Colaboradores> {
    return await this.prismaService.colaboradores.delete({
      where: {
        numeroIdentificacion,
      },
    });
  }
}
