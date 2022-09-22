import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = 'http://localhost:5000/api/lists/';

export const createList = async (listData, token, listId) => (
  await axios.post(`${baseUrl}${listId}`, listData, setHeaderConfig(token))
);