import { toast } from "react-toastify";
let IdUser = "";

export const correctAction = (message) => toast.success(message);
export const wrongAction = (message) => toast.error(message);
export const loading = (message) => {
  IdUser = toast.loading(message);
};

export const loadingOff = () => toast.dismiss(IdUser);
