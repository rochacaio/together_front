import { useNavigate } from 'react-router-dom';
import  illustationImg from '../assets/images/illustration.svg';
import logo from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';
import '../styles/auth.scss'
import { Button } from "../components/Button";
import {useAuth} from "../hooks/useAuth";

export function Home() {
    const navigate = useNavigate();
    const { user,signInGoogle } = useAuth()

    function loginAutenticate(){

    }
    async function handleCreateRoom(){
        if(!user){
           await signInGoogle()
        }

        navigate("/rooms/new");
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustationImg} alt="Ilustração de perguntas e respostas" />
                <strong> Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Letmeask-studies" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}