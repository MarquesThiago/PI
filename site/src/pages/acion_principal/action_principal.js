import React from "react"
import {Link} from "react-router-dom"
import "../../style/principal/gallery/gallery.css"
import jg1 from "../../img/Photos/action_principal/2act_jg1.jpg"
import tt1 from "../../img/Photos/action_principal/2act_tt1.jpg"
import co1 from "../../img/Photos/action_principal/coisas01.jpg"
import enc01 from "../../img/Photos/action_principal/enc01.jpg"
import rc from "../../img/Photos/action_principal/reciclagem01.jpg"
import pt from "../../img/Photos/action_principal/plant01.jpg"


export default  function () {

    const arrowLeft = "<-"
   
    var imgs = []

    const NewVw = async () => {


       let img_viewer = document.querySelectorAll(".images")
       let img_viewerL = document.querySelectorAll(".images").length

            console.log(img_viewer)

            for (let i = 0 ; i < img_viewerL; i++){

                console.log(i)
                img_viewer[i].classList.toggle('img_visible')
                
            }



   
    }

    const NewScreenRed = async (id_of_button, id_div) =>{

        let buttonR = document.querySelector("#"+ id_of_button)
        let divViewer = document.querySelector('#'+id_div)

        buttonR.classList.toggle('red_active_screen')
        divViewer.classList.toggle('black_txt_screen')
    }

    var  Popups = document.getElementsByClassName("gallery_popup").length
    var  NowScreen = 1

    var nextImage = async () => { 
        Popups = document.getElementsByClassName("gallery_popup").length
        let NowScreenStr = NowScreen.toString()
        let idScreen = document.querySelector("#screen"+ NowScreenStr )

        await idScreen.classList.remove("galllery_popup_act")

        
        console.log(NowScreen)
        console.log(idScreen)
        
       

        if  (  NowScreen  >= Popups ) {

               NowScreen =  1
                console.log("igual a um")
            
        }

        else {

            NowScreen = NowScreen + 1 
            console.log("mais um")
        }
        
        

        
         NowScreenStr = await NowScreen.toString()
        
         idScreen = await document.querySelector("#screen"+ NowScreenStr )
        
        console.log(idScreen)
        await idScreen.classList.add("galllery_popup_act")
    }

    var antImage = async () => { 
        Popups = document.getElementsByClassName("gallery_popup").length

        let NowScreenStr = NowScreen.toString()
        let idScreen = document.querySelector("#screen"+ NowScreenStr )

        await idScreen.classList.remove("galllery_popup_act")

        

        console.log(NowScreen)
        console.log(idScreen)
        
        
        console.log("passou " + NowScreen)
         
        
        let decrem =  NowScreen-1

        console.log(decrem)

        if (decrem == 0 ){

           decrem = Popups
           console.log("passou" + decrem)
        
        }

        NowScreen= decrem

        
         NowScreenStr = await NowScreen.toString()
        
         idScreen = await document.querySelector("#screen"+ NowScreenStr )
        
        console.log(idScreen)
        await idScreen.classList.add("galllery_popup_act")
    }

    
   return (

       <>
        <div className="gallery_nav">
            <div className="gallery_nav_shd">
            

                <div className="gallery_popup galllery_popup_act" id="screen1">
                <div className="txt_gallery">
                <p  >clique no meio para visulalizar as imagens e nas laterais para passar de imagem</p>
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={tt1} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen">
                        <div className="txt_screen_black">
                            {/* <div className = "txt_on_screen" > */}
                            <p className="ttl_black_screen">Teatro de Fantoches - Abertura</p>
                            <p >Teve a função de criar aproximação com as crianças, 
                                desenvolvida pensando em uma abordagem divertida, interativa 
                                e com elementos imaginarios  onde aconteceu uma introdução ao tema.</p>
                            <p >A historia fala sobre super-horois da reciclagem, e mostra o 
                                quão divertido pode ser a reciclagem.</p>
                            {/* </div> */}
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen', "black_screen")}}>
                            <div className="red_of_screen" id="redScreen"></div>
                        </button>
                    </div>


                </div>


                <div className="gallery_popup " id="screen2">


                    {/* screen content one */}
                    <div className= "screen">
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={jg1} id="image2"/>

                    </div>
                    <div className="buttom_red_screen" id="black_screen2">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Caminho da Reciclagem</p>
                            <p>Semelhante a um jogo de tabuleiro as crianças tinham um caminho a seguir, 
                                possuiam dados a qual podiam jogar e avançar casas. Cada casa tinha uma especificação a 
                                se resolver, em maioria eram perguntas sobre reciclagem. Claro que as crianças
                                 poderiam contar com o auxilio dos instrutores para ajudar passar pelo percurso, até porque 
                                 jogo tinha unicamente como carater orientar sobre a reciclagem.</p>
                            
                         </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen2', "black_screen2")}}>
                            <div className="red_of_screen" id="redScreen2"></div>
                        </button>
                    </div>


            </div>

            <div className="gallery_popup " id="screen3">
                <div className="txt_gallery">
                
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={rc} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen3">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Dinamica do Lixo</p>
                            <p >Foi um momento onde as crianças dizeram a oportunidade 
                                de conhecer um pouco mais sobre separação de lixo e o esquema
                                 de cores. Criamos um jogo a qual elas tinham, de realizar essa 
                                 separação do lixo e ao final ganhavam uma lembrancinha.</p>
                            <p >Durante sua realização foi um total supresa saber o quanto as 
                                crianças tinham conhecimento sobre assunto e o quão bem direcionas estavam.</p>
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen3', "black_screen3")}}>
                            <div className="red_of_screen" id="redScreen3"></div>
                        </button>
                    </div>


                </div>



                <div className="gallery_popup " id="screen4">
                <div className="txt_gallery">
                <p></p>
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={co1} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen4">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen"></p>
                            <p> </p>
                            
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen4', "black_screen4")}}>
                            <div className="red_of_screen" id="redScreen4"></div>
                        </button>
                    </div>


                </div>



                <div className="gallery_popup" id="screen5">
                <div className="txt_gallery">
                <p></p>
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={pt} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen5">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Plantio</p>
                            <p >Plantamos com as crianças algumas mudas, 
                                a qual elas, mais tarde puderam levar para casa. Tentamos 
                                propiciar um contato real com a natureza, sempre reforçando 
                                o carinho e o cuidado que temos de ter com o Meio Ambiente</p>
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen5', "black_screen5")}}>
                            <div className="red_of_screen" id="redScreen5"></div>
                        </button>
                    </div>


                </div>



                <div className="gallery_popup" id="screen6">
                <div className="txt_gallery">
                <p></p>
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={enc01} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen6">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Encerramento</p>
                            <p >Ao final dos dias de realização da ação, 
                                presentiamos as crianças com uma capa e mascara feitos 
                                com materiais reciclados, e os nomeamos herois da reciclagem
                            </p>
                            <p >Realmente esperamos que esse projeto tenha mudado a visão dessas 
                                crianças, assim como mudou a nossa. E humildemente agradecemos ao
                                funcionarios da Escola Estadual Professor Alípio de Barros, que nos 
                                permitiram realizar esta ação.</p>
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen6', "black_screen6")}}>
                            <div className="red_of_screen" id="redScreen6"></div>
                        </button>
                    </div>


                </div>

            <button className="next_img btn_p" onClick = {event => { nextImage() }}> </button>
            <button className="behing_img btn_p" onClick = {event => { antImage()}}> </button>

            </div>
        
        
        </div>

        

        




        <div className="gallery_links">

        <div className="link_left">
            <Link to="/" exact>
            
            <p>
                {arrowLeft} votar ao Inicio
            </p>
            
            </Link>
        </div>
        
        </div> 

       </>
       
   )
}