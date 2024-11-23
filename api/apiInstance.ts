import axios from "axios";

const apiInstance = axios.create({
  baseURL: `http://${process.env.EXPO_PUBLIC_IP_PC}`,
});

export default apiInstance;
