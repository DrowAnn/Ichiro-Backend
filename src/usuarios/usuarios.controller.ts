import { Body, Controller, Param, Patch, UseGuards } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { ActualizarJornadaLaboralDto } from 'src/jornadas-laborales/dto/actualizar-jornada-laboral.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('usuarios')
@UseGuards(AuthGuard)
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Patch(':nombreUsuario')
  async actualizacionParcial(
    @Param('nombreUsuario') nombreUsuario: string,
    @Body() data: ActualizarJornadaLaboralDto,
  ) {
    return await this.usuariosService.actualizarUsuario(nombreUsuario, data);
  }
}
