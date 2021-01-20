
import React from 'react'
let items = ['Dashboard','Pages', 'Charts', 'Tables']

function Navitems (){
    return(

       items.map (item => 
       <li class="nav-item">
                <a class="nav-link" href="/">
                <i class="fas fa-fw fa-table"></i>
                <span>{item}</span></a>
        </li>))}
        

export default Navitems
