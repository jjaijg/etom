import PropTypes from 'prop-types';
import { useEffect } from 'react';
import RocketCard from '../../components/cards/rocketCards';
import IsLoadingHOC from '../../hoc/IsLoadingHOC';
import useRockets from '../../hooks/useRockets';
import { MainContainer } from './style';

const RocketsPage = ({ setLoading }) => {
  const [rockets, isFetchingRockets, rockertError] = useRockets({
    key: 'rockets',
  });

  useEffect(() => {
    setLoading(isFetchingRockets);
  }, [isFetchingRockets, setLoading]);

  return (
    <MainContainer>
      {rockets?.length > 0 &&
        rockets.map((rocket) => (
          <RocketCard key={`rocket-card-${rocket.id}`} data={rocket} />
        ))}
    </MainContainer>
  );
};

RocketsPage.propTypes = {};

export default IsLoadingHOC(RocketsPage);
