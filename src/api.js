import axios from 'axios';

const SPACEX_BASE_URL = 'https://api.spacexdata.com/v3';
const FLAG_BASE_URL = 'https://restcountries.eu/rest/v2';

export const getAllData = (params) => {
  if (params) {
    const { key } = params;
    if (key) {
      const url = `${SPACEX_BASE_URL}/${key}`;
      return axios.get(url);
    }
  }

  throw new Error('Must provide a key, eg: history, launches...');
};

export const getFlagByName = (params) => {
  if (params) {
    const { name } = params;
    if (name) {
      const url = `${FLAG_BASE_URL}/name/${name}`;
      return axios.get(url);
    }
  }

  throw new Error('Must provide a country name, eg: India, United States...');
};
