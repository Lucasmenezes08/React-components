export function Card_children (props){
    return (
        <div style={{backgroundColor: 'blue', width: '10rem', height: '10rem', borderRadius: '15px',display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
            {props.children}
        </div>
    );
}