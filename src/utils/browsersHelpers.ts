export const isBrowser = () => typeof window !== 'undefined';

export const isFirefox = () => navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
