const person = {
  name: "tony",
  age: 45,
  key: "ironman",
};

const { name: ironmainName, age, key } = person;

//const name = person.name;
//const age = person.age;
//const key = person.key;

console.log({ ironmainName, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const useContext = ({ name, age, key, rank = "nn" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank: rank,
  };
};

const { rank, keyName, user } = useContext(person);

const { name } = user;

console.log({ rank, keyName, name });
