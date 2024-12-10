export interface IAdministrativeCenter {
  identificador: number;
  administraProyecto: number;
  nivelAdministrativo: number;
  instanciaSuperior: number;
  nombre: string;
  nombreCorto: string;
  jefe: string;
  habilitada: number;
  correo: string;
  telefono: string;
  fax: string;
  paginaWeb: string;
  ubicacionFisica: string;
  usuarioCreacion: string;
  fechaCreacion: string;
  usuarioActualiza: string;
  fechaActualiza: string;
  codigo: string;
  identificacionJefe: string;
  cargoJefe: string;
  instanciaAdministradora: 54321;
  esEspecial: string;
  devolucionEntreInstancias: 1;
  dependenciaPlanview: string;
  identificadorPlanview: number;
}
