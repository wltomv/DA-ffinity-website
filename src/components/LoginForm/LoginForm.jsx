import './LoginForm.scss';

function LoginForm() {
    return (
        <div className="container">
            <div className="container-logo">
                <h2>DAFFI</h2>
            </div>
            <div className="container-form">
                <h3>Bienvenido</h3>
                <div>
                    <span>user</span>
                    <input type="text" name="" id="username" />
                </div>
                <button type="button">INICIAR SESION</button>
            </div>
            <span>
                ¿Todavía no tienes una cuenta?
                <a href="/">Crea una ahora</a>
            </span>
        </div>
    );
}

export default LoginForm;
