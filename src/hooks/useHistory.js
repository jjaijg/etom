import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAllData } from '../api';

const useHistory = ({ key }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getHistories = async () => {
      try {
        const resp = await getAllData({ key });
        setData(resp.data);
      } catch (err) {
        console.log('error in fetching histories...', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getHistories();
  }, [key]);

  return [data, isLoading, error];
};

useHistory.propTypes = {
  key: PropTypes.string.isRequired,
};

useHistory.defaultProps = {
  key: 'history',
};

export default useHistory;
