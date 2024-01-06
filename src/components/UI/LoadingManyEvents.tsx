import { LoadingEvent } from "./LoadingEvent";

export const LoadingManyEvents = () => {
  return (
    <div className="min-h-[30vh] mt-20 ">
      <div className="flex items-center flex-col">
        <p className="text-4xl sm:text-6xl text-tech-blue-800 font-bold">
          Últimas actividades
        </p>
      </div>
      <div className="flex flex-wrap justify-center ">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <LoadingEvent key={number} />
        ))}
      </div>
    </div>
  );
};
