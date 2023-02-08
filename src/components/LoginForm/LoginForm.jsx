import './LoginForm.scss';

function LoginForm() {
    return (
        <div className="login-form">
            <h3>Bienvenido</h3>
            <div>
                <span>user</span>
                <input type="text" name="" id="username" />
            </div>
            <button type="button">INICIAR SESION</button>
        </div>
    );
}

export default LoginForm;
