import axios from "axios";

const baseUrl = 'http://localhost:5000/api/users/';

export const register = async credentials => (
  await axios.post(baseUrl, credentials)
);