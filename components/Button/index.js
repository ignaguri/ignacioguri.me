import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ size, type, children }) => {
  const bSize = `btn-${size}`;
  const bType = `btn-${type}`;
  return (
    <button type="button" className={classnames('btn', bSize, bType)}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['xs', 'xl']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
