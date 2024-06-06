export const convertToNum = (alphabetString) => {
  const reverseMapping = {
    a: "1",
    b: "2",
    c: "3",
    d: "4",
    e: "5",
    f: "6",
    g: "7",
    h: "8",
    i: "9",
    j: "0",
    // Add more mappings as needed
  };

  // Convert each alphabet to its corresponding digit
  const numberString = Array.from(
    alphabetString,
    (alphabet) => reverseMapping[alphabet.toLowerCase()] || alphabet
  ).join("");

  // Parse the string to a number
  const result = parseInt(numberString, 10);

  // Return the result
  return isNaN(result) ? alphabetString : result;
};
