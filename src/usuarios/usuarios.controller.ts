import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('usuarios')
@UseGuards(AuthGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Patch(':nombreUsuario')
  async actualizacionParcial(
    @Param('nombreUsuario') nombreUsuario: string,
    @Body() data: ActualizarUsuarioDto,
  ) {
    return await this.usuariosService.actualizarUsuario(nombreUsuario, data);
  }
}
