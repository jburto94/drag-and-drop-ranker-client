import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/email/verify`;

export const emailVerification = token => (
  axios.get(`${baseUrl}?${token}`)
);