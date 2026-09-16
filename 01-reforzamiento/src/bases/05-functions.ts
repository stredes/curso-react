function greet(name: string): string {
  return `hola ${name}`;
}

const greet2 = (name: string) => ` hola ${name}`;

const message = greet("goku");
const message2 = greet2("veggeta");
console.log(message, message2);

interface User {
  uid: string;
  username: string;
}

function getUser(): User {
  return {
    uid: "anc-123",
    username: "stredes",
  };
}

const getUser2 = (): User => ({
  uid: "asda-31223",
  username: "stredes2",
});

const user2 = getUser2();
const user = getUser();
console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];
//myNumbers.forEach(function (value) {
//  console.log({ value });
//});

//myNumbers.forEach((value) => {
//  console.log(value);
//});
//myNumbers.forEach((value ,index ,arr) => {
//  console.log(value, index, arr);
//});

myNumbers.forEach(console.log);
