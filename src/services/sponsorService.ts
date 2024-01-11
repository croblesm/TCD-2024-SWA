import { SponsorAPI } from "../interfaces";
import tcdApi from "../libs/axios/tcdApi";
import { keyApiEnum } from "../utils";

export const sponsorService = async () => {
  const { data } = await tcdApi.get<SponsorAPI[]>("/sponsors/null", {
    params: {
      code: keyApiEnum.sponsors,
    },
  });

  return data;
};
