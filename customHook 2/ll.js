function countItemCombinationsInList(param1, param2) {
  const combinationCounts = {};

  param1.forEach((combination) => {
    const combinationString = JSON.stringify(combination);
    const count = param2.reduce((acc, item) => {
      if (Array.isArray(item)) {
        const itemString = JSON.stringify(item);
        if (
          itemString === combinationString ||
          item.every((val) => combination.includes(val))
        ) {
          return acc + 1;
        }
      } else {
        if (item === combination) {
          return acc + 1;
        }
      }
      return acc;
    }, 0);

    if (count > 0) {
      combinationCounts[combinationString] = count;
    }
  });

  return combinationCounts;
}

// Example usage:
const param1 = [
  [30, 40],
  [30, 90],
  [40, 90],
];
const param2 = [
  [30, 90],
  [30, [40, 70], 90],
  [40, 50, 60],
];
const result = countItemCombinationsInList(param1, param2);
console.log(result);
