import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <header className =  'bg-gray-600'>
      <div>
        <h1 className = 'px-3 py-1  text-white font-bold text-center text-3xl'>AUTOMATAS FINITOS DETERMINISTAS</h1>
      </div>
          <nav className = 'mt-5 py-5'>
            <ul className = 'flex justify-evenly uppercase'>
              <li 
              className = 'p-2  font-bold border rounded bg-slate-200 hover:bg-slate-900 hover:text-white  text-black cursor-pointer uppercase'>
              <Link href = {'/'}>Inicio</Link>
              </li>
              <li 
              className = 'p-2  font-bold border rounded bg-slate-200 hover:bg-slate-900 hover:text-white  text-black cursor-pointer uppercase'>
              <Link href = {'/ejercicio01'}>Automata 01</Link>
              </li>
              <li 
              className = 'p-2  font-bold border rounded bg-slate-200 hover:bg-slate-900 hover:text-white  text-black cursor-pointer uppercase'>
              <Link href = {'/ejercicio02'}>Automata 02</Link>
              </li>
              <li 
              className = 'p-2  font-bold border rounded bg-slate-200 hover:bg-slate-900 hover:text-white  text-black cursor-pointer uppercase'>
              <Link href = {'/ejercicio03'}>Automata 03</Link>
              </li>
              <li 
              className = 'p-2  font-bold border rounded bg-slate-200 hover:bg-slate-900 hover:text-white  text-black cursor-pointer uppercase'>
              <Link href = {'/ejercicio04'}>Automata 04</Link>
              </li>
              <li 
              className = 'p-2  font-bold border rounded bg-slate-200 hover:bg-slate-900 hover:text-white  text-black cursor-pointer uppercase'>
              <Link href = {'/ejercicio05'}>Automata 05</Link>
              </li>
            </ul>
          </nav>
    </header>
  )
}

export default header
