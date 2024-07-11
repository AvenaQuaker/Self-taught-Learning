import { Header } from "./Components/Header";
import { Counter } from "./Components/Counter";
import { Footer } from "./Components/Footer";

document.querySelector("#app").innerHTML = `
  <h1 class="bg-slate-400 text-red-800 p-10">Hello, World!</h1>
  ${Header()}
  ${Counter()}
  ${Footer()}
`;
