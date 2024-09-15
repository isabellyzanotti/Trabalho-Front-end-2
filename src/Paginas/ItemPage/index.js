import { useParams } from 'react-router-dom'
import estilos from './ItemPage.module.css'
import { useState, useEffect } from 'react';
import ItemCard from '../../Componentes/ItemCard';
import ListagemItens from '../../Componentes/ListagemItens';
import { useNavigate } from 'react-router-dom';

function ItemPage(props) {

  const [data, setData] = useState(null);

  const { id } = useParams()


  useEffect(() => {
    if (props.dados) {
      const item = props.dados.find((elemento) => (elemento.id === id))
      setData(item)
    } else {
      console.log('Erro...')
    }

  }, [props.dados, id]);
  //console.log(parametros)
  useEffect(() => { console.log(data) }, [data]);

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/lancamentos'); 
    window.scrollTo(0, 0); // Rola para o topo da página
    
  };
  return (
    <>
    
      {
        data ? (
          <div className={estilos.box}>

            <div className={estilos["divInfo"]}>

              <h1>{data.name}</h1>

              <div className={estilos.divImg}>
                <img alt="img" className={estilos.image} src={data.links.patch.small} />
              </div>

              <p className='details'>{data.details}</p>

              <p className={estilos.date_local}>{data.date_local}</p>
              
              <p>
                <a href={data.links.webcast} className={estilos["youtube"]} target="_blank" rel="noopener noreferrer">
                  Assita ao vídeo no YouTube
                </a>
              </p>
              
              <button onClick={handleBackClick}>
                Voltar             
                </button>
              

            </div>
          </div>) : (
          <p>Carregando...</p>

        )
        
      }
      
    </>


  );
}

export default ItemPage;