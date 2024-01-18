import { ModalSesion } from ".";
import { useAgenda } from "../../../hooks";
import { sortSessions } from "../../../utils/functions/sortSessions";
import { Table } from "../../UI";

export const Agenda = () => {
  const { agendaQuery } = useAgenda();
  return (
    <>
      <div className="container mx-auto my-20">
        {agendaQuery.data != null && (
          <Table sessionsGroup={sortSessions(agendaQuery.data)} />
        )}
      </div>
      <ModalSesion />
    </>
  );
};
