import React from "react"

const Login = ({
	closeModal,
	handleSubmit,
	handleUserChange,
	handlePassChange,
	username,
	password
}) => {
	return (
		<div id="login">
			<div className="login-card">
				<div className="card-title">
					<h1>Inicia Sesion</h1>
				</div>

				<div className="content">
					<form onSubmit={handleSubmit}>
						<input
							id="email"
							type="text"
							value={username}
							name="Username"
							title="user"
							placeholder="Usuario"
							onChange={handleUserChange}
							required
							autofocus
						></input>
						<input
							id="password"
							type="password"
							value={password}
							name="Password"
							title="password"
							placeholder="Contraseña"
							onChange={handlePassChange}
							required
						></input>

						<div className="level options">
							<a className="btn btn-link level-right" href="#">
								Olvidaste tu contraseña?
							</a>
						</div>

						<button type="submit" className="btn btn-primary">
							Iniciar Sesion
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Login
