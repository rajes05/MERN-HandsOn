let person1 = {
    // properties
    name: "John",
    age: 30,
    isMarried: false,
    contactNumber:980000000,

    // method
    info : function(){
       return ("Hello, my name is "+ this.name + " and I am " + this.age + "year old "+ this.contactNumber + "is my contact ");
    }
}
const result = console.log(person1.info());
console.log(result);