import { UsuariosService } from 'src/usuarios/usuarios.service';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Usuarios } from '@prisma/client';
import { LogInAuthDto } from './dto/auth-data.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CrearUsuarioDto } from 'src/usuarios/dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from 'src/usuarios/dto/actualizar-usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async registrarUsuario(data: CrearUsuarioDto): Promise<Usuarios> {
    const usuario = await this.usuariosService.buscarUsuario(
      data.nombreUsuario,
    );

    if (usuario) {
      throw new BadRequestException(
        'El usuario que intenta registrar ya existe',
      );
    }

    data = {
      ...data,
      contrasena: await bcrypt.hash(data.contrasena, 10),
    };

    return await this.usuariosService.crearUsuario(data);
  }

  async login(authData: LogInAuthDto): Promise<{ accessToken: string }> {
    const usuario = await this.usuariosService.buscarUsuario(
      authData.nombreUsuario,
    );

    if (!usuario) {
      throw new UnauthorizedException('El usuario NO existe');
    }

    if (!(await bcrypt.compare(authData.contrasena, usuario.contrasena))) {
      throw new UnauthorizedException('Contraseña Incorrecta');
    }

    const payload = { nombreUsuario: usuario.nombreUsuario, rol: usuario.rol };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  async actualizarUsuario(
    nombreUsuario: string,
    data: ActualizarUsuarioDto,
  ): Promise<Usuarios> {
    return await this.usuariosService.actualizarUsuario(nombreUsuario, data);
  }
}
