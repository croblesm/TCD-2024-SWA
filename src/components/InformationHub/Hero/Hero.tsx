export const Hero = () => {
  return (
    <div className="flex flex-col justify-evenly items-center w-full gap-6">
      <div className="flex justify-center sm:w-1/2 ">
        <img
          src="https://res.cloudinary.com/dqklxngqs/image/upload/v1684690446/tech_Community_5db1794517.jpg"
          alt="Tech Community"
          className="rounded-2xl"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex flex-col gap-6 justify-center text-center">
        <div className="text-2xl lg:text-6xl block capitalize text-tech-blue-800 font-bold">
          <p>all the things about tech:</p>
          <p>by the community, for the community</p>
        </div>
      </div>
    </div>
  );
};
