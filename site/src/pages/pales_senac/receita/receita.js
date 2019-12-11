import React from "react"
import "../../../style/receita/receita.css"
import Cake from "../../../img/Photos/gallery/cake.jpg"
import {Link} from "react-router-dom"

export default function(){

    var arrowLeft = "<-"
    var arrowRight = "->"
    return(
        <>
            
            
            
            <div className ="recipe_content">
                <p className="ttl_cake_oranje">Receita de Bolo de Casca de Laranja</p> 
            
                <div className="content_cake">
                    <img srcSet={Cake}  className="cake"/>
                </div>
               <div className="ingredients">
                   <p className="ttl_txt">Ingredientes</p>
                   <hd/>
                   
                   <ul className="list txt_ingredients">
                        <li>
                            4 unidades de casca de banana
                        </li>
                        <li>
                            2 unidades de ovo
                        </li>
                        <li>
                            2 xícaras de leite
                        </li>
                        <li>
                            2 colheres de margarina
                        </li>
                        <li>
                            3 xícaras de chá de açúcar
                        </li>
                        <li>
                            3 xícaras de chá de farinha de rosca
                        </li>
                        <li>
                            1 colher de sopa de fermento em pó
                        </li>
                   </ul>
               </div>

               <div className="model_prepare">

                    <p className="ttl_txt"> Modo de Prepararo </p>


                    <ul className="list txt_prepare">
                       <li>Lave as bananas e descasque.</li>
                       <li>Separe 4 xícaras de casca para fazer a massa.</li>
                       <li>Bata as claras em neve e reserve, na geladeira.</li>
                       <li>Bata no liquidificador as gemas, o leite, a margarina, o açúcar e as cascas de banana.
</li>
                       <li>Despeje essa mistura em uma vasilha e acrescente a farinha de rosca.</li>
                       <li>Mexa bem.</li>
                       <li>Por último, misture delicadamente as claras em neve e o fermento.</li>
                       <li>Despeje em uma assadeira untada com margarina e farinha</li>
                       <li>Leve ao forno médio pré- aquecido por aproximadamente 40 minutos.</li>
                    </ul>

               </div>

               <div className="content_link_recipe" >
                   <p className="link_recipe"> Receita Retirada: <a href="https://www.tudogostoso.com.br/receita/9693-bolo-de-casca-de-banana.html">
                   Tudo Gostoso - Bolo de Casca de Banana
                       </a> </p>
               </div>
               
            </div> 
            <div className="gallery_links">

            <div className="link_left">
                <Link to="/palestra_senac/photos" exact>
                
                <p>
                    {arrowLeft} Voltar a galeria
                </p>
                
                </Link>
            </div>

            <div className="link_right">
                <Link to="/" exact>
                <p>
                    
                   Voltar ao inicio {arrowRight}
                </p> 
                
                </Link>


            </div>
        
        </div> 
            

        </>
    )
}   