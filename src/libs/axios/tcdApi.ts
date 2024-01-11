import axios from "axios";

const tcdApi = axios.create({
  baseURL: "https://tcd2024.azurewebsites.net/api",
});

export default tcdApi;
