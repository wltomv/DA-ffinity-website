import { useWeb3React } from '@web3-react/core';
import { Link } from 'react-router-dom';
import Connector from '../../components/Connector/Connector';
import './HeroSection.scss';

function HeroSection() {
    const { active } = useWeb3React();
    return (
        <div className="heropg">
            <div className="heropg__connect">
                <Connector />
            </div>
            <div className="heropg__content">
                <h1>
                    Bienvenido a <span>Daffinity</span>
                </h1>
                <span>Una red social descentralizada en blockchain</span>

                {!active ? (
                    <p>Para iniciar conecta tu wallet</p>
                ) : (
                    <div className="heropg__content-start">
                        <Link to="/login">Iniciar sesión</Link>
                        <Link to="/register">Registrarse</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HeroSection;
