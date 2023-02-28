/* eslint-disable sort-keys */
import classnames from 'classnames';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'prop... Remove this comment to see the full error message
import PropTypes from 'prop-types';

function Button({
  className,
  size,
  type,
  iconLeft,
  iconRight,
  children
}: any) {
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
    // @ts-expect-error TS(2304): Cannot find name 'button'.
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
