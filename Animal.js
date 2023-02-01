class KingdomAnimalia{
    constructor() {
        if(this.constructor === KingdomAnimalia) {
            throw new Error("This cannot be called")
        }
    }
    Movement() {
        throw new Error("This cannot be implemented directly")
    }
    
}

class Invertebrate extends KingdomAnimalia{
    hasBackbone = false
    vertebralColumn() {
        console.log("Vertebral column absent")
    }

}

const anthropoda = new Invertebrate()
anthropoda.vertebralColumn()
console.log(anthropoda)

class Vertebrate extends KingdomAnimalia {
    hasBackbone = true
    vertebralCanal() {
        console.log("Vertebral column present")
    }
}

const animal = new Vertebrate()
animal.vertebralCanal() 
console.log(animal)

class ColdBlooded extends KingdomAnimalia {
    poikilothermicAnimal = true
    poikilothermic() {
        console.log("Our temperature varies considerably")
    }
    constructor(name, habitat,) {
        super()
        this.name = name
        this.habitat = habitat
    }
}

const coldBlooded = new ColdBlooded()
coldBlooded.poikilothermic()
console.log(coldBlooded)

const animal1 = new ColdBlooded("Anthropoda", "arboreal")
const animal2 = new ColdBlooded("Fish","water")
const animal3 = new ColdBlooded("Amphibia", "")
const animal4 = new ColdBlooded("reptile", "")
