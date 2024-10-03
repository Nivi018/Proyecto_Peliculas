import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir Pelicula";

    const [peliState, setPeliState] = useState({
      titulo: '',
      descripcion: ''
    });

    const{titulo, descripcion}= peliState;

    const conseguirDatosForm = (e) => {
        e.preventDefault();

        {/*conseguir los datos del formulario*/}
        let target = e.target;

        //Conseguir datos del formulario
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Crear objeto  de  al pelicula a guradar
        let peli = {
            id:new Date().getTime(),
            titulo,
            descripcion
        }
        setPeliState(peli)


        ///Actualizar el estado del listado
         setListadoState(elemento =>{
          return [...elemento, peli]
         })

        //guardar estado
        console.log(peliState);


        ///Guardar enn el almacenamiento local
        ///llamada la heper 
        GuardarEnStorage("pelis",peli)

        //Limpiar el formulario
        target.reset();
       // alert(titulo+descripcion)
    }
 

    return (
    <div className="add">
     <h3 className="title">{tituloComponente}</h3>

     <strong>
      {(titulo && descripcion) && "Has creado la plicula: "+titulo}
     </strong> 

     

            <form onSubmit={conseguirDatosForm}> 
              <input 
                type="text" 
                name='titulo'
                id="titulo" 
                placeholder="Título" />

                <textarea 
                    id="descripcion"
                    name='descripcion'
                    placeholder="Descripción">
                </textarea>

              <input 
                type="submit"
                id="save" 
                value="Guardar" />

            </form>
    </div>
  )
}
