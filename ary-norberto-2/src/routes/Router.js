
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AtuacaoPage from "../paginas/AtuacaoPage/AtuacaoPage";
import ContatoPage from "../paginas/ContatoPage/ContatoPage";
import ErrorPage from "../paginas/ErrorPage/ErrorPage";
import QuemSouEuPage from "../paginas/QuemSouEuPage/QuemSouEuPage";
import HomePage from "../paginas/HomePage/HomePage";

export const Router =()=>{
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path="sobre" element={<QuemSouEuPage/>}/>
          <Route path="atuacao" element={<AtuacaoPage/>}/>
          <Route path="contato" element={<ContatoPage/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    )
}