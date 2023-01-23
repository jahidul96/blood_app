import { endpoint } from "./endPoint";
import axios from "axios";

export const authUserFunc = async (userdata, routePath) => {
  const reqpoint = `${endpoint + routePath}`;
  try {
    const data = await axios.post(reqpoint, userdata);
    return data.data;
  } catch (error) {
    return error;
  }
};
