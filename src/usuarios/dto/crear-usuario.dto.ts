import { $Enums, Usuarios } from '@prisma/client';

export class CrearUsuarioDto implements Usuarios {
  nombreModificadorUsuario: string;
  fechaUltimaModificacionUsuario: Date;
  nombreUsuario: string;
  correo: string;
  numeroIdentificacion: string;
  contrasena: string;
  rol: $Enums.Roles;
}
