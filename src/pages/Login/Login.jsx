import FormBox from '../../containers/FormBox/FormBox';
import LoginForm from '../../components/LoginForm/LoginForm';
import images from '../../constants/images';

import './Login.scss';

function Login() {
    return (
        <div className="page">
            <div className="login">
                <div className="login__bg">
                    <img src={images.slider} alt="" />
                </div>
                <div className="login__info">
                    <FormBox
                        footerMessage="¿Todavía no tienes una cuenta?"
                        linkMessage="Crea una ahora"
                        link="/register"
                    >
                        <LoginForm />
                    </FormBox>
                </div>
            </div>
        </div>
    );
}

export default Login;
