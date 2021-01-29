export const capitalize = (string) =>
  `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

export const convertCents = (cents) => `$${(cents / 10).toFixed(2)}`;
