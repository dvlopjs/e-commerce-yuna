import { useProductsOnCart } from "@/app/utils/useProductsOnCart";
import { List, ListItem, ListItemText } from "@mui/material";

const DrawerContent: React.FC = () => {
  const products = useProductsOnCart();

  console.log(products);
  return (
    <>
      <List>
        <ListItem>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Item 2" secondary={"asdadasdasdasdasdasdsa"} />
        </ListItem>
        {/* Agrega más elementos de la lista según sea necesario */}
      </List>
    </>
  );
};

export default DrawerContent;
