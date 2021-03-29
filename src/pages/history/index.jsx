// import PropTypes from 'prop-types';
import TimeLine from '../../components/timeline';
import useHistory from '../../hooks/useHistory';
import { Main } from './style';

const HistoryPage = (props) => {
  const [data, isLoading, error] = useHistory({ key: 'history' });

  return (
    <Main>
      {isLoading && <p>Loading timeline...</p>}
      <TimeLine data={data} />
    </Main>
  );
};

// HistoryPage.propTypes = {};

export default HistoryPage;
