import { Module } from '@nestjs/common';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { DatosSociodemograficosModule } from './datos-sociodemograficos/datos-sociodemograficos.module';
import { JornadasLaboralesModule } from './jornadas-laborales/jornadas-laborales.module';
import { LiquidacionesNominasModule } from './liquidaciones-nominas/liquidaciones-nominas.module';

@Module({
  imports: [ColaboradoresModule, UsuariosModule, AuthModule, DatosSociodemograficosModule, JornadasLaboralesModule, LiquidacionesNominasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
