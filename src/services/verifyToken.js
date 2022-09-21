import axios from "axios";

const baseUrl = 'http://localhost:5000/api/token/verify-token';

export const verifyToken = token => (
  axios.get(`${baseUrl}?${token}`)
);