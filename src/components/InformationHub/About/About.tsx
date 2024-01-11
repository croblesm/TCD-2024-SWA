export const About = () => {
  return (
    <div className="min-h-[30vh] mt-20 ">
      <div className="flex items-center flex-col">
        <div className="text-center max-w-6xl ">
          <div className="text-3xl sm:text-5xl text-tech-blue-800 font-bold">
            <p className="text-3xl sm:text-5xl text-tech-blue-800 font-bold ">
              Sobre nosotros
            </p>
          </div>
          <div className="text-lg mt-4 text-tech-gray-700">
            <p>
              Somos una comunidad liderada por un grupo de guatemaltecos fundada
              en el año 2018 con la finalidad de compartir conocimiento en el
              campo de tecnología sin fines de lucro.
            </p>
            <br />
            <p>
              Nuestra misión es a apoyar las necesidades tecnológicas de
              Guatemala y LATAM por medio de reuniones meetups en distintas
              ramas de tecnología como DevOps, Cloud Computing, Software
              Development y Data & AI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
