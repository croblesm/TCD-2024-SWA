import { SiBmw } from "react-icons/si";
import { LogoItem } from "./LogoItem";
import { SponsorAPI } from "../../../interfaces";
import { FC } from "react";

interface LogoItemsBottomProps {
  sponsors: SponsorAPI[];
}

export const LogoItemsBottom: FC<LogoItemsBottomProps> = ({ sponsors }) => (
  <>
    {sponsors.map((sponsor) => (
      <LogoItem
        Icon={SiBmw}
        name="BMW"
        key={sponsor.sponsorId}
        sponsor={sponsor}
      />
    ))}
  </>
);
