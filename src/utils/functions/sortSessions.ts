import { IAgendaResponse, ISessionGroup } from "../../interfaces";

const roomPriority: Record<string, number> = {
  "Lobby Centro TICs": 1,
  "Patio Centro TICs": 2,
  Auditorio: 3,
  "Salon Atitlan": 4,
  "Salon Peten": 5,
};

const getRoomPriority = (room: string): number => {
  // Retorna la prioridad de la sala o un número grande si la sala no está definida
  return roomPriority[room] || 999;
};

export const sortSessions = (sesiones: IAgendaResponse[]): ISessionGroup[] => {
  // Paso 1: Ordenar por 'startTime'
  const sesionesOrdenadas = sesiones.sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
  );

  // Paso 2: Agrupar por 'startTime'
  const sesionesAgrupadas = sesionesOrdenadas.reduce<
    Record<string, IAgendaResponse[]>
  >((acc, sesion) => {
    const fechaInicio = sesion.startTime;
    if (!acc[fechaInicio]) {
      acc[fechaInicio] = [];
    }
    acc[fechaInicio].push(sesion);
    return acc;
  }, {});

  // Paso 3: Crear la estructura deseada
  const resultado = Object.keys(sesionesAgrupadas).map((fechaInicio) => {
    let sesionesEnGrupo = sesionesAgrupadas[fechaInicio];

    // Paso 3.1: Ordenar sesiones por prioridad de sala
    sesionesEnGrupo = sesionesEnGrupo.sort((a, b) => {
      return getRoomPriority(a.room) - getRoomPriority(b.room);
    });

    // Paso 3.2: Encontrar el 'endTime' más tardío en el grupo
    const horarioFin = sesionesEnGrupo.reduce((ultimoFin, sesion) => {
      return sesion.endTime > ultimoFin ? sesion.endTime : ultimoFin;
    }, sesionesEnGrupo[0].endTime);

    return {
      horarioInicio: fechaInicio,
      horarioFin,
      sesiones: sesionesEnGrupo,
    };
  });

  return resultado;
};
