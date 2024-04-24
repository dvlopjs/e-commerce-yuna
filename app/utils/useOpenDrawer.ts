"use client";
import { useState } from "react";

export const useOpenDrawer = () => {
  const [openDrawerMenu, setOpenDrawerMenu] = useState<boolean>(false);

  return {
    openDrawerMenu,
    setOpenDrawerMenu,
  };
};
