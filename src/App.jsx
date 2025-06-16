import { Card } from "./components/card";
import { Card_children } from "./components/card_children";
import { Helloworld } from "./components/helloworld";

function App () {

  return (
    <section style={{display:'flex', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center'}}>
        <Card_children>
          <h1>Jane</h1>
          <p>Professora</p>
        </Card_children>

        <Card_children>
          <h1>Lucas</h1>
          <p>Aluno</p>
        </Card_children>

        <Card_children>
          <h1>Pedro</h1>
          <p>Diretor</p>
        </Card_children>
        
    </section>
  )

}
export default App;