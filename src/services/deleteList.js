import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/lists/`;

export const deleteList = async (token, listId) => (
  await axios.delete(`${baseUrl}${listId}`, setHeaderConfig(token))
);