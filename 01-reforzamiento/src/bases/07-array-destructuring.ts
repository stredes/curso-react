const characterNames = ["Goku", "Veggeta", "Trunks"];

//const [p1, p2, p3] = characterNames;
const [, , Trunks] = characterNames;

console.log({ Trunks });
//console.log({ p1, p2, p3 });

const returnsArrayFn = () => {
  return ["abc", 123] as const;
};

const [letras, numeros] = returnsArrayFn();

console.log(letras, numeros);

const useState = (value: string) => {
  return [
    value,
    (newValue: string) => {
      console.log(newValue);
    },
  ] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Veggeta");
