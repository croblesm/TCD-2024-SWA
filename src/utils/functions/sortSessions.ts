import { IAgendaResponse, ISessionGroup } from "../../interfaces";

const roomPriority: Record<string, number> = {
  "Lobby Centro TICS": 1,
  "Patio Centro TICS": 2,
  Auditorio: 3,
  "Aula 201": 4,
  "Aula 202": 5,
};

const getRoomPriority = (room: string): number => {
  // Retorna la prioridad de la sala o un número grande si la sala no está definida
  return roomPriority[room] || 999;
};
export const sortSessions = (sesiones: IAgendaResponse[]): ISessionGroup[] => {
  // Ordenar sesiones por 'startTime' y luego por 'endTime'
  sesiones.sort((a, b) => {
    const startComparison =
      new Date(a.startTime).getTime() - new Date(b.startTime).getTime();
    if (startComparison !== 0) return startComparison;
    return new Date(a.endTime).getTime() - new Date(b.endTime).getTime();
  });

  const sesionesAgrupadas: ISessionGroup[] = [];

  for (const sesion of sesiones) {
    const startTime = sesion.startTime;
    const endTime = sesion.endTime;

    // Encuentra un grupo existente o crea uno nuevo
    let grupo = sesionesAgrupadas.find((g) => g.horarioInicio === startTime);
    if (!grupo) {
      grupo = { horarioInicio: startTime, horarioFin: endTime, sesiones: [] };
      sesionesAgrupadas.push(grupo);
    }

    grupo.sesiones.push(sesion);
    // Actualiza 'horarioFin' si la sesión actual termina más tarde
    if (new Date(endTime) > new Date(grupo.horarioFin)) {
      grupo.horarioFin = endTime;
    }

    // Ordenar sesiones por prioridad de sala
    grupo.sesiones.sort(
      (a, b) => getRoomPriority(a.room) - getRoomPriority(b.room)
    );
  }

  // Asignar el rowSpan adecuado a cada sesión
  for (const grupo of sesionesAgrupadas) {
    for (const sesion of grupo.sesiones) {
      const sesionEndTime = new Date(sesion.endTime);
      sesion.rowSpan = sesionesAgrupadas.filter(
        (g) =>
          new Date(g.horarioInicio) < sesionEndTime &&
          new Date(g.horarioInicio) >= new Date(sesion.startTime)
      ).length;
    }
  }

  return sesionesAgrupadas;
};
