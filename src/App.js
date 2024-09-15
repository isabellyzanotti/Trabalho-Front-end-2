import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import estilos from './App.module.css';
import PegandoDados from './Componentes/API/PegandoDados';
import Footer from './Componentes/Footer';
import Header from './Componentes/Header';
import MenuNav from "./Componentes/MenuNav";
import Inicio from "./Paginas/Inicio";
import NaoEncontrada from "./Paginas/Nao Encontrada";
import Sobre from "./Paginas/Sobre";
import ItemPage from "./Paginas/ItemPage";
import ItemCard from "./Componentes/ItemCard";
import ListagemItens from "./Componentes/ListagemItens";
import Zap from "./Paginas/Zap";




function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => { fetchData() }, [setDados]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.spacexdata.com/v5/launches');
            const data = await response.json()
            setDados(data);

        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
    };

    useEffect(() => { console.log(dados) }, [dados]);

  return (

    <div className="box">
      <BrowserRouter>

        <Header />
        <MenuNav />

        <Routes>

          <Route path="/" element={<Inicio />} />
          <Route path="/*" element={<NaoEncontrada />} />
          <Route path="/Sobre" element={<Sobre />} />
          <Route path="/lancamentos" element={<ListagemItens dados={dados}/>} />
          <Route path="/ItemPage/:id" element={<ItemPage dados={dados}/>} />
          <Route path="/zap" element={<Zap/>} />

        </Routes>

        <Footer autor="Isabelly Zanotti" />
      </BrowserRouter>
    </div>
  );
}

export default App;
