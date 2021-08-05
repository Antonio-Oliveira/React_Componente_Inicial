import Item from "./components/Item";
import Card from "./components/Card"
const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <u>
        <Item>
          item 1
        </Item>
        <Item>
          item 2
        </Item>
        <Item>
          item 1
        </Item>
      </u>
      <h1><Card /></h1>
    </>
  )
}

export default App;