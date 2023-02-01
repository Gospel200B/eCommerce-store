class TelephoneManager{
    constructor() {
        this.phoneNumbers = new Set();
    }

    add(phoneNumber) {
        this.phoneNumbers.add(phoneNumber)
    }

    remove(phoneNumber) {
        this.phoneNumbers.delete(phoneNumber)
    }

    dial(phoneNumber){
        this.phoneNumbers.dial(phoneNumber)
    }

    notify(context) {
        for (let phoneNumber of this.phoneNumbers) {
            phoneNumber.update(context)
        }
    }
}

class UserphoneNumber{
    constructor(phoneNumber) {}
    update(context) {

    }

   
}

const Gospel = new TelephoneManager();


const Enemuo = new UserphoneNumber("5387557676");
const verike = new UserphoneNumber("683866737998");

Gospel.add(Enemuo);
Gospel.add(verike)
console.log(Gospel.phoneNumbers)

Gospel.notify({type : +2348069248171, reason : "Now dialing +2348069248171" })