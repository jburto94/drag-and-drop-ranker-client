import axios from "axios";

const baseUrl = 'http://localhost:5000/api/users/forgot-password';

export const forgotPassword = async email => (
  await axios.post(baseUrl, { email })
);