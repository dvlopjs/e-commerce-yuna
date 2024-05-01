"use client";
import { IconButton } from "@mui/material";
import React from "react";

interface Props {
  text: string;
  url: string;
  hoverColor?: string;
  children: React.ReactElement;
}

export const ButtonRedes: React.FC<Props> = ({
  text,
  url,
  hoverColor,
  children,
}) => {
  const buttonStyle = {
    color: "#17202A",
    "&:hover": {
      color: hoverColor, // Cambiar al color deseado
    },
  };
  return (
    <IconButton
      title={text}
      onClick={() => window.open(url, "_blank")}
      sx={buttonStyle}
    >
      {children}
    </IconButton>
  );
};
