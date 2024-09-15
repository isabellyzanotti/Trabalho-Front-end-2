import { Link } from "react-router-dom";
import estilos from "./ItemCard.module.css"

function ItemCard(props) {
    return (

        <div className={estilos.divItens}>

            <Link to={`/ItemPage/${props.dados.id}`}>
                <p>{props.dados.name}</p>
                <img className={estilos["imagens"]} src={props.dados.links.patch.small} alt="imagem"/>

            </Link>


        </div>
    );
}


export default ItemCard;
