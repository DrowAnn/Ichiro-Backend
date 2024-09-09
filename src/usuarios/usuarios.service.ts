import { Usuarios } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearUsuario(data: Usuarios): Promise<Usuarios> {
    return await this.prismaService.usuarios.create({
      data,
    });
  }

  async buscarUsuarios(): Promise<Usuarios[]> {
    return await this.prismaService.usuarios.findMany();
  }

  async buscarUsuario(correo: string): Promise<Usuarios> {
    return await this.prismaService.usuarios.findUnique({
      where: {
        correo,
      },
    });
  }

  async actualizarUsuario(correo: string, data: Usuarios): Promise<Usuarios> {
    return await this.prismaService.usuarios.update({
      where: {
        correo,
      },
      data,
    });
  }

  async borrarUsuario(correo: string) {
    return await this.prismaService.usuarios.delete({
      where: {
        correo,
      },
    });
  }
}
