import { BiImageAdd } from 'react-icons/bi';
import FormBox from '../../containers/FormBox/FormBox';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import images from '../../constants/images';

import './Register.scss';

function Register() {
    return (
        <div className="regpage">
            <div className="regpage__container">
                <div className="regpage__container__resume">
                    <div className="regpage__container__resume-box">
                        <div className="regpage__container__resume-box-photo">
                            <button type="button">
                                <BiImageAdd size={32} className="icon" />
                            </button>
                            <img src={images.userImg} alt="user" />
                        </div>
                        <div>
                            <h2>Nombre</h2>
                            <h3>Usuario</h3>
                        </div>
                    </div>
                </div>
                <div className="regpage__container__formBx">
                    <FormBox
                        footerMessage="¿Ya tienes una cuenta?"
                        linkMessage="inicia sesión"
                        link="/registro"
                    >
                        <RegisterForm />
                    </FormBox>
                </div>
            </div>
        </div>
    );
}

export default Register;
