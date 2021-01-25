
import React from 'react'
import DataMetrics from "./DataMetrics"

function ContainerMetrics (props){
    return(

                
            props.list.map(function(metric,i){
                return <DataMetrics key={metric.titulo + i} metric={metric}/>
            })
            
   
       
          
    
       

    )
}

export default ContainerMetrics









