import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/token/verify-token`;

export const verifyToken = token => (
  axios.get(`${baseUrl}?${token}`)
);