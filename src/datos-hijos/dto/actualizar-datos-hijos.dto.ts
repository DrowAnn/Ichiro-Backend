import { PartialType } from '@nestjs/mapped-types';
import { CrearDatosHijosDto } from './crear-datos-hijos.dto';

export class ActualizarDatosHijosDto extends PartialType(CrearDatosHijosDto) {}
