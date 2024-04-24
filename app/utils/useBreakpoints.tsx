"use client";
import { useMediaQuery, useTheme } from "@mui/material";

export const useBreakpoints = () => {
  const theme = useTheme();

  const upXs = useMediaQuery(theme.breakpoints.up("xs"));
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const upMd = useMediaQuery(theme.breakpoints.up("md"));

  return {
    upXs,
    upSm,
    upMd,
  };
};
