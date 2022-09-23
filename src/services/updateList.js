import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/lists/`;

export const updateList = async (listData, token, listId) => (
  await axios.put(`${baseUrl}${listId}`, listData, setHeaderConfig(token))
);