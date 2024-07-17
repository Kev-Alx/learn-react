function countItemOccurrencesAboveThreshold(dataset, threshold) {
  const itemCounts = {};

  function countItems(sequence) {
    if (typeof sequence === "number") {
      // Base case: single item
      itemCounts[sequence] = (itemCounts[sequence] || 0) + 1;
    } else {
      sequence.forEach((item) => countItems(item));
    }
  }

  dataset.forEach((sequence) => countItems(sequence));

  // Filter items based on threshold
  const filteredItems = {};
  for (const item in itemCounts) {
    if (itemCounts[item] > threshold) {
      filteredItems[item] = itemCounts[item];
    }
  }

  return filteredItems;
}

// Example usage:
const dataset = [
  [30, 90],
  [30, [40, 70], 90],
  [40, 50, 60],
];
const threshold = 1; // Change this threshold as needed
const result = countItemOccurrencesAboveThreshold(dataset, threshold);
console.log(result);

function generateItemCombinations(itemCounts) {
  const items = Object.keys(itemCounts);
  const combinations = [];

  for (let i = 0; i < items.length - 1; i++) {
    for (let j = i + 1; j < items.length; j++) {
      combinations.push([parseInt(items[i]), parseInt(items[j])]);
    }
  }

  return combinations;
}
result;
// Example usage:
const combinations = generateItemCombinations(result);
console.log(combinations);
function countItemCombinationsInList(param1, param2) {
  const flattenedParam2 = param2.flat();
  const combinationCounts = {};

  param1.forEach((combination) => {
    const count = flattenedParam2.reduce((acc, item) => {
      if (Array.isArray(item)) {
        // Check if combination matches the item
        if (JSON.stringify(item) === JSON.stringify(combination)) {
          return acc + 1;
        } else {
          // Check if combination is a subset of the item
          const subset = combination.every((val) => item.includes(val));
          if (subset) return acc + 1;
        }
      } else {
        // Check if combination matches the item
        if (item === combination) {
          return acc + 1;
        }
      }
      return acc;
    }, 0);

    if (count > 0) {
      combinationCounts[JSON.stringify(combination)] = count;
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
const result2 = countItemCombinationsInList(param1, param2);
console.log(result2);
