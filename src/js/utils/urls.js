// ==========================================================================
// URL utils
// ==========================================================================

import is from './is';

/**
 * Parse a string to a URL object
 * @param {String} input - the URL to be parsed
 * @param {Boolean} safe - failsafe parsing
 */
export function parseUrl(input, safe = true) {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return null;
  }

  let url = input;

  if (safe) {
    const parser = document.createElement('a');
    parser.href = url;
    url = parser.href;
  }

  try {
    return new URL(url);
  } catch (_) {
    return null;
  }
}

// Convert object to URLSearchParams
export function buildUrlParams(input) {
  const params = new URLSearchParams();

  if (is.object(input)) {
    Object.entries(input).forEach(([key, value]) => {
      params.set(key, value);
    });
  }

  return params;
}
