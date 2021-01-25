
import React from 'react'

function DataMetrics (props){
    return(

        
        <div class="col-md-4 mb-4">
            <div class="card  shadow h-100 py-2" class= {props.metric.color}>
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.metric.titulo} </div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{props.metric.cifra} </div>
                        </div>
                        <div class="col-auto">
                            <i class="fa-2x text-gray-300" class={props.metric.icono}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
       

}

DataMetrics.defaultProps = {
    titulo: "No cuenta con titulo",
    cifra: "No cuenta con cifra",

}

export default DataMetrics









