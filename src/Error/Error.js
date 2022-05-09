import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return (
    <p>
        {message}
    </p>
  );
}

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'an error has ocurred',
};

export default Error;