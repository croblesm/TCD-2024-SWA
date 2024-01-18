import { FC } from "react";
import { Session } from "../../interfaces";
import { LevelSnack, SessionTypeSnack } from ".";
import { formatDuration } from "../../utils";

interface SessionCardProps {
  session: Session;
}

export const SessionCard: FC<SessionCardProps> = ({ session }) => {
  const {
    description,
    duration,
    firstName,
    lastName,
    level,
    photoUrl,
    sessionType,
    title,
  } = session;
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-52 h-72 ">
          <img
            src={photoUrl as string | undefined}
            alt={firstName}
            className="object-cover rounded-2xl h-full min-w-52 min-h-72"
          />
        </div>
        <div>
          <div>
            <p className="text-3xl font-bold">{title}</p>
            <p className="text-lg mt-4">{`${firstName} ${lastName}`}</p>
            <p className="mt-2">{description}</p>
            <div className="flex flex-wrap gap-6 mt-6 items-center">
              <LevelSnack level={level} />
              <SessionTypeSnack sessionType={sessionType} type="secondary" />
              <p>{`Duración: ${formatDuration(duration)} hrs`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
