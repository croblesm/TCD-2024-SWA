import { FC } from "react";
import { Level } from "../../interfaces";

interface LevelSnackProps {
  level: Level | null;
}

export const LevelSnack: FC<LevelSnackProps> = ({ level }) => {
  return (
    <span
      className={`text-xs ${
        level === "Avanzado"
          ? "text-red-500"
          : level === "Intermedio"
          ? "text-yellow-500"
          : "text-green-500"
      } font-bold block mt-1`}
    >
      {level}
    </span>
  );
};
