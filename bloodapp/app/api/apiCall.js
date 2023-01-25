import { endpoint } from "./endPoint";
import axios from "axios";

export const postData = async (userdata, routePath) => {
  const reqpoint = `${endpoint + routePath}`;
  try {
    const data = await axios.post(reqpoint, userdata);
    return data.data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (routePath) => {
  const reqpoint = `${endpoint + routePath}`;
  try {
    const data = await axios.delete(reqpoint);
    return data.data;
  } catch (error) {
    return error;
  }
};
