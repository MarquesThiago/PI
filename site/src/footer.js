import React from 'react'
import {Link} from 'react-router-dom'
import logo from './img/logo.png'
export default function Footer (){
    return (
        <>


            {/*principal block of the footer, responsible by 
            visual Mark,
            Name
            and link from the instagram
             */}
            

            <div className="footer-block">
                <div className="description">
                    <div className="footer-visualmark">
                        <img srcSet= {logo} className='footerlogo' alt="logo" />
                            <p className="footertitle ">Reciclar Cores</p>  
                
                    </div>
                   
                </div>
             






             {/* responsible by menu in footer items:
             inicio, palestra com equipe do senac, acão principal e palestra loga */}
             


            
            <div className="footer-menu-bt">

                
                <div className ="footer-item-menu">
                    <p>Inicio</p>
                </div> 



                <div className="footer-item-menu">
              
                  <p>Palestra Senac</p>

                    <a href="\" >Galeria</a> 
                </div>
              



                <div className="footer-item-menu">
                        
                            <p>Ação Principal</p>
                       
                               <p> galeira </p>
                          
                </div>


              
              <div className="footer-item-menu">
               
                       <p> Palestra Loga </p>
                    
                        <p>galeira </p>
                
              </div>



            </div>



        </div>

           
        </>
    )
}