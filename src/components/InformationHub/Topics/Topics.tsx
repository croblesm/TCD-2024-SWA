import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

const topics = [
  {
    id: 1,
    text: "Facebook",
    Icon: (
      <a href="https://www.facebook.com/groups/techCommunityGT" target="_blank" rel="noopener noreferrer">
        <Facebook sx={{ fontSize: 80 }} color="primary" />
      </a>
    ),
  },
  {
    id: 2,
    text: "Instagram",
    Icon: (
      <a href="http://instagram.com/techcommunitygt" target="_blank" rel="noopener noreferrer">
        <Instagram sx={{ fontSize: 80 }} color="primary" />
      </a>
    ),
  },
  {
    id: 3,
    text: "LinkedIn",
    Icon: (
      <a href="http://linkedin.com/company/techcommunitygt" target="_blank" rel="noopener noreferrer">
        <LinkedIn sx={{ fontSize: 80 }} color="primary" />
      </a>
    ),
  },
  {
    id: 4,
    text: "Twitter",
    Icon: (
      <a href="http://twitter.com/TechCommunityGT" target="_blank" rel="noopener noreferrer">
        <Twitter sx={{ fontSize: 80 }} color="primary" />
      </a>
    ),
  },
];

export const Topics = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 justify-around mt-4 place-items-center">
      {topics.map((topic) => (
        <div
          key={topic.id}
          className="m-2 px-4 py-2 w-80 flex flex-col justify-between gap-4"
        >
          <div className="w-full flex justify-center">{topic.Icon}</div>
          <div className="w-full flex justify-center items-center">
            <p className="text-tech-blue-800 text-center font-bold text-2xl">
              {topic.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
