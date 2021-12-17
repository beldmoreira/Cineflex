import { BrowserRouter,Routes,Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";


export default function App(){

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
             <Route path= "/" element={<MainPage/>}> </Route>
             <Route path= "/filme/37" element={<Sessions/>}> </Route>
             <Route path= "/sessao/240" element={<Seats/>}> </Route>
             <Route path= "/sucesso" element={<Success/>}> </Route>
            </Routes>           
        </BrowserRouter>

        
    );
}