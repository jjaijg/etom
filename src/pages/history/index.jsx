// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import TimeLine from '../../components/timeline';
import IsLoadingHOC from '../../hoc/IsLoadingHOC';
import useHistory from '../../hooks/useHistory';
import { Main } from './style';

const HistoryPage = ({ setLoading }) => {
  const [data, isLoading, error] = useHistory({ key: 'history' });

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading, setLoading]);

  return (
    <Main>
      <TimeLine data={data} />
    </Main>
  );
};

// HistoryPage.propTypes = {};

export default IsLoadingHOC(HistoryPage);
