import estilos from './NaoEncontrada.module.css'

function NaoEncontrada() {
    return (
        <div className={estilos.naoEncontrada}>
          
            <div>
                <h1>Oops! Página não encontrada 😓</h1>
                <p>
                    Parece que você se perdeu no caminho... 😅 A página que você está procurando não existe ou foi movida para um novo endereço.</p>

                <p>  Mas não se preocupe, você ainda está a um clique de distância da nossa página inicial.</p>

               <p> Volte para a página inicial e continue sua jornada!</p>

            </div>
        </div>
    )
}

export default NaoEncontrada