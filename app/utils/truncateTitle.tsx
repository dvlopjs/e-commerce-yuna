type PropsFunction = {
  text: string;
};

export const truncateTitle = ({ text }: PropsFunction) => {
  // Verificar si el texto supera los 30 caracteres
  if (text.length > 25) {
    // Truncar el texto a 30 caracteres y agregar "..."
    return text.slice(0, 25) + "...";
  } else {
    // Devolver el texto original si no supera los 30 caracteres
    return text;
  }
};
