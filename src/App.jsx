import { Card } from "./components/card";
import { Card_children } from "./components/card_children";
import { Helloworld } from "./components/helloworld";
import { State } from "./components/state";
import { useState } from "react";

function App () {
  const [cont , setCont] = useState(0)

  function incremento (){
    setCont(cont + 1);
  }


  return (
    <State valorAtual={cont} incrementoFunction={incremento}/>
  )
}
export default App;