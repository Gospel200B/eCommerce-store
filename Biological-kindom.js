// class KingdomAnimalia {
//     constructor() {
//         if(this.constructor === KingdomAnimalia)
//         throw new Error("This cannot be accessed direcly")
//     }

//     #Moveable() {
//         console.log("It is Moveable")
//     }

//     Moves() {
//         this.#Moveable
//     }
// }

// class Invertebrate extends KingdomAnimalia{
//     constructor() {
//         super()
//     }
//     WithoutBackbone() {
//         console.log("This organism has Backbone absent")
//     }
//     coldblooded = "undefined"
// }

// class Vertebrate extends KingdomAnimalia{
//     constructor() {
//         super()
//     }
//     WithBackbone() {
//         console.log("This organism Posses Backbone")
//     }
//     coldblooded = "undefined"
// }

// class organism1 extends Invertebrate{
//     constructor(name) {
//         super()
//         this.name = name
//         this.coldblooded = true

//     }

// }
// const Anthropoda = new organism1("Anthropoda")
// console.log(Anthropoda)
// Anthropoda.WithoutBackbone()
// Anthropoda.Moves()



// class organism2 extends Vertebrate{
//     constructor(name) {
//         super()
//         this.coldblooded = true
//         this.name = name
//     }
//     swims() {
//         console.log("This organism moves by swimming")
//     }
// }

// const fish  = new organism2("Fish")
// console.log(fish)
// fish.WithBackbone() + fish.swims()


// class organism3 extends Vertebrate{
//     constructor(name) {
//         super()
//         this.coldblooded = true
//         this.name = name
//     }
//     Hops() {
//         console.log("It hops")
//     }
// }

// const Amphibia = new organism3("Amphibia")
// console.log(Amphibia)
// Amphibia.Hops()
// Amphibia.WithBackbone()

// class organism4 extends Vertebrate{
//     constructor(name) {
//         super()
//         this.name = name
//         this.coldblooded = true
//     }
// }

// const Reptile = new organism4("Reptile")
// console.log(Reptile)
// Reptile.WithBackbone() 

// class organism5 extends Vertebrate{
//     constructor(name) {
//         super()
//         this.name = name
//         this.warmblooded = true
//         this.coldblooded = false
//     }
//     fly() {
//         console.log("It flies")
//     }
// }

// const AVES = new organism5("AVES")
// console.log(AVES)
// AVES.WithBackbone()
// AVES.fly()


// class organism6 extends Vertebrate{
//     constructor(name) {
//         super()
//         this.name = name
//         this.warmblooded = true
//         this.coldblooded = false
//     }
// }

// const mammals = new organism6()
// console.log(mammals)
// mammals.WithBackbone()
// console.log("Done")


class Circle{
    constructor(radius) {
        this.radius = radius
    }
    
    area() {
        const area = Math.PI * (this.radius ** 2)
        return area
    }
}

const circle = new Circle(3.5)
console.log(circle.area())

class Square{
    constructor(length) {
        this.length = length
    }

    area() {
        const area =this.length**2
        return area
    }

}

const square = new Square(4)
console.log(square.area())

class Sphere {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        const area = 4 * Math.PI * (this.radius**2)
        return area
    }
}

const sphere = new Sphere(5)
console.log(sphere.area())

class Cone {
    constructor(radius) {
      this.radius = radius
    }
     
    volume() {
        const volume = 1/3 * Math.PI * (this.radius ** 3)
        return volume
    }
}

const cone = new Cone(5)
console.log(cone.volume())
