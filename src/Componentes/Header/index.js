import estilos from "./Header.module.css"

function Header() {

    console.log(estilos)

    return (
        <header>
            <div className={estilos["header-titulo"]}>
                <img src="/images/logoSpace.png" className={estilos["header-logo"]} alt="Imagem da logo da SpaceX"/>
            </div>
        </header>
    )
}



export default Header