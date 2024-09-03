const add = (str) => {
  if (!str || str.length === 0) {
    return 0;
  }

  let subStr = str.split("//")[1];
  const regX_1 = "\n";

  const delemter = subStr.substring(0, 1);

  if (!delemter) {
    return "Delemeter is missing";
  }

  const finalRegX = new RegExp(regX_1 + "|" + delemter);

  subStr = delemter ? subStr : str;

  const allNumbers = subStr.split(finalRegX);
  const sum = allNumbers.reduce((a, b) => Number(a) + Number(b), 0);

  return isNaN(sum) ? "The passed string is invalid" : sum;
};

module.exports = add;
