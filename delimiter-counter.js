// Define the string calculator function
const add = (str) => {
  // If the input string is empty or null, return 0
  if (!str || str.length === 0) {
    return 0;
  }

  // Check if the input string contains a custom delimiter
  let subStr = str.split("//")[1];
  const regX_1 = "\n"; // Default delimiter is newline

  // Extract the custom delimiter from the input string
  const delimiter = subStr.substring(0, 1);

  // If no custom delimiter is found, return an error message
  if (!delimiter) {
    return "Delimiter is missing";
  }

  // Create a regex pattern to match both the custom delimiter and newline
  const finalRegX = new RegExp(regX_1 + "|" + delimiter);

  // Use the custom delimiter if found, otherwise use the original input string
  subStr = delimiter ? subStr : str;

  // Split the input string into numbers using the regex pattern
  const allNumbers = subStr.split(finalRegX);

  // Filter out negative numbers from the array
  const negativeNumbers = allNumbers.filter((num) => Number(num) < 0);

  // If negative numbers are found, return an error message
  if (negativeNumbers.length > 0) {
    return `Negative numbers ${negativeNumbers} not allowed`;
  }

  // Calculate the sum of the numbers using the reduce method
  const sum = allNumbers.reduce((a, b) => Number(a) + Number(b), 0);

  // If the sum is NaN (Not a Number), return an error message
  return isNaN(sum) ? "The passed string is invalid" : sum;
};

// Export the string calculator function
module.exports = add;
