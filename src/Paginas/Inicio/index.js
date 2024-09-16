import estilos from './inicio.module.css';

function Inicio() {

    return (
        <body>
            <div className={estilos.inicio}>
                <img src='../images/spacex-inicio.jpg' alt='logoSpace' className={estilos.logo} />
                <h1>Bem-vindo à SpaceX</h1>

                <h3>Explore o Futuro da Exploração Espacial com a SpaceX, ou Space Exploration Technologies Corp, é uma das
                    pioneiras na revolução espacial moderna.
                    Fundada por Elon Musk em 2002, a SpaceX tem transformado o setor espacial com suas inovações audaciosas
                    e visão de longo prazo. Com uma missão clara de tornar a humanidade multiplanetária, a empresa tem
                    alcançado marcos impressionantes e mudado o rumo da exploração espacial. </h3>

                <h3> Inovações que Definem a Nova Era Espacial</h3>
                <p><strong>1. Foguetes Reutilizáveis:</strong> A SpaceX revolucionou o lançamento de foguetes com o
                    desenvolvimento de
                    sistemas reutilizáveis. O Falcon 9, por exemplo, é projetado para retornar à Terra e pousar
                    verticalmente, economizando milhões de dólares por lançamento e reduzindo os custos de acesso ao espaço.
                </p>

                <p><strong>2. Missões para Marte:</strong> A SpaceX não se contenta em apenas explorar o espaço próximo. O
                    ambicioso projeto Starship visa levar seres humanos a Marte e além, estabelecendo uma presença
                    permanente no planeta vermelho e abrindo novas fronteiras para a exploração espacial.</p>

                <p><strong>3. Transporte Espacial Comercial:</strong>Com o Dragon e o Crew Dragon, a SpaceX está redefinindo o transporte
                    espacial. O Dragon é a primeira cápsula comercial a entregar carga à Estação Espacial Internacional
                    (ISS), e o Crew Dragon trouxe astronautas da NASA de volta à ISS, marcando um retorno da capacidade de
                    lançamento humano aos EUA após quase uma década.</p>

                <p> Conectando o mundo com Starlink
                    além de seus avanços em foguetes e exploração, a SpaceX está expandindo a conectividade global com o
                    Starlink. Esta constelação de satélites em órbita baixa visa fornecer internet de alta velocidade para
                    áreas remotas e subatendidas ao redor do mundo, promovendo uma maior inclusão digital e acesso à
                    informação.</p>

                <p> A Revolução da Indústria Espacial
                    A SpaceX não é apenas uma empresa de exploração espacial; é uma força catalisadora que está moldando o
                    futuro da nossa presença no cosmos. Seus esforços contínuos para reduzir os custos de lançamento,
                    aumentar a eficiência e expandir as capacidades de transporte espacial estão abrindo novas
                    possibilidades e inspirando uma nova geração de cientistas, engenheiros e exploradores.</p>

                <p>Ao explorar as incríveis conquistas da SpaceX, você está se conectando a uma jornada emocionante no universo da exploração espacial. Descubra detalhes fascinantes sobre lançamentos, foguetes, cápsulas e muito mais, enquanto acompanhamos juntos a evolução e os avanços desta nova era de exploração além dos limites da Terra</p>

                <h2>O que você pode encontrar aqui:</h2>
                <ul>
                    <li><strong>Lançamentos:</strong> Detalhes sobre os lançamentos passados, presentes e futuros da SpaceX,
                        incluindo datas, horários e missões.</li>
                    <li><strong>Foguetes:</strong> Informações sobre os diferentes foguetes da SpaceX, suas especificações e
                        capacidades.</li>
                    <li><strong>Cápsulas:</strong> Dados sobre as cápsulas que a SpaceX utiliza para transportar carga e
                        astronautas.</li>
                    <li><strong>Starlink:</strong> Informações sobre a constelação de satélites Starlink e suas operações.
                    </li>
                    
                </ul>

            </div>
        </body>

    )
}
export default Inicio;