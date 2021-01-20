const name = "heedong",
    age = 25,
    gender = "male";

const sayHello = (name: string, age: number, gender: string): void => {
    console.log(`Hello ${name}, age is ${age}, gender is ${gender}`);
}

sayHello(name, age, gender);

export {}