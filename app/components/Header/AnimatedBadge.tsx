import React, { Dispatch, SetStateAction } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSpring, animated } from "@react-spring/web";
import { useProductsOnCart } from "@/app/utils/useProductsOnCart";

interface Props {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

const AnimatedShoppingCartIcon = animated(ShoppingCartIcon);

const AnimatedBadge: React.FC<Props> = ({ setOpenDrawer }: Props) => {
  const [hovered, setHovered] = React.useState<boolean>(false);
  const { cart: products } = useProductsOnCart();
  const springProps = useSpring({
    transform: hovered ? "scale(1.1)" : "scale(1)",
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      style={springProps}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => (!products.length ? () => {} : setOpenDrawer(true))}
    >
      <Badge
        badgeContent={
          <span style={{ fontFamily: "initial" }}>{products.length}</span>
        }
        color="error"
        style={{ cursor: "pointer" }}
      >
        <AnimatedShoppingCartIcon style={{ color: "#ffff" }} />
      </Badge>
    </animated.div>
  );
};

export default AnimatedBadge;
