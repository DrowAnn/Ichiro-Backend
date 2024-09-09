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

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuariosService,
    private readonly jwtService: JwtService,
  ) {}

  async registrar(data: Usuarios): Promise<Usuarios> {
    const usuario = await this.usuariosService.buscarUsuario(data.correo);

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
    const usuario = await this.usuariosService.buscarUsuario(authData.correo);

    if (!usuario) {
      throw new UnauthorizedException('El usuario NO existe');
    }

    if (!(await bcrypt.compare(authData.contrasena, usuario.contrasena))) {
      throw new UnauthorizedException('Contraseña Incorrecta');
    }

    const payload = { id: usuario.id, correo: usuario.correo };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
