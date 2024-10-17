import { Horarios } from '@prisma/client';

export class CrearHorarioDto implements Horarios {
  numeroIdentificacion: string;
  fechaHoraIngresoProgramada: Date;
  fechaHoraSalidaProgramada: Date;
  horaDesayuno: string;
  tiempoDesayuno: number;
  horaAlmuerzo: string;
  tiempoAlmuerzo: number;
  horaCena: string;
  tiempoCena: number;
  horaOtroReceso: string;
  tiempoReceso: number;
  horasProgramadas: number;
  areaFuncionProgramada: string;
  observacionNovedadesHorarios: string;
  nombreModificadorHorarios: string;
  fechaUltimaModificacionHorarios: Date;
}
