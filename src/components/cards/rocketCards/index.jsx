import PropTypes from 'prop-types';
import {
  CardContainer,
  CardHeader,
  CardMedia,
  CardBody,
  CardTitle,
  CardTags,
  CardContent,
  CardFlag,
} from './style';
import useFlag from '../../../hooks/useFlag';
import Tag from '../../tag';
import { useEffect } from 'react';

const RocketCard = ({ data }) => {
  const [flags, , , getFlag] = useFlag();

  const {
    rocket_name,
    rocket_type,
    company,
    country,
    first_flight,
    success_rate_pct,
    cost_per_launch,
    flickr_images,
    description,
  } = data;

  useEffect(() => {
    if (!flags?.length && country) getFlag(country);
  }, [country, flags, getFlag]);

  return (
    <CardContainer>
      <CardHeader>
        <CardMedia rocket={flickr_images[0]} />
        {flags?.length && <CardFlag flag={flags[0].flag} />}
      </CardHeader>
      <CardBody>
        <CardTitle>{rocket_name}</CardTitle>
        <CardTags>
          <Tag text={company} />
          <Tag text={first_flight} />
          <Tag text={rocket_type} />
          <Tag text={`${success_rate_pct}%`} />
          <Tag text={`$ ${cost_per_launch}`} />
        </CardTags>
        <CardContent>
          {description && `${description.substring(0, 75)} ...`}
        </CardContent>
      </CardBody>
    </CardContainer>
  );
};

RocketCard.propTypes = {
  data: PropTypes.any,
};

export default RocketCard;
