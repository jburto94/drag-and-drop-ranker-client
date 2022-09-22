import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = 'http://localhost:5000/api/lists/';

export const deleteList = async (token, listId) => (
  await axios.delete(`${baseUrl}${listId}`, setHeaderConfig(token))
);