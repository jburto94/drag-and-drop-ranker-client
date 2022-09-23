import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/users/reset-password`;

export const resetPassword = async credentials => (
  await axios.put(baseUrl, credentials)
);