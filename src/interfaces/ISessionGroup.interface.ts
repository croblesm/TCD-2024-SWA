import { IAgendaResponse } from "./IAgendaResponse.interface";

export interface ISessionGroup {
  horarioInicio: string;
  horarioFin: string;
  sesiones: IAgendaResponse[];
}
