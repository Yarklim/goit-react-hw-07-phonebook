import { RotatingLines } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectorLoader } from 'redux/selectors';
import { LoaderContainer } from './Loader.styled';

const Loader = ({ children }) => {
  const isLoading = useSelector(selectorLoader);

  return (
    <>
      {isLoading && (
        <LoaderContainer>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
          />
        </LoaderContainer>
      )}
      {children}
    </>
  );
};

export default Loader;
