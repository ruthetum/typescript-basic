class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
};

const heedong = new Human("heedong", 25, "male");

const sayHello = (person: Human): void => {
    console.log(`Hello ${person.name}, age is ${person.age}, gender is ${person.gender}`);
}

sayHello(heedong);

export {}