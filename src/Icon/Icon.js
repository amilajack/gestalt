// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Icon.css';
import icons from './icons';
import colors from '../Colors.css';

type IconProps = {
  accessibilityLabel: string,
  color?:
    | 'blue'
    | 'darkGray'
    | 'eggplant'
    | 'gray'
    | 'green'
    | 'lightGray'
    | 'maroon'
    | 'midnight'
    | 'navy'
    | 'olive'
    | 'orange'
    | 'orchid'
    | 'pine'
    | 'purple'
    | 'red'
    | 'watermelon'
    | 'white',
  icon: $Keys<typeof icons>,
  inline?: boolean,
  size?: number | string,
};

export default function Icon(props: IconProps) {
  const { accessibilityLabel, color = 'gray', icon, inline, size = 16 } = props;

  const cs = classnames(styles.icon, colors[color], {
    [styles.iconBlock]: !inline,
  });

  const path = icons[icon];

  const ariaHidden = accessibilityLabel === '' ? true : null;

  return (
    <svg
      className={cs}
      height={size}
      width={size}
      viewBox="0 0 24 24"
      aria-hidden={ariaHidden}
      aria-label={accessibilityLabel}
      role="img"
    >
      <title>{accessibilityLabel}</title>
      <path d={path} />
    </svg>
  );
}

Icon.propTypes = {
  accessibilityLabel: PropTypes.string.isRequired,
  color: PropTypes.oneOf([
    'blue',
    'darkGray',
    'eggplant',
    'gray',
    'green',
    'lightGray',
    'maroon',
    'midnight',
    'navy',
    'olive',
    'orange',
    'orchid',
    'pine',
    'purple',
    'red',
    'watermelon',
    'white',
  ]),
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  inline: PropTypes.bool,
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};
