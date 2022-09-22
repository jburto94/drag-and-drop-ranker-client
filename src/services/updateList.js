import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = 'http://localhost:5000/api/lists/';

export const updateList = async (listData, token, listId) => (
  await axios.put(`${baseUrl}${listId}`, listData, setHeaderConfig(token))
);