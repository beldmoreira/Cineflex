import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Sessions from "./components/Sessions";
import Seats from "./components/Seats";
import Success from "./components/Success";
import UpperSection from "./components/UpperSection";


export default function App(){
        
    return(
        <BrowserRouter>
            <Header/>
            <UpperSection/>
            <Routes>
             <Route path= "/" element={<MainPage/>}> </Route>
             <Route path= "/sessoes/:idFilme" element={<Sessions/>}> </Route>
             <Route path= "/assentos/:idSessao" element={<Seats/>}> </Route>
             <Route path= "/sucesso" element={<Success/>}> </Route>
            </Routes>           
        </BrowserRouter>

        
    );
}
