
import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";

import 'jquery/dist/jquery';
import 'bootstrap/dist/js/bootstrap.min';
import Frontend from "./frontend/frontend";
import '@fortawesome/fontawesome-free/css/all.css'
import Backend from "./backend/Backend";


function App() {
   return <div>
     <BrowserRouter>
         <Routes>
             <Route path= '/' element={<Frontend></Frontend>} ></Route>
             <Route exact path= '/products' element={<Backend></Backend>} ></Route>
             <Route exact path='/product' element={<Backend></Backend>}></Route>
             <Route exact path='/edit' element={<Backend></Backend>}></Route>
         </Routes>
     </BrowserRouter>

   </div>
}

export default App;
