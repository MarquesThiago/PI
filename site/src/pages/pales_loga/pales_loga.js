import React from "react"
import {Link} from "react-router-dom"
import "../../style/principal/gallery/gallery.css"
import im1 from "../../img/Photos/third_action/01.jpg"
import im2 from "../../img/Photos/third_action/02.jpg"
import im3 from "../../img/Photos/third_action/03.jpg"
import im4 from "../../img/Photos/third_action/04.jpg"
import im5 from "../../img/Photos/third_action/05.jpg"



export default  function () {

    const arrowLeft = "<-"
   

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
                <p  >clique no meio para visulalizar as imagens e nas laterais para passar de imagem e no circulo para visualizar a descrição </p>
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={im1} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen">
                        <div className="txt_screen_black">
                            <p className="ttl_black_screen">Loga</p>
                            <p >A loga é uma Empresa de Logística Ambiental de São Paulo, que realiza serviços 
                                especializados de coleta, transporte, tratamento e destinação final dos resíduos 
                                domiciliares e de saude (Hospitalar)</p>
                            <p >A Loga atua em atendendo 7 milhões de munícipes operando diariamente, 24 horas por dia, nos 
                                365 dias do ano.</p>
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
                        
                        <img className="images"srcSet={im2} id="image2"/>

                    </div>
                    <div className="buttom_red_screen" id="black_screen2">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Beneficios</p>
                            <p >É importante lembrar alguns dos benefícios que Empresas como a Loga e a EcoUrbis que realizam os serviços de coleta no Estado de São Paulo como:
                            </p>
                            <p >I.Qualidade do ar e o controle de odores e efluentes líquidos.</p>
                            <p>II.Eliminação do risco de contaminação do solo e da água.</p>
                            <p>III.Plantio de árvores.</p>
                            <p>IV.Visual moderno e limpo e etc.</p>
                            
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen2', "black_screen2")}}>
                            <div className="red_of_screen" id="redScreen2"></div>
                        </button>
                    </div>


            </div>




            <div className="gallery_popup " id="screen3">


                {/* screen content one */}
                <div className= "screen">
                    <button className="btn_image" onClick={ 
                        event => { NewVw ()}
                        }>    
                    </button>
                    
                    <img className="images"srcSet={im3} id="image2"/>

                </div>
                <div className="buttom_red_screen" id="black_screen3">
                    <div className="txt_screen_black">
                    <p className="ttl_black_screen">Alguns dados</p>
                            <p>Só a loga:</p>
                            <p>Recolher domiciliarmente 6 mil toneladas de lixo por dia</p>
                            <p>+ de 15 mil com coleta de saúde</p>
                            <p>E 2.500 toneladas de coleta seletiva (reciclaveL)</p>
                            <p>Sendo que o pais gera cerca de 19,3 mil toneladas por dia.</p>
                            <p>Além de que no Brasil só 3% é reaproveitado, entretanto 30% do 
                                lixo poderia ser reaproveitado</p>
                    </div>
                    <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen3', "black_screen3")}}>
                        <div className="red_of_screen" id="redScreen3"></div>
                    </button>
                </div>


                </div>

                <div className="gallery_popup " id="screen4">


                    {/* screen content one */}
                    <div className= "screen">
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={im4} id="image2"/>

                    </div>
                    <div className="buttom_red_screen" id="black_screen4">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Mais uma pergunta.</p>
                            <p> A loga e a EcoUrbis monitoram 5 aterros desativados</p>
                            <p >O aterro da Bandeirantes (Tamanho: 1.400.000m²), o aterro da Vila Albertina
                                (capacidade de 9,2 milhões/t de resíduos), de São João 
                                (capacidade de 30.000.000 toneladas), o São Mateus e o de Santo Amaro</p>
                            <p>Hoje utilizamos o Aterro de Caieiras que tem vida útil até 2041 depois daí ainda não se sabe, para onde vai o lixo.</p> 
                           
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen4', "black_screen4")}}>
                            <div className="red_of_screen" id="redScreen4"></div>
                        </button>
                    </div>


                </div>

                <div className="gallery_popup " id="screen5">


                {/* screen content one */}
                <div className= "screen">
                    <button className="btn_image" onClick={ 
                        event => { NewVw ()}
                        }>    
                    </button>
                    
                    <img className="images"srcSet={im5} id="image2"/>

                </div>
                <div className="buttom_red_screen" id="black_screen5">
                    <div className="txt_screen_black">
                    <p className="ttl_black_screen">O que agregou</p>
                            <p > Graças a Loga e sua represente podemos tirar inúmeras dúvidas sobre separação do lixo algumas curiosidades e conhecer mais sobre a Loga e o sistema de destinação dos resíduos.
                                <br/>
                                Não sendo só isso nos trouxe inúmeros dados sobre o a produção de lixo nacional, destinação e os futuros problemas ocasionados pela produção de resíduos.<br/>
                                E agradecer a Turma 81 por eles terem participado dessa experiência com a nossa turma.

                            </p>
                    </div>
                    <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen5', "black_screen5")}}>
                        <div className="red_of_screen" id="redScreen5"></div>
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