import { Box } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import AnimatedBadge from "./AnimatedBadge";

interface Props {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export const HeaderXs: React.FC<Props> = ({ setOpenDrawer }) => {
  return (
    <>
      <Box>
        <AnimatedBadge setOpenDrawer={setOpenDrawer} />
      </Box>
    </>
  );
};
