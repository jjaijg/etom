import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { getAllData } from '../api';

const useRockets = ({ key }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRockets = async () => {
      try {
        const resp = await getAllData({ key });
        setData(resp.data);
      } catch (err) {
        console.log('error in fetching rockets...', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    getRockets();
  }, [key]);

  return [data, isLoading, error];
};

useRockets.propTypes = {
  key: PropTypes.string.isRequired,
};

useRockets.defaultProps = {
  key: 'rockets',
};

export default useRockets;
