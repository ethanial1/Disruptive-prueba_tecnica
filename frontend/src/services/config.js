import axios from "axios";
import { baseURL } from "../utils/fetch_config";

export const instanceApi = axios.create({
  baseURL: baseURL,
  validateStatus: (status) => {
    if (status >= 200 && status <= 401) return true;
    return false;
  }
})
