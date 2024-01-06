"use client";

interface Props
  extends React.HTMLAttributes<HTMLParagraphElement | HTMLSpanElement> {
  text: string;
  material?: boolean;
  br?: boolean;
}

import React, { FC } from "react";
import { Typography } from "@mui/material";

export const MultilineText: FC<Props> = ({
  text,
  material = false,
  br = false,
  ...props
}) => {
  // The "material" property is used to assign whether it should be with typography or with p.
  // The "br" property is used to assign whether the bg tag should appear.
  return (
    <>
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {material ? (
            <Typography {...props}>{line}</Typography>
          ) : (
            <p {...props}>{line}</p>
          )}
          {index < text.split("\n").length - 1 && br && <br />}
        </React.Fragment>
      ))}
    </>
  );
};
