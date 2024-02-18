import './header.css'
import image from '../../assets/Me.jpg'

const Header=()=>{
    return(
        <section>
            <div className='HeaderText'> 
                <h1>Hey there I'm Abraham;</h1>
                <p>I'm currently a student at Zindua Coding school studying to be a software Developer</p>
                <p>I have interacted with coding languages such as <strong>JavaScript,React</strong> and <strong>CSS </strong></p>
                <p>I have been learning for a month with the help of my TM and fellow students</p>
                <p>If you want more information about me click the image </p>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                    <img src={image}/>
                    </div>
                    <div className='card-back'>
                        <h3>More Info:</h3>
                        <h4>My Hobbies:</h4>
                        <p>Love playing and watching sports</p>
                        <p>Fascinated with cooking</p>
                        <p>Love playing mind oriented games</p>
                        <h4>My Aspiration</h4>
                        <p>To help in the creation of something new</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header