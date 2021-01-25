import React from 'react'
import DatosTable from './DatosTable'


function Table (props){
    return(

                
            props.list.map(function(datos,i){
                return <DatosTable key={datos.name + i} datos={datos}/>
            })        
    
       

    )
}

export default Table




