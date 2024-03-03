import { Link, Route, Routes } from "react-router-dom";
import { LogIn } from "./LogIn";
import { FetchData } from "./FetchData";

export function Navigation (){
 return( 
    <div>
        <Link to="/">home</Link>
        <Link to="/about">About</Link>
        <Link>Contacts</Link>
        <Routes>
            <Route path="/" element={<LogIn/>}/>
            <Route path="/about" element={<FetchData/>}/>
        </Routes>
    </div>
    )  
}