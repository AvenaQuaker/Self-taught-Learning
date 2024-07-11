import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Juan", "Pedro", "Ana", "Maria"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };
  const handleSelect2 = (elemento: string) => {
    console.log("Mostrrando", elemento);
  };
  return (
    <Card>
      <CardBody title="Hola Mundo" text="Este es el texto" />
      <List data={list} onSelect={handleSelect} />
      <List data={list} onSelect={handleSelect2} />
    </Card>
  );
}

export default App;
