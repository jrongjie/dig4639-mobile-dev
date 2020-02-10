{ var a = 5;}
console.log(a);

class Pet {
    constructor(props){
        this.props = props;
    }
    getName(){
        return this.props.name;
    }
    getSpecies(){
        return this.props.species;
    }
    getSpeech(){
        return "I make this sound: ";
    }
    getId = () => {
        console.log(this);
    }
    getSum = (a,b) => {
        return a + b;
    }
}

class Cat extends Pet {
    constructor(props){
        super(props);
        this.props.species = "cat";
    }
    getSpeech(){
        return super.getSpeech() + "Meow!";
    }
}

class Dog extends Pet {
    constructor(props){
        super(props);
        this.props.species = "dog";
    }
    getSpeech(){
        return super.getSpeech() + "Woof!";
    }
}

function sayName(pet){
    console.log(`My name is ${pet.getSpecies()}, and I am a ${pet.getSpecies()}`);
    console.log(`${pet.getSpeech()}`);
}

let myPet = new Cat({name:"Fido"});
let myDog = new Dog({name:"Rex"})
let myId = myPet.getId; //assign the method getId to the variable myId
myId(); //call the new function using the myId variable

sayName(myPet);
sayName(myDog);
myPet.getId();
myDog.getId();
console.log(myDog.getSum(10, 20));

//npx create-react-app hello_world
//expidited way to get started, will create the subdirectory and then make the node_modues, public, src, gitignore, package-lock.json, package.json, and readme