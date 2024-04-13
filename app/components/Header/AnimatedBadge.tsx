import React from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSpring, animated } from "@react-spring/web";

interface Props {
  setOpenDrawer: Function;
}

const AnimatedShoppingCartIcon = animated(ShoppingCartIcon);

const AnimatedBadge: React.FC<Props> = ({ setOpenDrawer }: Props) => {
  const [hovered, setHovered] = React.useState<boolean>(false);

  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setOpenDrawer(true)}
    >
      <Badge badgeContent={3} color="error" style={{ cursor: "pointer" }}>
        <AnimatedShoppingCartIcon style={{ color: "#ffff" }} />
      </Badge>
    </animated.div>
  );
};

export default AnimatedBadge;
