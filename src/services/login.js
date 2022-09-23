import axios from "axios";

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/login/`;

export const login = async credentials => (
  await axios.post(baseUrl, credentials)
);