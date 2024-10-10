import { Module } from '@nestjs/common';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { DatosSociodemograficosModule } from './datos-sociodemograficos/datos-sociodemograficos.module';
import { HorariosModule } from './jornadas-laborales/horarios/horarios.module';
import { AuditoriasHorariosModule } from './jornadas-laborales/auditorias-horarios/auditorias-horarios.module';
import { LiquidacionesHorasModule } from './jornadas-laborales/liquidaciones-horas/liquidaciones-horas.module';
import { LiquidacionesNominasModule } from './liquidaciones-nominas/liquidaciones-nominas.module';
import { DatosHijosModule } from './datos-hijos/datos-hijos.module';

@Module({
  imports: [
    ColaboradoresModule,
    UsuariosModule,
    AuthModule,
    DatosSociodemograficosModule,
    DatosHijosModule,
    HorariosModule,
    AuditoriasHorariosModule,
    LiquidacionesHorasModule,
    LiquidacionesNominasModule,
  ],
})
export class AppModule {}
