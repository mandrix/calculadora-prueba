import React, {useState, useEffect } from 'react';
import Boton from "./boton.js";
import pantalla from "./pantalla.js";
function Teclado (){


    const [mostrar, setMostrar] = useState("");

    const insertar = (num) => {
        setMostrar(mostrar + num);
    }

    const calcular = () => {
        setMostrar(eval(mostrar)+"");
    }

	return <table  className="teclado">
            <tbody>
               <tr>
                <td> { pantalla(mostrar) } </td>
              </tr>

              <tr>
                <td> { Boton(1, insertar) } </td>

                <td>{Boton(2, insertar)}</td>

                <td>{Boton(3, insertar)}</td>

              </tr>

              <tr>

                <td>{ Boton(4, insertar)}</td>

                <td>{ Boton(5, insertar)}</td>

                <td>{ Boton(6, insertar)}</td>

              </tr>

               <tr>

                <td>{ Boton(7, insertar)}</td>

                <td>{ Boton(8, insertar)}</td>

                <td>{ Boton(9, insertar)}</td>

              </tr>

               <tr>

                <td>{ Boton("+", insertar)}</td>

                <td>{ Boton(0, insertar)}</td>

                <td>{ Boton("=", calcular)}</td>

              </tr>
              </tbody>
            </table>
}

export default Teclado;