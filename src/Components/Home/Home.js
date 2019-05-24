import React from "react";
import { Link } from 'react-router-dom';


const Home = () =>{

    return(
    <div className="note-container-component">
        <Link to={"/notes"}>
        <button>View Notes
        </button>
        </Link>
    </div>
    ) ;
}


export default Home
