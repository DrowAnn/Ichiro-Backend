import { Usuarios } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prismaService: PrismaService) {}

  async crearUsuario(data: CrearUsuarioDto): Promise<Usuarios> {
    return await this.prismaService.usuarios.create({
      data,
    });
  }

  async buscarUsuarios(): Promise<Usuarios[]> {
    return await this.prismaService.usuarios.findMany();
  }

  async buscarUsuario(nombreUsuario: string): Promise<Usuarios> {
    return await this.prismaService.usuarios.findUnique({
      where: {
        nombreUsuario,
      },
    });
  }

  async actualizarUsuario(
    nombreUsuario: string,
    data: ActualizarUsuarioDto,
  ): Promise<Usuarios> {
    return await this.prismaService.usuarios.update({
      where: {
        nombreUsuario,
      },
      data,
    });
  }

  async borrarUsuario(nombreUsuario: string) {
    return await this.prismaService.usuarios.delete({
      where: {
        nombreUsuario,
      },
    });
  }
}
