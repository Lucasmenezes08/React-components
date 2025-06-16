export function State ({valorAtual , incrementoFunction}){
    return (
        <div>
            <h2>Cont: {valorAtual} </h2>
            <button onClick={incrementoFunction}>Incremente</button>


        </div>
       
    )
}