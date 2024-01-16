import { Button } from "@mui/material";

export const About = () => {
  return (
    <div className="min-h-[30vh] my-20 ">
      <div className="flex items-center flex-col">
        <div className="text-center max-w-6xl ">
          <div className="text-3xl sm:text-5xl text-tech-blue-800 font-bold">
            <p className="text-3xl sm:text-5xl text-tech-blue-800 font-bold ">
              <Button type="button" variant="contained">
                <a
                  href="https://www.meetup.com/techcommunitygt/events/297288870"
                  className="text-3xl sm:text-5xl  font-bold "
                  target="_blank">
                  <p className="text-3xl sm:text-5xl p-4 font-bold" style={{ textTransform: 'none' }}>
                    Registrate aqui!
                  </p>
                </a>
              </Button>
            </p>
          </div>
          <br />
          <div className="text-lg mt-4 text-tech-gray-700 flex flex-col gap-4 text-center">
            <p>
              Únete a{" "}
              <a
                href="https://linktr.ee/techcommunity"
                target="_blank"
                className="font-bold text-tech-blue-800 underline"
              >
                Tech Community
              </a>{" "}
              en la conferencia diseñada especialmente para la comunidad de
              tecnología más grande de Guatemala 🇬🇹. Este evento{" "}
              <span className="font-bold text-tech-blue-800">gratuito</span> te
              ofrece un día lleno de conocimiento, colaboración y valiosas
              oportunidades para avanzar en tu carrera profesional.
            </p>
            <p>
              Explora las últimas tendencias en Cloud Computing, Desarrollo de
              Software, DevOps y Datos e IA a través de nuestros diversas
              sesiones impartidas por expertos en tecnologia.
            </p>
            <p>
              ¡Te esperamos este 27 de Enero en{" "}
              <a
                href="https://www.google.com/maps/search/?api=1&query=14.624682%2C%20-90.51306"
                className="font-bold text-tech-blue-800 underline"
                target="_blank"
              >
                INTECAP - Centro TICs
              </a>{" "}
              para celebrar juntos la innovación y el conocimiento! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
