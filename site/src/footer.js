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
                    <p><a href="/"> Inicio </a></p>
                </div> 



                <div className="footer-item-menu">
              
                  <p><a href = "/palestra_senac/photos"> Palestra Senac </a></p>

                    <a href="/palestra_senac/receita" >Receita</a> 
                </div>
              



                <div className="footer-item-menu">
                        
                            <p><a href="/grandeDia">Ação Principal</a></p>
                       
                            
                          
                </div>


              
              <div className="footer-item-menu">
               
                       <p><a href="/palestra_loga">Palestra Loga </a></p>
                    
                
              </div>



            </div>



        </div>

           
        </>
    )
}