import { FC } from "react";
import { ISessionGroup, SessionType } from "../../interfaces";
import { formatToTimeZone } from "../../utils";

interface TableProps {
  sessionsGroup: ISessionGroup[];
}

export const Table: FC<TableProps> = ({ sessionsGroup }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Horario
            </th>
            <th scope="col" className="px-6 py-3">
              Sesión 1
            </th>
            <th scope="col" className="px-6 py-3">
              Sesión 2
            </th>
            <th scope="col" className="px-6 py-3">
              Sesión 3
            </th>
          </tr>
        </thead>
        <tbody>
          {sessionsGroup.map((sessionGroup) => (
            <RowTable
              key={sessionGroup.horarioInicio}
              sessionGroup={sessionGroup}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface RowTableProps {
  sessionGroup: ISessionGroup;
}

const RowTable: FC<RowTableProps> = ({ sessionGroup }) => {
  const sesiones = new Array(3)
    .fill(null)
    .map((_, index) => sessionGroup.sesiones[index]);
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {`${formatToTimeZone(sessionGroup.horarioInicio)} - ${formatToTimeZone(
          sessionGroup.horarioFin
        )}`}
      </th>
      {sesiones.map((session, index) => (
        <td
          className="px-6 py-4"
          key={`session-${sessionGroup.horarioInicio}-${index}`}
        >
          {session ? (
            <>
              <span className="text-white font-semibold">
                {session.session.title}
              </span>
              <span className="text-xs text-gray-500 block">
                {session.room}
              </span>
              <span
                className={`text-xs ${
                  session.session.level === "Avanzado"
                    ? "text-red-500"
                    : session.session.level === "Intermedio"
                    ? "text-yellow-500"
                    : "text-green-500"
                } font-bold block mt-1`}
              >
                {session.session.level}
              </span>
              <span
                className={`text-xs font-bold block mt-1 ${
                  session.session.sessionType === SessionType.Workshop
                    ? "bg-blue-100 text-blue-800"
                    : session.session.sessionType === SessionType.SesionCorta
                    ? "bg-pink-100 text-pink-800"
                    : session.session.sessionType === SessionType.SesionRegular
                    ? "bg-purple-100 text-purple-800"
                    : ""
                } px-2 py-1 inline-block rounded-full`}
              >
                {session.session.sessionType}
              </span>
            </>
          ) : (
            ""
          )}
        </td>
      ))}
    </tr>
  );
};
