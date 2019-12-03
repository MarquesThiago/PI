import React from "react"
import "../../style/home.css"
// import {id, className } from "postcss-selector-parser"

export default function Home(){
    const ret = () => {
        var views = document.querySelector(".views")
        console.log(views)
    }
  
    
    async function rep (ident) {
        var rea = document.querySelector('#'+ident)
        console.log(rea)
        
        
        await rea.classList.toggle('views')

        ret()
        
    }
    
    return(

        <>
            <div className="content-main" >
                <h1> Bem-vindo ao Reciclar Cores </h1>
                <h2> Agradeçemos sua presença</h2>

                <p> A todos gostariamos de agradecer por estarem presentes aqui hoje e esperamos 
                    poder passar algumas das expriencias que vivencimaos na realização do nosso 
                    Projecto Integrador. Mas que isso queremos que poder agregar na vida de cada,  
                    conhecimentos sobre esse tema tão importante que é a sustentabilidade. 
                </p>
            </div>
            <button className="link firts-action"  onClick = { event => {rep('firts')}} >
                 <h2>Reciclagem Senac</h2>
                 
                 
            </button>

            <div className="link-content" id="firts">
                
            </div>

            

            <button className="link second-action" onClick = { event => {rep('second')}}>
                <h2>Dia da Grande Ação</h2>
                
            </button>

            <div className="link-content" id='second'>
                
            </div>


            <button className="link  third-action" onClick = { event => {rep('third')}}>
                <h2>Palestra LOGA</h2>
            </button>

            <div className="link-content" id= "third">
                <h3>Apresentação das informações apresentadas por representante da empresa LOGA</h3>
                <p> A LOGA e a empresa logistica uma das duas empresas responsaveis  pela coleta de lixo no Estado de São Paulo.</p>
            </div>
            
        </>
    )

}
