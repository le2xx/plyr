// ==========================================================================
// Browser sniffing
// Unfortunately, due to mixed support, UA sniffing is required
// ==========================================================================
const isWindow = typeof window === 'undefined';

const browser = {
  isIE: isWindow ? Boolean(window.document.documentMode) : false,
  isEdge: isWindow ? window.navigator.userAgent.includes('Edge') : false,
  isWebkit: 'WebkitAppearance' in window.document.documentElement.style && !/Edge/.test(window.navigator.userAgent),
  isIPhone: isWindow ? /(iPhone|iPod)/gi.test(window.navigator.platform) : false,
  isIos: isWindow
    ? (window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1) ||
      /(iPad|iPhone|iPod)/gi.test(window.navigator.platform)
    : false,
};

export default browser;
