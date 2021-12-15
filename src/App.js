import {Link} from 'react-router-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./components/Header.js"


export default function App(){

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
             {/* <Route path= "/explore" element={<ExplorePage/>}></Route>  */}
            </Routes>           
        </BrowserRouter>

        // <Link to ="/">
        //     <button> </button>
        // </Link>
    );
}