"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

// Custom hook para obtener la sesión del servidor
export const useServerSession = async () => {
  const session = await getServerSession(authOptions);

  return session;
};
