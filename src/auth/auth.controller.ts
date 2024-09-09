import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Usuarios } from '@prisma/client';
import { LogInAuthDto } from './dto/auth-data.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrar')
  async crearUno(@Body() data: Usuarios): Promise<Usuarios> {
    return await this.authService.registrar(data);
  }

  @Post('login')
  async ingresar(
    @Body() authData: LogInAuthDto,
  ): Promise<{ accessToken: string }> {
    return await this.authService.login(authData);
  }
}
