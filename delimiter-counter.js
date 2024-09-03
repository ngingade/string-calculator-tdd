const add = (str) => {
  if (!str || str.length === 0) {
    return 0;
  }

  const breakpoint = /\n|\,/;

  const allNumbers = str.split(breakpoint);
  return allNumbers.reduce((a, b) => Number(a) + Number(b), 0);
};

module.exports = add;
