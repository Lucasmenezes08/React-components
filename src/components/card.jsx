export function Card (props){
    return (
        <div style={{backgroundColor: 'blue', width: '10rem', height: '10rem', borderRadius: '15px',display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            <h1>{props.titulo}</h1>
            <p>{props.subtitle}</p>
        </div>
       

    );
}