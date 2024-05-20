const getAreaOfCircle = (radius) => {
    return radius ** 2 * Math.PI
}

const getCircumferenceOfCircle = (radius) => {
    return 2 * Math.PI * radius
}

const getAreaOfSquare = (side) => {
    return side * side
}

const getAreaOfTriangle = (base, height) => {
    return 0.5 * base * height 
}

console.log(getAreaOfCircle(2))
console.log(getCircumferenceOfCircle(2))
console.log(getAreaOfSquare(2))
console.log(getAreaOfTriangle(5, 4))