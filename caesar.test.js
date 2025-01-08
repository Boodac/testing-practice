const caesar = require("./caesar");

test("takes a string and a shift factor, and returns it with each character shifted", () => {
    expect(caesar("xyz", 3)).toBe("abc");
    expect(caesar("HeLLo", 3)).toBe("KhOOr");
    expect(caesar("Hello, World!", 3)).toBe("Khoor, Zruog!");
})