import { Web, Storage, Cloud, AccountTree } from "@mui/icons-material";

const topics = [
  {
    id: 1,
    text: "Software Development",
    Icon: <Web sx={{ fontSize: 80 }} color="primary" />,
  },
  {
    id: 3,
    text: "Cloud Computing",
    Icon: <Cloud sx={{ fontSize: 80 }} color="primary" />,
  },
  {
    id: 2,
    text: "Data & AI",
    Icon: <Storage sx={{ fontSize: 80 }} color="primary" />,
  },
  {
    id: 4,
    text: "DevOps",
    Icon: <AccountTree sx={{ fontSize: 80 }} color="primary" />,
  },
];

export const Topics = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-around mt-4  place-items-center">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className=" m-2  px-4 py-2 w-80 flex flex-col justify-between gap-4"
        >
          <div className="w-full flex justify-center">{topic.Icon}</div>
          <div className=" w-full flex justify-center items-center ">
            <p className="text-tech-blue-800 text-center font-bold text-2xl ">
              {topic.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
