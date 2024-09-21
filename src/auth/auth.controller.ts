import { Controller, Post, Body, Patch, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuarios } from '@prisma/client';
import { LogInAuthDto } from './dto/auth-data.dto';
import { CrearUsuarioDto } from 'src/usuarios/dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from 'src/usuarios/dto/actualizar-usuario.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrar')
  async registrarUsuario(@Body() data: CrearUsuarioDto): Promise<Usuarios> {
    return await this.authService.registrarUsuario(data);
  }

  @Post('login')
  async ingresar(
    @Body() authData: LogInAuthDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.login(authData);
  }
}
