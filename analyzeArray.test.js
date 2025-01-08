const analyzeArray = require("./analyzeArray");

test("take an array of numbers and returns an object with average, min, max, length", () => {
    expect(analyzeArray[1,8,3,4,2,6]).toBe({average:4, min: 1, max: 8, length: 6});
})