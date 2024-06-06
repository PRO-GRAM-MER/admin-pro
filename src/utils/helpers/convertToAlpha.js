export const convertToAlphabets = (number) => {
  const mapping = {
    1: "a",
    2: "b",
    3: "c",
    4: "d",
    5: "e",
    6: "f",
    7: "g",
    8: "h",
    9: "i",
    0: "j",
    // Add more mappings as needed
  };

  // Convert each digit to its corresponding alphabet
  const alphabetString = Array.from(
    String(number),
    (digit) => mapping[digit] || digit
  ).join("");

  return alphabetString;
};
