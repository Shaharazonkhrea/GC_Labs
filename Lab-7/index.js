const name1 = "Cree";
const name2 = "Zion";
const name3 = "Shae";

const length1 = name1.length;
const length2 = name2.length;
const length3 = name3.length;

const maxLength = Math.max(length1, length2, length3);

if (length1 === length2 && length2 === length3) {
    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
}
else {
    const longestNames = [];
    if (length1 === maxLength) longestNames.push(name1);
    if (length2 === maxLength) longestNames.push(name2);
    if (length3 === maxLength) longestNames.push(name3);

    if (longestNames.length === 1) {
        console.log(`${longestNames[0]} has the longest name.`);
    }
else {
        console.log(`${longestNames.join(" and ")} tie for the longest name.`);
    }
}