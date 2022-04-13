import React from "react";
import logo from "./logo.svg";
import "./App.css";

const name = "hello";

let nameChange = "hello";
nameChange = "hello2";

let username: string = "hello";
let dummyNum: number = 2;
let bool: boolean = true;

let array1 = [true, false, true];
let array2: (string | number)[] = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = { first: "Yamada", last: null };

// Intersection Types
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const userA: USER = {
  age: 30,
  city: "Tokyo",
  username: "ryota",
  password: "password",
};

// Union Types
let arrayUni: (number | string)[];
arrayUni = [0, 1, 2, "hello"];

// Literal Types
let company: "Google" | "Facebook" | "Amazon";
company = "Amazon";

// typeof
let msg: string = "Hi";
let msg2: typeof msg;
msg2 = "hello";

let animal = { cat: "small cat" };
let newAnimal: typeof animal = { cat: "big cat" };

// keyof
type KEYS = {
  primary: string;
  secondary: string;
};
let key: keyof KEYS;
key = "primary";

// typeof + keyof

const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};

let keySports: keyof typeof SPORTS;
keySports = "soccer";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
