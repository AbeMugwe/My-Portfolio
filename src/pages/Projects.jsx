import NavBar from "../components/NavBar/Nav";
import { motion } from "framer-motion"
import './App.css'
const Projects=()=>{
    return(
        <div className="flex justify-center items-center flex-col">
            <NavBar/>
            <h1 className="text-5xl mt-10 mb-10 ">My Projects</h1>
            <motion.div className="flex gap-4 flex-wrap p-[20px] justify-center">
               <motion.div animate={{ x:0, transition:{duration:2} }} initial={{x:-100}} whileHover={{scale:1.1}} className="h-[400px] w-[300px] bg-black rounded-lg text-cyan-200 p-5 ">
                <h2 className="text-2xl text-center">Netflix-Clone</h2>
                <p className="text-center p5 mt-2">This is a replica of the Netflix Website and its functionalities <br/>
                Technologies Used:
                Frontend: <strong>HTML, CSS</strong></p>
                </motion.div>
               <motion.div animate={{ x:0, transition:{duration:2} }} initial={{x:-200}} whileHover={{scale:1.1}} className="h-[400px] w-[300px] bg-black rounded-lg text-cyan-200 p-5 hover:scale-105">
                <h2 className="text-2xl text-center">Rock-Paper-Scissors Game</h2>
                <p className="text-center p5 mt-2">This is a simple game that I created which allows you to play against a computer in a game of Rock-Paper-scissors. In the game you click on an image which refers to either rock paper or scissors to see if you'll be able to beat the CPU 
                Technologies Used:
                Frontend: <strong>HTML, CSS, JavaScript</strong></p>
                </motion.div>
               <motion.div animate={{ x:0, transition:{duration:2} }} whileHover={{scale:1.1}} initial={{x:-300}} className="h-[400px] w-[300px] bg-black rounded-lg text-cyan-200 p-5">
                <h2 className="text-2xl text-center">Weather App</h2>
                <p className="text-center p5 mt-2">This is an app which enables you to see the weather conditions of a specic area around the whole world
                <br/>
                Technologies Used:
                Frontend: <strong>HTML, CSS, JavaScript</strong></p>
                </motion.div>
               <motion.div animate={{ x:0, transition:{duration:2} }} whileHover={{scale:1.1}} initial={{x:-400}} className="h-[400px] w-[300px] bg-black rounded-lg text-cyan-200 p-5">
                <h2 className="text-2xl text-center">Job Search</h2>
                <p className="text-center p5 mt-2" >This app helps you find a job in a particular place and country that you search for. You can pick any place in the world and has a link taking you to the website of the the specific company that you have clicked
                <br/>
                Technologies Used:
                Frontend: <strong>HTML, CSS, JavaScript</strong></p>
                </motion.div>
            </motion.div>

        </div>

    )
}

export default Projects