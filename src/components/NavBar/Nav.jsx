import Button from "../Button"
import Image from '../../assets/logo.png'
import {Link} from "react-router-dom"

import './nav.css'



const NavBar=()=>{
    return(
        <nav>
            <div className="NavImage">
                <img src={Image}/>
            </div>

            <div className="NavText">
                <Link to="/">Me</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contacts">Contact Me</Link>
            </div>

            <div>
                <Button color='bg-red-50'></Button>

            </div>

        </nav>
    )
}

export default NavBar