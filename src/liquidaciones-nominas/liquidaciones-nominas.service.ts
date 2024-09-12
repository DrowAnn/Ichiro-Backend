import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearLiquidacionNominaDto } from './dto/crear-liquidacion-nomina.dto';
import { LiquidacionesNomina } from '@prisma/client';
import { ActualizarLiquidacionNominaDto } from './dto/actualizar-liquidacion-nomina.dto';

@Injectable()
export class LiquidacionesNominasService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearLiquidacionNomina(
    data: CrearLiquidacionNominaDto,
  ): Promise<LiquidacionesNomina> {
    return await this.prismaService.liquidacionesNomina.create({
      data,
    });
  }

  async buscarLiquidacionesNominas(): Promise<LiquidacionesNomina[]> {
    return await this.prismaService.liquidacionesNomina.findMany();
  }

  async buscarTodasLiquidacionesNominasColaborador(
    numeroIdentificacion: string,
  ): Promise<LiquidacionesNomina[]> {
    return await this.prismaService.liquidacionesNomina.findMany({
      where: {
        numeroIdentificacion,
      },
    });
  }

  async buscarTodasLiquidacionesNominasColaboradorAño(
    numeroIdentificacion: string,
    ano: number,
  ): Promise<LiquidacionesNomina[]> {
    return await this.prismaService.liquidacionesNomina.findMany({
      where: {
        AND: [{ numeroIdentificacion }, { ano }],
      },
    });
  }

  async buscarTodasLiquidacionesNominasColaboradorMes(
    numeroIdentificacion: string,
    ano: number,
    mes: number,
  ): Promise<LiquidacionesNomina[]> {
    return await this.prismaService.liquidacionesNomina.findMany({
      where: {
        AND: [{ numeroIdentificacion }, { ano }, { mes }],
      },
    });
  }

  async buscarLiquidacionNomina(
    numeroIdentificacion: string,
    mes: number,
    ano: number,
    quincena: number,
  ): Promise<LiquidacionesNomina> {
    return await this.prismaService.liquidacionesNomina.findUnique({
      where: {
        numeroIdentificacion_mes_ano_quincena: {
          numeroIdentificacion,
          mes,
          ano,
          quincena,
        },
      },
    });
  }

  async actualizarLiquidacionNomina(
    numeroIdentificacion: string,
    mes: number,
    ano: number,
    quincena: number,
    data: ActualizarLiquidacionNominaDto,
  ): Promise<LiquidacionesNomina> {
    return await this.prismaService.liquidacionesNomina.update({
      where: {
        numeroIdentificacion_mes_ano_quincena: {
          numeroIdentificacion,
          mes,
          ano,
          quincena,
        },
      },
      data,
    });
  }

  async borrarLiquidacionNomina(
    numeroIdentificacion: string,
    mes: number,
    ano: number,
    quincena: number,
  ): Promise<LiquidacionesNomina> {
    return await this.prismaService.liquidacionesNomina.delete({
      where: {
        numeroIdentificacion_mes_ano_quincena: {
          numeroIdentificacion,
          mes,
          ano,
          quincena,
        },
      },
    });
  }
}
