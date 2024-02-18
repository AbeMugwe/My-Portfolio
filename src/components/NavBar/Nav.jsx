import Button from "../Button"
import Image from '../../assets/logo.png'

import './nav.css'


const NavBar=()=>{
    return(
        <nav>
            <div className="NavImage">
                <img src={Image}/>
            </div>

            <div className="NavText">
                <a href="">Me</a>
                <a href="">About</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
            </div>

            <div>
                <Button color='bg-red-50'></Button>

            </div>

        </nav>
    )
}

export default NavBar