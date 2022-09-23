import axios from 'axios';
import { setHeaderConfig } from '../utils/setHeaderConfig';
const baseUrl = 'http://localhost:5000/api/lists/';

export const getUserLists = async token => (
  await axios.get(baseUrl, setHeaderConfig(token))
);