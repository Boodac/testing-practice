function caesar(string, shift) {
    let result = "";
    for(let i = 0; i< string.length;i++) {
        let curr=string.charCodeAt(i);
        let newval = curr+shift;
        if(curr > 64 && curr < 91) { // upper case
            if(newval > 90) {
                newval -= 26;
            } else if (newval < 64) {
                newval += 26;
            }
        } else if (curr > 96 && curr < 123) { // lower case
            if(newval > 122) newval -= 26;
            else if(newval < 97) newval += 26;
        } else {
            result += string[i];
            continue;
        };
        result += String.fromCharCode(newval);
    };
    return result;
};

module.exports = caesar;