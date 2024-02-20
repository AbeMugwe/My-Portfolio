import NavBar from "../components/NavBar/Nav";
import './App.css'
import { motion } from "framer-motion"

const About=()=>{
    return(
        <div className="flex flex-col items-center">
            <NavBar/>
            <h1 className="text-5xl mt-10 col font-bold">Who is Abraham?</h1>
            <motion.div className="h-[400px] w-[800px] bg-black mt-10 rounded-2xl  p-5 text-xl" initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0 }}>
                <p className="text-sky-200">As a budding software developer, I bring a passion for coding and a commitment to continuous learning to every project. , I have experience building <strong>A Rock,Paper and Scissors game, A weather App, Netflix clone and Job Search App</strong>. With a solid foundation in algorithms, data structures, and software design principles, I thrive in collaborative environments where I can contribute innovative solutions to complex problems. Eager to leverage my skills and expand my expertise, I am seeking opportunities to grow and make meaningful contributions in the field of software development.</p>
                <p  className="text-white"> I'm Proficient in multiple programming languages, including:</p>
                <li className="text-white">JavaScript</li>
                <li className="text-white">CSS</li>
                <li className="text-white">React</li>
                <li className="text-white">HTML</li>        
            </motion.div>
            <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  />
            
        </div>

    )
}

export default About
