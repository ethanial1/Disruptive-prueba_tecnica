import axios from "axios";

export const instanceApi = axios.create({
  baseURL: 'localhost:5003/v1/',
})
