import { Module } from '@nestjs/common';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';

@Module({
  imports: [ColaboradoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
