import React, { useEffect } from 'react';
import estilos from './PegandoDados.module.css';
import ListagemItens from '../ListagemItens';


function PegandoDados(props) {

    //console.log(props.dados)
    const imagens = props.dados.map((dados) => (dados.links.patch.small
    ))

    //console.log(imagens)
  
    const youtube = props.dados.map((dados) => (dados.links.webcast))
    //console.log(youtube)
    return (
        
        <div className={estilos["card-container"]}>
           
        <ListagemItens dados={props.dados} />
    </div>
        
       
    );
}

export default PegandoDados;
/* return (
       
        <div className={estilos["card-container"]}>
            {
               
                props.dados.map((dados) => {
                    return <div className={estilos["card"]}>
                        <p className={estilos["name"]} key={dados.name}>{dados.name}</p>
                        <p className={estilos["details"]} key={dados.details}>{dados.details}</p>
                        <p className={estilos["date_local"]} key={dados.date_local}>{dados.date_local}</p>
                        <p key={dados.flight_number}>{dados.flight_number}</p>
                        <img alt="img" className={estilos["imagens"]} src={dados.links.patch.small} />
                        <a href={dados.links.webcast}>{dados.links.webcast}</a>
                       
                        <ListagemItens dados={props.dados}/>
                       
                    </div>
                    
                })
                
            }
         
        </div>
    );*/
