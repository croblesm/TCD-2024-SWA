import { IAgendaResponse } from "../interfaces/IAgendaResponse.interface";
import tcdApi from "../libs/axios/tcdApi";
import { keyApiEnum } from "../utils";

export const agendaService = async () => {
  const { data } = await tcdApi.get<IAgendaResponse[]>("/agenda/null", {
    params: {
      code: keyApiEnum.agenda,
    },
  });

  return data;
};
