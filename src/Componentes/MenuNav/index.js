import { Link} from 'react-router-dom'
import estilos from './MenuNav.module.css'

function MenuNav() {
    return (
       <nav className={`${estilos.navegacao}`}>
        <ul>
            <li>
                <Link to="/" 
                    className={`${estilos.link} ${estilos.linkAtivo}`}>
                        Inicio
                </Link>
            </li>
            <li>
                <Link to="/sobre" className={`${estilos.link}`}>
                    Sobre
                </Link>
            </li>
            <li><Link to="/lancamentos" className={`${estilos.link}`}>Lançamentos</Link></li>
            </ul>
        </nav>    
    )
  }
  
  export default MenuNav;