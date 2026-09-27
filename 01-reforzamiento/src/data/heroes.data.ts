export interface Hero {
  id: number;
  name: string;
  owner: Owner;
}

//type Owner = "DC" | "marvel";

enum Owner {
  DC = "DC",
  marvel = "marvel",
}

const heroes: Hero[] = [
  {
    id: 1,
    name: "batman",
    owner: Owner.DC,
  },
  {
    id: 2,
    name: "spiderman",
    owner: Owner.marvel,
  },
  {
    id: 3,
    name: "superman",
    owner: Owner.DC,
  },
  {
    id: 4,
    name: "flash",
    owner: Owner.DC,
  },
  {
    id: 5,
    name: "wolverine",
    owner: Owner.marvel,
  },
  {
    id: 6,
    name: "green lanter",
    owner: Owner.DC,
  },
];

//export default heroes;
