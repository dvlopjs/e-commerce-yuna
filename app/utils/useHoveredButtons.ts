import { useState } from "react";

interface Props {
  button: string;
}

export const useHoveredButtons = ({ button }: Props) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const handleMouseEnter = () => {
    setHovered(button);
  };
  const onHoverExit = () => {
    setHovered(null);
  };
  return { hovered, handleMouseEnter, onHoverExit };
};
