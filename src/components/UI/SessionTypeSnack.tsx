import { FC } from "react";
import { SessionType } from "../../interfaces";

interface SessionTypeSnackProps {
  sessionType: SessionType | null;
  type?: "primary" | "secondary";
}

export const SessionTypeSnack: FC<SessionTypeSnackProps> = ({
  sessionType,
  type = "primary",
}) => {
  return (
    <span
      className={`text-xs font-bold block mt-1 ${
        sessionType === SessionType.Workshop
          ? `${type === "primary" ? "bg-blue-100" : "bg-blue-800"} ${
              type === "primary" ? "text-blue-800" : "text-blue-100"
            }`
          : sessionType === SessionType.SesionAlterna
          ? `${type === "primary" ? "bg-pink-100" : "bg-pink-800"} 
          ${type === "primary" ? "text-pink-800" : "text-pink-100"}`
          : sessionType === SessionType.SesionRegular
          ? `${type === "primary" ? "bg-purple-100" : "bg-purple-800"} 
          ${type === "primary" ? "text-purple-800" : "text-purple-100"}`
          : ""
      } px-2 py-1 inline-block rounded-full text-center`}
    >
      {sessionType}
    </span>
  );
};
