import axios from 'axios';

const baseUrl = 'http://localhost:5000/api/users/reset-password';

export const resetPassword = async credentials => (
  await axios.put(baseUrl, credentials)
);