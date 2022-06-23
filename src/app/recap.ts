  const username: string = 'imorales';
  const suma = (a: number, b: number) => {
    return a + b;
  }

  suma(1,2);

  class Person {
    protected age: number;
    private lastname: string;

    constructor(age: number, lastname: string){
      this.age = age;
      this.lastname = lastname;
    }
  }

  const ale = new Person(23, 'Morales');

  //ale.age = 18;
