import type { CSSProperties } from "react";

const firstName = "lucas";
const lastName = "san martin";
const favoriteGames = ["elder", "god of war", "dragon ball"];
const isActive = true;
const address = {
  zipCode: "abc-123",
  country: "chile",
};
const myStyles: CSSProperties = {
  background: "red",
  borderRadius: 10,
  padding: 10,
  marginTop: 30,
};
export function MyAwesomeApp() {
  return (
    <>
      <h1>{firstName} </h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <p>{2 + 2}</p>
      <h1>{isActive ? "activo" : "no activo"}</h1>
      <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  );
}
