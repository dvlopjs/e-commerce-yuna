import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import DrawerContent from "./DrawerContent";

interface Props {
  open: boolean;
  onClose: () => void;
}

const ReusableDrawer: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <DrawerContent />
    </Drawer>
  );
};

export default ReusableDrawer;
