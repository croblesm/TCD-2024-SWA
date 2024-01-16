import { FC } from "react";
import { ISpeakerResponse } from "../../interfaces";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import LanguageIcon from "@mui/icons-material/Language";

interface SpeakerCardProps {
  speaker: ISpeakerResponse;
}

export const SpeakerCard: FC<SpeakerCardProps> = ({ speaker }) => {
  const {
    photoUrl,
    firstName,
    lastName,
    bio,
    email,
    gitHubProfile,
    linkedInProfile,
    title,
    twitterHandle,
    website,
  } = speaker;
  return (
    <div className="text-white ">
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="w-52 h-72">
          <img
            src={photoUrl as string | undefined}
            alt={firstName}
            className="object-cover rounded-2xl h-full min-w-52 min-h-72"
          />
        </div>
        <div>
          <div>
            <p className="text-3xl font-bold">{`${firstName} ${lastName}`}</p>
            <p className="text-lg mt-4">{title}</p>
          </div>
          <div className="mt-6">{bio}</div>
        </div>
      </div>
      {(email ||
        gitHubProfile ||
        linkedInProfile ||
        twitterHandle ||
        website) && (
        <div
          style={{
            borderTop: "1px solid white",
          }}
          className="p-2 flex gap-6 flex-wrap"
        >
          {email != null && (
            <a href={`mailto:${email}`}>
              <EmailIcon
                sx={{
                  height: "4rem",
                  width: "4rem",
                }}
              />{" "}
              {/* Tamaño aumentado */}
            </a>
          )}
          {gitHubProfile != null && (
            <a href={gitHubProfile}>
              <GitHubIcon
                sx={{
                  height: "4rem",
                  width: "4rem",
                }}
              />
              {/* Tamaño aumentado */}
            </a>
          )}
          {linkedInProfile != null && (
            <a href={linkedInProfile}>
              <LinkedInIcon
                sx={{
                  height: "4rem",
                  width: "4rem",
                }}
              />
              {/* Tamaño aumentado */}
            </a>
          )}
          {twitterHandle != null && (
            <a href={twitterHandle}>
              <XIcon
                sx={{
                  height: "4rem",
                  width: "4rem",
                }}
              />
              {/* Tamaño aumentado */}
            </a>
          )}
          {website != null && (
            <a href={website}>
              <LanguageIcon
                sx={{
                  height: "4rem",
                  width: "4rem",
                }}
              />
              {/* Tamaño aumentado */}
            </a>
          )}
        </div>
      )}
    </div>
  );
};
