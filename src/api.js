import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3';

export const getAllData = (params) => {
  if (params) {
    const { key } = params;
    if (key) {
      const url = `${BASE_URL}/${key}`;
      return axios.get(url);
    }
  }

  throw new Error('Must provide a key, eg: history, launches...');
};
