import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';

const baseUrl = `${process.env.REACT_APP_SERVER_URI}/lists/`;

export const getUserLists = async token => (
  await axios.get(baseUrl, setHeaderConfig(token))
);