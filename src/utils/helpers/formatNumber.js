export const formatNumber = (number) => {
  const numberString = number.toString();

  // Add commas after thousandth, tenth thousandth, and lakh digits
  let formattedNumber = numberString.replace(/\B(?=(\d{5}|(\d{3})+(?!\d)))/g, ',');

  return formattedNumber;
};
