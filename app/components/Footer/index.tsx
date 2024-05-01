import React from "react";
import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ButtonRedes } from "./ButtonRedes";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fcece6",
        height: 100,
        marginTop: "auto",
        display: "flex",
        justifyContent: "center",
        paddingTop: 2,
      }}
    >
      <Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography fontFamily={"cursive"}>Seguinos en Instagram</Typography>
          <ButtonRedes
            text="Instagram"
            url="https://www.instagram.com/yuna.gre/"
            hoverColor="#C13584"
          >
            <InstagramIcon />
          </ButtonRedes>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography fontFamily={"cursive"}>Made by Cris 🖤</Typography>
          <ButtonRedes
            text="Repositorio"
            url="https://github.com/dvlopjs/e-commerce-yuna"
            hoverColor="#D35400"
          >
            <GitHubIcon />
          </ButtonRedes>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
