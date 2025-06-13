import { Card } from "./components/card";
import { Helloworld } from "./components/helloworld";

function App () {

  return (
    <section style={{display:'flex', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center'}}>
        <Card 
          titulo='Lucas' 
          subtitle='Menezes'
        />

        <Card 
          titulo='Jane' 
          subtitle='Caetano'
        />

        <Card 
          titulo='Laura' 
          subtitle='Menezes'
        />
    </section>
  )

}
export default App;