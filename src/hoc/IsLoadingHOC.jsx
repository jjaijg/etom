import { useState } from 'react';
import Loader from '../components/loader';

const IsLoadingHOC = (WrappedComponent) => {
  const HOC = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const setLoadingState = (isComponentLoading) =>
      setIsLoading(isComponentLoading);

    return (
      <>
        {isLoading && <Loader />}
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    );
  };
  return HOC;
};

export default IsLoadingHOC;
