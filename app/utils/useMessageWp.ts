import { CartProduct } from "../redux/pasteleriaSlice";
import { useProductsOnCart } from "./useProductsOnCart";

export const useMessageWp = (getValues: Function) => {
  const { cart, subtotal } = useProductsOnCart();

  const formatCartMessage = () => {
    let message = "*Hola, Mi pedido es:*%0a";
    cart.forEach((product: CartProduct, index: number) => {
      message += `${index + 1}. ${product.name}: ${product.quantity}x - $${
        product.price * product.quantity
      }%0a`;
    });

    message += `
    %0a*Nombre:* ${getValues("name")}%0a
    %0a*Telefóno:* ${getValues("cellphone")}%0a
    `;

    message += `%0a*TOTAL:* $${subtotal}%0a`;

    return message;
  };
  const phoneNumber = "3517077991";

  const sendMessageWhatsApp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${formatCartMessage()}`,
      "_blank"
    );
  };

  return {
    formatCartMessage,
    sendMessageWhatsApp,
  };
};
