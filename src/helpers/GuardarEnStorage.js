export const GuardarEnStorage = (clave, elemento) =>{

    // Conseguir los elementos que ya tenemos en localstorage
    let elementos= JSON.parse(localStorage.getItem(clave));
    
    //Comprobar si es un array 

    if(Array.isArray(elementos)){
      //Si es un array, añadir el nuevo elemento
      elementos.push(elemento);
    }else{
      //Crear un array, con la nuevo elemento
      elementos=[elemento];
    }

    //Guardar en el local storage
    localStorage.setItem(clave, JSON.stringify(elementos));
   
    //Devolver objeto
    return elemento;
  }