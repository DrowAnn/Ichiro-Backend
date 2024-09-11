import { Usuarios } from '@prisma/client';

export class CrearUsuarioDto implements Usuarios {
  nombreUsuario: string;
  correo: string;
  numeroIdentificacion: string;
  contrasena: string;
  rol: string;
}
