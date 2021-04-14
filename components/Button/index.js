import classnames from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ className, size, type, iconLeft, iconRight, children }) => {
  const buttonClassnames = classnames(
    'btn',
    {
      [`btn-${size}`]: size,
      [`btn-${type}`]: type,
      'with-icon': iconLeft || iconRight,
      'with-icon--left': iconLeft,
      'with-icon--right': iconRight,
    },
    className
  );

  return (
    <button type="button" className={buttonClassnames}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Button;
