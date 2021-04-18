/* eslint-disable sort-keys */

export const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const screenIs = (screen = '') => {
  if (typeof window === 'undefined') {
    return false;
  }

  const matches = Object.entries(screens).reduce((results, [name, size]) => {
    const mediaQuery = `(max-width: ${size})`;

    const result = {
      [name]: window.matchMedia(mediaQuery).matches,
    };

    return { ...results, ...result };
  }, {});

  if (screen === '') {
    return matches;
  }

  if (!screens[screen]) {
    console.error(`No match for "${screen}"`);

    return false;
  }

  return matches[screen];
};
