export const postUser = async (data: object) => {
  const res = await fetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res;
};
