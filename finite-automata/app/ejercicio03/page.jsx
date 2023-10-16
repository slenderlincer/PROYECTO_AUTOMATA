'use client'
import React, {useState} from 'react'


const Ejericio03 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');
    

    const matriz = [
        [1, 0, 200],
        [2, 0, 200],
        [2, 3, 200],
        [1, 4, 200],
        [4, 4, 200]
    ];
    const analizar = () => {
        //La palabra que pone el usuario en arreglo
        const c = palabra.split('');
        //La variable que controla el ciclo para la iteracion
        let i = 0;
        //variable estado que funcionara como estado inicial
        let estado = 0;
        //creamos la variable caracter
        let caracter = 0;

        const resultado = document.querySelector('#resultado');

        //Crear patrones para analizar la palabra caracter por caracter
        const isA = new RegExp('[a]');
        const isB = new RegExp('[b]');


        while (i < c.length) {
            if(isA.test(c[i])){
                caracter = 0;
    
            }if(isA.test(c[i])){
                caracter = 0;
    
            }else if(isB.test(c[i])){
                caracter = 1;
            }else if(isB.test(c[i])){
                caracter = 4;
            }else{
                caracter = 2;
            }
        
        estado = matriz[estado][caracter]

        if (estado === 200) {
            setResultado('palabra invalida')
            resultado.className = 'mt-5 bg-red-500 text-center font-bold text-white uppercase rounded';
            return
        }
        i++
    }
    if(estado === 0 || estado === 1|| estado === 2|| estado === 3){
        setResultado('palabra aceptada')
        resultado.className = 'mt-5 bg-green-500 text-center font-bold text-white uppercase rounded';
    }else{
        setResultado('palabra invalida')
        resultado.className = 'mt-5 bg-red-500 text-center font-bold text-white uppercase rounded';
    }
}
  const limpiar = () => {

  setPalabra('');
  setResultado('');
  }
  return (
    <div className = 'max-w-lg mx-auto mt-5'>
      <h1 className = 'text-center font-bold'>DFA que acepta todas las cadenas sobre "a, b" que no contengan la palabra "aabb"</h1>
      <div className = 'mt-5'>
        <input 
        className = 'w-full p-2 rounded'
        value = {palabra} onChange = {e => setPalabra(e.target.value)} id = 'variable' type="text" placeholder = 'Coloca la entrada'/>
      </div>
      <div>
        <button 
        className = 'mt-5 w-full bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'
        id = 'analizar' onClick={analizar}>analizar la entrada</button>
      </div>
      <div>
          <button onClick={limpiar} className= 'mt-5 w-full bg-teal-400 p-3 uppercase font-bold cursor-pointer rounded hover:bg-teal-600'>
                    Limpiar
          </button>
      </div>
      <div id = "resultado">
        {resultado}
      </div>
    </div>
  )
}

export default Ejericio03
