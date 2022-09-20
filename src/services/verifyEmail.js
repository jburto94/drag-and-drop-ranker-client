import axios from "axios";

const baseUrl = 'http://localhost:5000/api/email/verify';

export const emailVerification = token => (
  axios.get(`${baseUrl}?${token}`)
);