function translate(str) {
    const words = str.toLowerCase().split(" ");
    const vowels = ["a", "e", "i", "o", "u"];
    const container = words.map(word => {
        if(vowels.includes(word[0])) {
            return `${word}way`;
        } else {
            return word.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
        }
})
return container.join(" ");

}


module.exports = { translate }