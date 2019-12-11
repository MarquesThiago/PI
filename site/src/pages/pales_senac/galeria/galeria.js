import React from "react"
import {Link} from "react-router-dom"
import "../../../style/principal/gallery/gallery.css"
import img1 from "../../../img/Photos/first_action/01.jpg"
import { styles } from "ansi-colors"




export default  function () {

    const arrowLeft = "<-"
    const arrowRight = "->"

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

        let NowScreenStr = NowScreen.toString()
        let idScreen = document.querySelector("#screen"+ NowScreenStr )

        await idScreen.classList.remove("galllery_popup_act")

        

        console.log(NowScreen)
        console.log(idScreen)
        
         

        if  ( NowScreen  === 2 ) {

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
                <p  >clique no meio para visulalizar as imagens</p>
                </div>
                    {/* screen content one */}
                    <div className= "screen">
                    
                        <button className="btn_image" onClick={ 
                            event => { NewVw ()}
                            }>    
                        </button>
                        
                        <img className="images"srcSet={img1} id="image1"/>
                    
                    </div>
                    <div className="buttom_red_screen" id="black_screen">
                        <div className="txt_screen_black">
                        <p className="ttl_black_screen">Conversa com a equipe de limpeza do SENAC</p>
                            <p >Gostariamos de agradecer a equipe de limpeza do SENAC, por serem parte
                                da primeira ação do nosso P.I. e a Experiência proporcionada.
                            </p>
                            <p>Este dia foi definitivamente o ponto inicial do nosso P.I. o que começou
                                no intuito de orientativo, se tornou um rica troca de informação, e apartir dali
                                começamos a nos questionar o que pode ser reciclado, o que permite que esse material 
                                seja reciclavel ou não (seu estado se esta sujo ou molhado entre outras coisas) e o 
                                que mais poderiamos reutilizar.
                            </p>
                    
                        </div>
                        <button className="red_in_screen" id="btnRedScreen" onClick={event => { NewScreenRed('redScreen', "black_screen")}}>
                            <div className="red_of_screen" id="redScreen"></div>
                        </button>
                    </div>


                </div>


            {/* <button className="next_img btn_p"  onClick = {event => { nextImage() }}> </button>
            <button className="behing_img btn_p" onClick = {event => { antImage()}}> </button> */}

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

        <div className="link_right">
            <Link to="receita" exact>
             <p>
                 
                  Receita de bolo de casca de laranja {arrowRight}
            </p> 
            
            </Link>


        </div>
        
        </div> 

       </>
       
   )
}