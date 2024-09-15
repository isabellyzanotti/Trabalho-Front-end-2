import { Icon } from '@iconify/react';
import estilos from './Footer.module.css'
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className={estilos.footer}>
            <span>Página desenvolvida por {props.autor}</span>
            <div className={estilos.links}>
                <a href="https://github.com/isabellyzanotti" target="_blank" rel="noopener noreferrer">
                    <Icon className={estilos.icones} icon="mdi:github" />
                </a>
                <a href="  https://www.linkedin.com/in/isabelly-zanotti-315735251/" target="_blank" rel="noopener noreferrer">
                    <Icon className={estilos.icones} icon="bi:linkedin" />
                </a>

                <a href="https://www.instagram.com/isa.zanottii?igsh=MWw5ejVkOTk1NHNkaA==" target="_blank" rel="noopener noreferrer">
                    <Icon className={estilos.icones} icon="mdi:instagram" />
                </a>

                <Link to="/zap">
                    <Icon className={estilos.icones} icon="mdi:whatsapp" />
                </Link>

         

            </div>
        </footer>
    )
}

export default Footer;