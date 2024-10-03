import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusqueda] = useState('')
  const [noEncotrado, setNoEncotrado] = useState(false)


 const buscarPeli= (e)=>{

  //Crear estados y actualizarlo
  setBusqueda(e.target.value)
  //console.log(busqueda)

  //El listado completo de peliculas
   //filtrar para buscar coincidencias
  let pelis_encontradas = listadoState.filter(peli =>{
    return peli.titulo.toLowerCase().includes(busqueda.toLowerCase())
  })
  
  if(busqueda.length <= 1 || pelis_encontradas <= 0){
    pelis_encontradas = JSON.parse(localStorage.getItem("pelis"))
    setNoEncotrado(true)
  }else{

    setNoEncotrado(false)
  }

  //console.log(pelis_encontradas)

  //Actualizar estados del listado principal  con lo que logro filtrar
  setListadoState(pelis_encontradas)

 }

  return (
    <div className="search">
      <h3 className="title">Buscador: {busqueda}</h3>
      {(noEncotrado == true && busqueda.length > 1) && (
              <span className='no-encontrado'>Nos se ha encontrado ninguna coincidencia</span>

      )}

      <form>
        <input type="text"
               id="search_field"
               name='busqueda'
               autoComplete='off'
               onChange={buscarPeli}
        />

        <button id="search">Buscar</button>
      </form>
    </div>
  )
}
