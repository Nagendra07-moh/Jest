const muliply = require("./index");

// TEST SUIT

test("2 & 5 should be equeal to 10 ", async () => {
  expect(muliply(2, 5)).toBe(10); //Exact Equality
});
