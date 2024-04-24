import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fcece6",
        height: 100,
        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        paddingTop: 5,
      }}
    >
      <Typography variant="body1">Made by Cris 🖤</Typography>
    </Box>
  );
};

export default Footer;
