import { DatosSociodemograficos } from '@prisma/client';

export class CrearDatosSociodemograficosDto implements DatosSociodemograficos {
  nombreModificadorDatosSociodemograficos: string;
  fechaUltimaModificacionDatosSociodemograficos: Date;
  numeroIdentificacion: string;
  estadoCivil: string;
  estratoSocioeconomico: number;
  tipoVivienda: string;
  grupoSanguineo: string;
  enfermedadesDiagnosticadasPermanentes: boolean;
  tiposEnfermedadesPermanentes: string;
  medicamentoRecetadoPermanente: boolean;
  tiposMedicamentosPermanentes: string;
  fuma: boolean;
  consumeBebidasAlcoholicas: boolean;
  consumeBebidasEnergeticasConstantemente: boolean;
  practicaDeportivaRegular: boolean;
  otroTrabajo: boolean;
  laboresDomesticas: boolean;
  recreacionDeporte: boolean;
  estudio: boolean;
  otraActividad: boolean;
  vacunacion: boolean;
  saludOral: boolean;
  valoracionMedicoOcupacional: boolean;
  examenesLaboratorio: boolean;
  spaRelajacionSimilar: boolean;
  actividadesSST: boolean;
  ninguna: boolean;
  cantidadDosisCovid19: number;
  ultimaAplicacion: Date;
  nombreConyuge: string;
  edadConyuge: number;
  telefonoConyuge: string;
  tieneHijos: boolean;
  cuantosHijosTiene: number;
  personasNucleoFamiliar: number;
  personasDependientesEconomicamente: number;
  parentescos: string;
  eps: string;
  fondoPension: string;
  arl: string;
  nombreContactoEmergencia: string;
  telefonoContactoEmergencia: string;
  parentescoContactoEmergencia: string;
}
