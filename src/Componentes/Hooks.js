import React, { useState, useEffect } from 'react';

function Hooks(props) {

    const [contador, setCount] = useState(props.initialNumber);
    const [productos, setProductos] = useState([]);
// 
    const handleClick= ()=>{
        setCount(contador+1);
    }

    const next=()=>{
    
        setCount(contador+1);
            
        
    }
    const prev=()=>{
        setCount(contador-1);
    }


    const fetchApi = ()=>{
        console.log("llamar");
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data =>  {
            setProductos( data.products)})
    }

    useEffect (()=>{
        fetchApi();
    }, [contador]);

    return (<div>
        {contador}
        {
        /* El interrogante mira si existe la variable que queremos recuperar, 
        de esta manera evitamos que salte la excepción */
        }
        <br/>{productos[contador]?.title}<br/>
            <img src={productos[contador]?.images[0]} alt='images'></img> 
        <br/>{productos[contador]?.description}<br/>
      
        <button onClick={prev}>
        Anterior
        </button>
        <button onClick={next}>
        Siguiente
        </button>
        <br/><button onClick={handleClick}>
        Cambiar
        </button>
       
    </div>);
}
export default Hooks;