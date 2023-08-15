import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.1.1:7001",
  baseURL: "http://10.0.2.2:7001",
});
export default api;
