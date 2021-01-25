
import React from 'react'
let totalCategories = ['Category 01','Category 02',' Category03',' Category04','Category 05','Category 06']

function Categories (){
    return(

        totalCategories.map (category => 
        <div class="col-lg-6 mb-4">
            <div class="card bg-info text-white shadow">
                <div class="card-body">
                    {category}
                </div>
            
            </div>
         </div>
        )
       
        
    
    
       

    )
}

export default Categories









