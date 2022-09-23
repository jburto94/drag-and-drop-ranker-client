import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/users/forgot-password`;

export const forgotPassword = async email => (
  await axios.post(baseUrl, { email })
);