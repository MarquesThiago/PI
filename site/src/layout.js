import React from "react"
import logo from "./img/logo.png"


export default function Layout (){
    return (
        <>
            <header>
                <div className="header_site">
                    
                        <div className="block-top">
                        </div>
                        
                        {/* <div className = "block-top-second">                            
                        </div> */}

                        
                        <img srcSet= {logo} className='logo' alt="logo" />

                        <h1 className='titulo'>Reciclar Cores</h1>
                    
                </div>
            </header>
           
        </>
    )
}