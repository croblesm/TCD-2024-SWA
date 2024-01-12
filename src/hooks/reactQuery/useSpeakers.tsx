import { useQuery } from "@tanstack/react-query";
import { speakersService } from "../../services";

export const useSpeakers = () => {
  const sponsorQuery = useQuery({
    queryKey: ["Speakers"],
    queryFn: () => speakersService(),
  });
  return { sponsorQuery };
};
