import axios from "axios";

const api = axios.create({
  baseURL: "https://online-study-platform-server.herokuapp.com",
});

export default api;
