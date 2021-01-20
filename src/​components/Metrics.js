
import React from 'react'
let amounts = [{name:'Products in Data Base', number: '135'},{name:'Amount in products', number:'$546.456'}, {name:'Users quantity', number:'38'}]

function Metrics (){
    return(

        amounts.map (amount => 
        <div class="col-md-4 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> {amount.name}</div>
                            <div class="h5 mb-0 font-weight-bold text-gray-800">{amount.number}</div>
                        </div>
                        <div class="col-auto">
                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
       
          
    
       

    )
}

export default Metrics









