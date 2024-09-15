import PegandoDados from "../API/PegandoDados"
import ItemCard from "../ItemCard"
import estilos from "./ListagemItens.module.css"



function ListagemItens(props) {

    //useState    

    return (

        <div >
            
           
            <div className={estilos.containerItens}>
                    {   
                        props.dados.map((elemento) =>
                            (<ItemCard key={elemento.id} dados={elemento} />)

                        )

                    }
            </div>
        </div>
    )
}

export default ListagemItens