
import React from 'react'



function DatosTable (props){
    return(

									<tbody>
										<tr>
											<td>{props.datos.name}</td>
											<td>{props.datos.description}</td>
											<td>{props.datos.price}</td>
											<td>
                                           
												<ul>
                                                {props.datos.categories.map (category =>
                                                    <li>{category}</li>
                                                    )}
												</ul>
                                              
											</td>
											<td>
												
                                                
                                                <ul>
                                                {props.datos.colors.map (color =>
													<li><span class="text-danger">{color}</span></li>
                                                    )}
												</ul>
											</td>
											<td>{props.datos.stock}</td>
										</tr>
										
									</tbody>
							

        )      

}

DatosTable.defaultProps = {
    name: "No cuenta con nombre",
    description: "No cuenta con una descripcion",
    price: "No cuenta con un precio",
    categories: "No cuenta con categrias",
    colors: "No cuenta con colores"

}

export default DatosTable









