/**
 * Formats a number into a human-readable string with K, M, B, T suffixes.
 *
 * @param {number} num The number to format.
 * @param {number} [decimalPlaces=1] The number of decimal places to include (default: 1).
 * @returns {string} The formatted number string (e.g., "1.2K", "5M", "2.5B").
 */
export function formatNumberToHumanReadable(
  num: number,
  decimalPlaces: number = 1
) {
  if (typeof num !== 'number' || isNaN(num)) {
    return 'N/A';
  }
  if (num === 0) {
    return '0';
  }

  // Determine the sign and work with absolute value
  const sign = Math.sign(num);
  const absNum = Math.abs(num);

  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'K' }, // 1,000
    { value: 1e6, symbol: 'M' }, // 1,000,000
    { value: 1e9, symbol: 'B' }, // 1,000,000,000
    { value: 1e12, symbol: 'T' }, // 1,000,000,000,000
  ];

  // Find the largest suffix that applies
  // Iterate backwards to ensure we find the largest applicable unit
  for (let i = lookup.length - 1; i >= 0; i--) {
    const item = lookup[i];
    if (absNum >= item.value) {
      const formatted = (absNum / item.value).toFixed(decimalPlaces);
      const finalValue = parseFloat(formatted);

      return sign * finalValue + item.symbol;
    }
  }
  return num.toFixed(decimalPlaces);
}
