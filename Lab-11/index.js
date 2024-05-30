class Room {
    constructor(name, length, width, capacity = 15) {
        this.name = name
        this.length = length
        this.width = width
        this.capacity = capacity
        this.available = true
    }

    getArea() {
        return this.length * this.width 
    }

    getPerimeter() {
        return 2 * (this.length * this.width)
    }
}

const room1 = new Room("Sun", 30, 20)
const room2 = new Room("Green", 15, 20, 18)
room2.available = false

console.log("Name:", room1.name)
console.log("Length:", room1.length)
console.log("Width:", room1.width)
console.log("Area:", room1.getArea())
console.log("Perimeter:", room1.getPerimeter())
console.log("Capacity:", room1.capacity)
console.log("Available:", room1.available)

console.log("Name:", room2.name)
console.log("Length:", room2.length)
console.log("Width:", room2.width)
console.log("Area:", room2.getArea())
console.log("Perimeter:", room2.getPerimeter())
console.log("Capacity:", room2.capacity)
console.log("Available:", room2.available)



