import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  //const [listadoState, setListadoState] = useState([]);

  const [editar, setEditar] = useState(0);

  useEffect(() => {

    console.log("Componente del listado de peliculas cargado!!")
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  }


  const borrarPeli = (id) => {
    //alert(id)

    ///conseguir peliculas almacenadas
    let pelis_almacenadas = conseguirPeliculas()

    /// Filtrar esas peliculas para eliminar del arrerglo el elemento deceado
    let nuevo_array_pelicilas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id))
    //console.log(pelis_almacenadas, nuevo_array_pelicilas)

    //Actualiza el estado listado
    setListadoState(nuevo_array_pelicilas)

    //Acatualizar los datos del localStorage
    localStorage.setItem('pelis', JSON.stringify(nuevo_array_pelicilas))
    alert("pelicula eliminada" + " " + id)
  }

  return (
    <div id="content" className="content">

      {listadoState != null ?
        listadoState.map(peli => {
          return (

            /* aquí van las películas */
            <article key={peli.id} className="peli-item">

              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() => { setEditar(peli.id) }}>Editar</button>

              <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>

              {/*mostar formulario de editar */}

              {editar === peli.id && (
                <Editar
                  peli={peli}
                  conseguirPeliculas={conseguirPeliculas}
                  setEditar= {setEditar}
                  setListadoState={setListadoState}
                />
              )}

            </article>
          );
        })
        : <h2>No hay peliculas para mostrar</h2>
      }

    </div>
  )
}
