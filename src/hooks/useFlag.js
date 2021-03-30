import PropTypes from 'prop-types';
import { useState } from 'react';
import { getFlagByName } from '../api';

const useFlag = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFlag = async (name) => {
    try {
      const resp = await getFlagByName({ name });
      setData(resp.data);
    } catch (err) {
      console.log('error in fetching flag...', err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [data, isLoading, error, getFlag];
};

useFlag.propTypes = {
  name: PropTypes.string.isRequired,
};

export default useFlag;
