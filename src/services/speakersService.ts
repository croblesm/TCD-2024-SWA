import { ISpeakerResponse } from "../interfaces";
import tcdApi from "../libs/axios/tcdApi";
import { keyApiEnum } from "../utils";

export const speakersService = async () => {
  const { data } = await tcdApi.get<ISpeakerResponse[]>("speakers/null", {
    params: {
      code: keyApiEnum.speakers,
    },
  });

  return data;
};
