import { Link } from "react-router-dom";
import illustationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import '../styles/auth.scss'
import { Button } from "../components/Button";
import {useAuth} from "../hooks/useAuth";

export function NewRoom() {
const { user,signInGoogle } = useAuth()
    return (
        <div id="page-auth">
            <aside>
                <img src={illustationImg} alt="Ilustração de perguntas e respostas" />
                <strong> Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}