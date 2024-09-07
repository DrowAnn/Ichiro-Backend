import { Injectable } from '@nestjs/common';
import { Colaboradores } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ColaboradoresService {
  constructor(private prismaService: PrismaService) {}

  async crearColaborador(data: Colaboradores): Promise<Colaboradores> {
    return 'This action adds a new colaboradore';
  }

  async buscarColaboradores() {
    return `This action returns all colaboradores`;
  }

  async buscarColaborador(id: number) {
    return `This action returns a #${id} colaboradore`;
  }

  async actualizarColaborador(
    id: number,
    updateColaboradoreDto: UpdateColaboradoreDto,
  ) {
    return `This action updates a #${id} colaboradore`;
  }

  async borrarColaborador(id: number) {
    return `This action removes a #${id} colaboradore`;
  }
}
