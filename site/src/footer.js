import React from 'react'
import {Link} from 'react-router-dom'
import logo from './img/logo.png'
export default function Footer (){
    return (
        <>
            <div className="footer-block">
                <div className="description">
                    <div>
                        <img srcSet= {logo} className='footerlogo' alt="logo" />
                            <p className="footertitle ">Reciclar Cores</p>  
                
                    </div>
                   
                </div>
             

                <div>
                    <p>Inicio</p>
              </div> 

              <div>
              
                  <p>Palestra Senac</p>

                    <a href="\" >Galeria</a> 
              </div>
              
              <div>
              <ul> 
                    <li>
                       Ação Principal
                       
                    </li>
                    <ul>
                           <li>
                               galeira
                           </li>
                    </ul>
                </ul>
              </div>

              
              <div>
              <ul> 
                    <li>
                        Palestra Loga
                    </li>
                    <li>
                        galeira
                    </li>
                </ul>
              </div>

            </div>
           
        </>
    )
}