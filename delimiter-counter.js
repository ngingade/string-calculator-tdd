const add = (str) => {
  if (!str || str.length === 0) {
    return 0;
  }
  const allNumbers = str.split(",");
  return allNumbers.reduce((a, b) => Number(a) + Number(b), 0);
};

module.exports = add;
