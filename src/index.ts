interface Human {
    name: string,
    age: number,
    gender: string
};

const person = {
    name : "heedong",
    age: 25,
    gender: "male"
    
};

const sayHello = (person: Human): void => {
    console.log(`Hello ${person.name}, age is ${person.age}, gender is ${person.gender}`);
}

sayHello(person);

export {}