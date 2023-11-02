import "./App.css";
import ButtonIcon from "./components/ButtonIcon";
import Input from "./components/Input";
import Item from "./components/Item";
import Title from "./components/Title";
import Footer from "./containers/Footer";

const itemContent: string[] = [
  "Buy a new gaming laptop",
  "Complete a previous task",
  "Create video for youtube",
  "Create a new pro folio site",
];

function App() {
  return (
    <div className="todo">
      <Title></Title>
      <div className="container-search">
        <Input></Input>
        <ButtonIcon></ButtonIcon>
      </div>
      {itemContent.map((each) => {
        return <Item label={each} />;
      })}
     <Footer />
    </div>
  );
}

export default App;
