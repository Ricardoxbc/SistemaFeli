
function Login() {
	return (
		<>
			<div className="login-wrap cover">
				<div className="container-login">
					<p className="text-center" style={{ fontSize: "80px" }}>
						<i className="zmdi zmdi-account-circle"></i>
					</p>
					<p className="text-center text-condensedLight">Acceda con su cuenta</p>
					<form action="/home">
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
							<input className="mdl-textfield__input" type="text" id="usuario" />
							<label className="mdl-textfield__label" htmlFor="userName">Usuario</label>
						</div>
						<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
							<input className="mdl-textfield__input" type="password" id="password" />
							<label className="mdl-textfield__label" htmlFor="pass">contraseña</label>
						</div>
						<button className="mdl-button mdl-js-button mdl-js-ripple-effect" style={{ color: "#3F51B5", margin: "0 auto", display: "block" }}>
							Iniciar Sesion
						</button>
					</form>
				</div>
			</div>
		</>
	)
}

export default Login
