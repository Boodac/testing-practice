function reverseString(string) {
    let result = [];
    for(let i = 0; i < string.length; i++) {
        result.unshift(string[i]);
    }

    return result.join("");
};

module.exports = reverseString;

