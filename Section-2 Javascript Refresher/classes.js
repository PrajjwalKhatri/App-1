// classes are blueprint of javascript objects

class Human{
    constructor(){
        this.gender = "male"; // properties
    }

    //method
    printGender(){
        console.log(this.gender);
    }
}

//inheritance
class Person extends Human{
    constructor(){
        super()
        this.name = "Vishal"
    }

    printData(){
        console.log({
            "name": this.name,
            "gender": this.gender
        })
    }

}

var person1 = new Person()
person1.printData()