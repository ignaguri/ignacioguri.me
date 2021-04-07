import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ className, size, type, children }) => {
  const buttonClassnames = classnames('btn', {
    [`btn-${size}`]: size,
    [`btn-${type}`]: type,
    className,
  });

  return (
    <button type="button" className={buttonClassnames}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Button;
