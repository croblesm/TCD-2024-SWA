import { IconType } from "react-icons";
import { SponsorAPI } from "../../../interfaces";
import { FC } from "react";

interface LogoItemProps {
  sponsor: SponsorAPI;
  Icon: IconType;
  name: string;
}

export const LogoItem: FC<LogoItemProps> = ({ sponsor }) => {
  return (
    <a
      href={sponsor.websiteUrl}
      rel="nofollow"
      target="_blank"
      className="flex items-center justify-center gap-4 px-4 py-4 text-black 
      transition-colors hover:bg-neutral-200 md:py-6  w-[150px]"
    >
      <div className="p-2 bg-tech-gray-400 rounded-2xl">
        <img
          className="h-[30px] md:h-[50px] object-contain w-[120px] "
          src={sponsor.logoUrl}
          alt={sponsor.sponsorName}
        />
      </div>
    </a>
  );
};
