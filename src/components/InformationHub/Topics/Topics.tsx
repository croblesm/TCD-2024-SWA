import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";

const topics = [
  {
    id: 1,
    text: "Facebook",
    href: "https://www.facebook.com/groups/techCommunityGT",
    Icon: <Facebook sx={{ fontSize: 80 }} color="primary" />,
  },
  {
    id: 2,
    text: "Instagram",
    href: "http://instagram.com/techcommunitygt",
    Icon: <Instagram sx={{ fontSize: 80 }} color="primary" />,
  },
  {
    id: 3,
    text: "LinkedIn",
    href: "http://linkedin.com/company/techcommunitygt",
    Icon: <LinkedIn sx={{ fontSize: 80 }} color="primary" />,
  },
  {
    id: 4,
    text: "X",
    href: "http://twitter.com/TechCommunityGT",
    Icon: <X sx={{ fontSize: 80 }} color="primary" />,
  },
];

export const Topics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-around mt-4 place-items-center">
      {topics.map((topic) => (
        <a
          key={topic.id}
          className="m-2 px-4 py-2 w-80 flex flex-col justify-between gap-4"
          target="_blank"
          rel="noopener noreferrer"
          href={topic.href}
        >
          <div className="w-full flex justify-center">{topic.Icon}</div>
          <div className="w-full flex justify-center items-center">
            <p className="text-tech-blue-800 text-center font-bold text-2xl">
              {topic.text}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};
