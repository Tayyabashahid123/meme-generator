import trollFace from "../trollface.png"
import "../index.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} alt="troll face"
            />
            <h1>Meme Generator</h1>
        </header>
    )
}