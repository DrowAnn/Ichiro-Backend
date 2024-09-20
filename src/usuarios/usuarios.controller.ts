import { Body, Controller, Param, Patch } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { ActualizarJornadaLaboralDto } from 'src/jornadas-laborales/dto/actualizar-jornada-laboral.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Patch(':nombreUsuario')
  actualizacionParcial(
    @Param('nombreUsuario') nombreUsuario: string,
    @Body() data: ActualizarJornadaLaboralDto,
  ) {
    return this.usuariosService.actualizarUsuario(nombreUsuario, data);
  }
}
