import { useQuery } from "@tanstack/react-query";
import { agendaService } from "../../services";

export const useAgenda = () => {
  const agendaQuery = useQuery({
    queryKey: ["Agenda"],
    queryFn: () => agendaService(),
  });
  return { agendaQuery };
};
