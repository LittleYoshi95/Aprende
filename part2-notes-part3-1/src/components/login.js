import React, { useState } from "react"
import userService from "../services/users"

const Login = ({
	closeModal,
	handleSubmit,
	handleUserChange,
	handlePassChange,
	username,
	password
}) => {
	const [newUserForm, setUserForm] = useState(false)
	const [newEmail, setNewEmail] = useState("")
	const [newConfirmEmail, setNewConfirmEmail] = useState("")

	const [newUserError, setNewUserError] = useState(null)

	const tglNewUserForm = () => {
		Array.from(document.querySelectorAll("input")).forEach(
			input => (input.value = "")
		)
		setUserForm(!newUserForm)
	}

	const handleCreateUser = (event) => {
		event.preventDefault()
		const newUser = {
			username: username,
			email: newEmail,
			password: password
		}

		if (newEmail === newConfirmEmail){
			userService.create(newUser)

			setNewEmail("")
			setNewConfirmEmail("")
			closeModal()

		} else{
			setNewUserError("Los correos no son Iguales")
			setTimeout(() => {
				setNewUserError(null)
			}, 5000)
		}
	}

	const handleEmailChange = (event) => {
		setNewEmail(event.target.value)
	}

	const handleConfirmChange = (event) => {
		setNewConfirmEmail(event.target.value)
	}

	const logInForm = () => (
		<div className="login-card">
			<div className="card-title">
				<h1>Inicia Sesion</h1>
			</div>

			<div className="content">
				<form onSubmit={handleSubmit}>
					<input
						className="field"
						type="text"
						name="Username"
						title="user"
						placeholder="Usuario"
						value={username}
						onChange={handleUserChange}
						required
						autoFocus
					></input>
					<input
						className="field"
						type="password"
						name="Password"
						title="password"
						placeholder="Contraseña"
						value={password}
						onChange={handlePassChange}
						required
					></input>
					<button type="submit" className="btn btn-primary">
						Iniciar Sesion
					</button>
					<button className="create-btn" onClick={tglNewUserForm}>
						Crear Nueva Cuenta
					</button>
				</form>
			</div>
		</div>
	)
	

	const createUserForm = () => (
		<div className="login-card">
			<div className="card-title">
				<h1>Nuevo Usuario</h1>
			</div>

			<div className="content">
				<form onSubmit={handleCreateUser}>
					<input
						className="field"
						type="text"
						name="newUser"
						title="user"
						placeholder="Nombre Usuario"
						onChange={handleUserChange}
						required
						autoFocus
					></input>

					<input
						className="field"
						type="text"
						name="Email"
						title="email"
						placeholder="Correo"
						value={newEmail}
						onChange={handleEmailChange}
						required
					></input>

					<input
						className="field"
						type="text"
						name="Email"
						title="email"
						placeholder="Confirmar Correo"
						value={newConfirmEmail}
						onChange={handleConfirmChange}
						required
					></input>

					<input
						className="field"
						type="password"
						name="Password"
						title="password"
						placeholder="Contraseña"
						onChange={handlePassChange}
						required
					></input>

					<button type="submit" className="btn btn-primary">
						Crear Nueva Cuenta
					</button>

					{newUserError && (
						<div className="error">
							{newUserError}
						</div>
					)}
				</form>
			</div>
		</div>
	)

	return (
		<div id="login">
			{newUserForm ? createUserForm() : logInForm()}
		</div>
	)
}

export default Login
