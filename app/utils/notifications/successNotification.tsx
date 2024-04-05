import { ReactElement } from "react";
import { toast } from "react-toastify";

type Props = {
  message: ReactElement;
};
const successNotification = ({ message }: Props): void => {
  const notify = () => toast.success(message, { toastId: "success1" });
  notify();
};
export default successNotification;
