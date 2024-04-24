"use client";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import React from "react";
import { useRouter } from "next/navigation";

type MuiIconSize = "small" | "inherit" | "large" | "medium";

interface Props {
  size?: MuiIconSize;
}

export const ArrowGoBack: React.FC<Props> = ({ size }) => {
  const router = useRouter();
  return (
    <IconButton
      title="Regresar"
      style={{ color: "rgb(255, 180, 162)" }}
      onClick={() => router.push("/")}
    >
      <ArrowBackIcon fontSize={size ? size : "medium"} />
    </IconButton>
  );
};
