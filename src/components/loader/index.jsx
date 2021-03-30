import { LoaderContainer, Spinner } from './style';

const Loader = () => {
  const mount = document.getElementById('loader-root');

  return (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  );
};

Loader.propTypes = {};

export default Loader;
