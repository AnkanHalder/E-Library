import axios from "axios";
const serverInstance = axios.create({
  baseURL: 'http://localhost:8000' 
});

export default serverInstance;