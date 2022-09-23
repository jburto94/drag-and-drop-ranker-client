import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/users/`;

export const register = async credentials => (
  await axios.post(baseUrl, credentials)
);