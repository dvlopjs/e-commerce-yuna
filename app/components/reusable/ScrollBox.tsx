"use client";
import { Box, StyledComponentProps, styled } from "@mui/material";

interface StyledBoxProps extends StyledComponentProps<"div"> {
  maxHeight?: string;
  overflow?: string;
}

export const ScrollBox = styled(Box)<StyledBoxProps>((props) => ({
  maxHeight: props.maxHeight || "100vh",
  overflow: props.overflow || "auto",
  "&::-webkit-scrollbar": {
    width: "10px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#f1f1f1",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#888",
    borderRadius: "5px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: "#555",
  },
}));
