import { Module } from '@nestjs/common';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ColaboradoresModule, UsuariosModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
