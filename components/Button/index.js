/* eslint-disable sort-keys */
import classnames from 'classnames';
import PropTypes from 'prop-types';

function Button({ className, size, type, iconLeft, iconRight, children }) {
  const buttonClassnames = classnames(
    'btn',
    {
      'btn-small': size === 'small',
      'btn-medium': size === 'medium',
      'btn-large': size === 'large',
      'btn-primary': type === 'primary',
      'btn-secondary': type === 'secondary',
      'btn-tertiary': type === 'tertiary',
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
}

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
};

export default Button;
