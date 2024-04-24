"use client";
import { styled } from "@mui/material";
import { useOpenDrawer } from "./useOpenDrawer";

interface Props {
  children: React.ReactNode;
}

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${240}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const MainContent: React.FC<Props> = ({ children }) => {
  const { openDrawerMenu } = useOpenDrawer();
  console.log({ openDrawerMenu });
  return <Main open={openDrawerMenu}>{children}</Main>;
};
