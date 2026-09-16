interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

interface Address {
  psotalcode: string;
  city: string;
}

const ironman: (
  Person,
  address,
) => {
  firstName: "tony";
  lastName: "stark";
  age: 45;
  address: {
    psotalcode: "asdasdasd";
    city: "new york";
  };
};

console.log(ironman);

//const spiderman = structuredClone(ironman);

//spiderman.firstName = "peter";:
//spiderman.lastName = "parker";
//spiderman.age = 22;
//spiderman.address.city = "san jose";

//console.log(ironman, spiderman);
