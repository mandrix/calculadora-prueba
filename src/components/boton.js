function Boton (num, func){
	return <button className="button" onClick={() => func(num)}> {num} </button>;
}

export default Boton;