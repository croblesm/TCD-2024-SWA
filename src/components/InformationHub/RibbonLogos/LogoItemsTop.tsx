import { SiNike } from "react-icons/si";
import { LogoItem } from "./LogoItem";
import { SponsorAPI } from "../../../interfaces";
import { FC } from "react";

interface LogoItemsTopProps {
  sponsors: SponsorAPI[];
}

export const LogoItemsTop: FC<LogoItemsTopProps> = ({ sponsors }) => (
  <>
    {sponsors.map((sponsor) => (
      <LogoItem
        Icon={SiNike}
        name={sponsor.sponsorName}
        sponsor={sponsor}
        key={sponsor.sponsorId}
      />
    ))}
  </>
);
