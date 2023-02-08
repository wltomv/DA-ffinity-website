import './RegisterForm.scss';

function RegisterForm() {
    return (
        <div className="register-form">
            <h3>Registro</h3>
            <div>
                <span>Nombre</span>
                <input type="text" name="" id="username" />
            </div>

            <div>
                <span>Usuario</span>
                <input type="text" name="" id="username" />
            </div>
            <button type="button">Registrarse</button>
        </div>
    );
}

export default RegisterForm;
