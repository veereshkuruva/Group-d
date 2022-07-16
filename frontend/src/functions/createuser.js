import axios from "axios";
import config from "../config";

export const createUser = (user) => {
  return axios.post(
    `${config.API_URL}/current-user`,
    {},
    {
      headers: user,
    }
  );
};
