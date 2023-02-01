class userActor {
    contructor() {
        if (this.constructor === userActor) {
            throw new Error ("This cannot be called or intantiated")
        }
    }
}
type = "Not defined"

//subclasses of userActor baseclass.(depiction of inheritance)
class Management extends userActor {
    nameOfManager = "Tappi"
    Welcome() {
        console.log("You are Welcome to learnable!!!".toLocaleUpperCase())
    }
}

const admin = new Management()
admin.Welcome()
console.log(admin)

class Student extends userActor {
    constructor(fullName, learningPath, age) {
        super()
        this.name = fullName
        this.path = learningPath
        this.age = age
    }
}

const Enemuo = new Student("Enemuo", "BackendDevs", 18)
console.log(Enemuo)




//define signup class
class signUp{
    constructor(Email, phoneNumber , createPassword) {
        this.Email = Email
        this.mobileContact = phoneNumber
        this.password = createPassword
    }
    SignUp() {
        console.log("Thanks for Signing up!!!")
    }
}

const  Gospel  = new signUp(`Gospel${7+3}B@genesystechhub.com`,1234567  , `password`)
console.log( Gospel)



//define signin class and applying Encapsulation priniciple
class SignIn {
    #SignIn() {
        console.log("You are successfully Signed in!!!")
    }
    SignedIn() {
        this.#SignIn()
    }
}

const Uchenna = new SignIn()
Uchenna.SignedIn()

class verifyLogin extends SignIn {
    constructor() {
        super()
        if (this.constructor === this.SignedIn()) {
            
            
        }
    }
    loggedIn() {
        console.log(`login verified`)
    }
}

const Uche = new verifyLogin()
Uche.loggedIn()


class checkOutCourses{
    
}
    
   