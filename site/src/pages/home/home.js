import React from "react"
import "../../style/home.css"
import {Link} from "react-router-dom"
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

                <h2 className="home-menu-ttl">Palestras com os Funcionarios da Limpeza do SENAC</h2>

                <p className="home-menu-txt">A palestra no SENAC foi elaborada para passar alguns 
                dos conhecimentos obtidos durante nossa investigação sobre o tema gerar do Projeto 
                (sustentabilidade: Reciclagem), o que por coincidência os funcionários da limpeza do 
                Senac também estava realizam uma trabalho sobre a separação de lixo.</p>

                <p className="home-menu-txt">Estruturamos uma apresentação que introduzisse 
                algumas das orientações sobre o tema. O resultado desta ação não poderia ser mais 
               inesperado, pois durante a realização obtivemos grandes trocas de 
                informações. conhecimento que atriubuiram nas realização das ações posterioes.</p>




                <dvi className = "view_otherpg">
                    <p className ="text-pre-btn">Clique abaixo  para visualiza a galeria de fotos</p>
                    <br/>

                    <Link to="/palestra_senac/photos">

                        <button className="btn">Galeria</button>
                    </Link>
                </dvi>


            </div>

            

            <button className="link second-action" onClick = { event => {rep('second')}}>
                <h2>Dia da Grande Ação</h2>
            </button>

            <div className="link-content" id='second'>

                <h2 className="home-menu-ttl"> Dia da Grande Ação</h2>

                <p className="home-menu-txt">O nosso Projeto Integrador foi 
                gerado pensando em algo que fosse interativo e pudesse mudar as 
                coisas realmente, o que foi um ponto crucial para decidirmos nosso 
                público alvo. Pois temos a consciência que as crianças são o futuro
                 e quem realmente vai fazer diferença.</p>

                <p className="home-menu-txt">A grande ação realizado em uma escola 
                de Pirituba, não poderia ter resultado melhor, indiferente as 
                possíveis adversidades.</p>


                <dvi className = "view_otherpg">
                    <p className ="text-pre-btn">Clique abaixo  para visualiza mais sobre o conteudo</p>
                    <br/>

                    <Link to="/grandeDia">

                        <button className="btn">Ver Mais</button>
                    </Link>
                </dvi>

            </div>


            <button className="link  third-action" onClick = { event => {rep('third')}}>
                <h2>Palestra LOGA</h2>
            </button>

            <div className="link-content" id= "third">
            
                <h2 className="home-menu-ttl">Apresentação das informações apresentadas por 
                representante da empresa LOGA </h2>

                <p className="home-menu-txt" >Com a colaboração de uma das funcionárias da empresa 
                LOGA, uma das empresas responsáveis pela a logística de recolhimento de resíduos do 
                Estado de São Paulo. Podemos nos aprofundar mais no conhecimento de um tema que não 
                e tão discutido: “o lixo para onde vai? ”, esse foi o tema ao qual girou 
                a palestra. </p>

                <p className="home-menu-txt">Também tivemos o prazer de contar com a de outra turma do 
                SENAC, que tinha também o tema gerador sustentabilidade, e junto com eles esclarecer
                inúmeras dúvidas.</p>


                <dvi className = "view_otherpg">
                    <p className ="text-pre-btn">Clique abaixo  para visualiza mais sobre o conteudo</p>
                    <br/>

                    <Link to="/palestra_loga">

                        <button className="btn">Ver Mais</button>
                    </Link>
                </dvi>
                

            </div>


            <button className="link  third-action" onClick = { event => {rep('fourth')}}>
                <h2>Teatro</h2>
            </button>

            <div className="link-content" id= "fourth">
            
                <h2 className="home-menu-ttl">É o Depois do Reciclar Cores </h2>

                <p className="home-menu-txt" >Representa o que tínhamos em mente quando escolhemos o 
                nosso público alvo. Esperança que vai muito além do nosso projeto, que esta nas 
                crianças a qual nós tentamos passar conhecimentos sobre sustentabilidade, mas com foco
                 em reciclagem e mais podemos dizer que conseguimos, e acreditamos que essa jovens cidadãos 
                 levem este conhecimento a frente.</p>

                <p className="home-menu-txt">Também procuramos demostrar a energia e um pouco da 
                experiência que foi trabalhar com esse publico que não dispensa interação e são super dinâmicos </p>

            </div>


            <button className="link  third-action" onClick = { event => {rep('fifth')}}>
                <h2>Quiz</h2>
            </button>

            <div className="link-content" id= "fifth">
            
                <h2 className="home-menu-ttl">Quiz - Repasse de conhecimento</h2>

                <p className="home-menu-txt" >O quiz tem como objetivo propiciar uma experiencia divertida e rica, tentando passar os conhecimentos atingidos tanto através de nossas pesquisas, mas também das experiências vividas durante o projeto, tais conhecimento que obtivemos tanto da equipe de limpeza do Senac, quanto da representante da Loga  e até mesmo das crianças</p>

                <p className="home-menu-txt alert">Se liga pessoal para o melhor grupo tem um surpresa</p>

            </div>
            
            
            
        </>
    )

}
