import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/lists/`;

export const getList = async (token, listId) => (
  await axios.get(`${baseUrl}${listId}`, setHeaderConfig(token))
);