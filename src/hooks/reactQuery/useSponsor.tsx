import { useQuery } from "@tanstack/react-query";
import { sponsorService } from "../../services";

export const useSponsor = () => {
  const sponsorQuery = useQuery({
    queryKey: ["sponsors"],
    queryFn: () => sponsorService(),
  });
  return { sponsorQuery };
};
