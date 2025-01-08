const calculator = require("./calculator");

test("each function should take two numbers and return the correct calculation", () => {
    expect(calculator.add(1,2)).toBe(3);
    expect(calculator.subtract(1,2)).toBe(-1);
    expect(calculator.multiply(1,2)).toBe(2);
    expect(calculator.divide(1,2)).toBe(0.5);
});