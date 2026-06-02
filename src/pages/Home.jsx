import "./Home.css"
import frontImage from "../assets/FA3EBDB0-7777-406E-A175-A7B8E8F00FFE_1_105_c.jpeg"
import secondFront from "../assets/_HEY4208.jpg"

function Home () {
    return (
        <div className="home">
            <img src={frontImage} alt="interior" />
            <img src={secondFront} alt="desk"/>
            <div className="home-overlay"></div>
            <div className="home-text">
            <h1>Skab dit drømmehjem</h1>
            <p>Professionel indretning med hjertet i det skandinaviske</p>
            </div>
        </div>
    )
}

export default Home