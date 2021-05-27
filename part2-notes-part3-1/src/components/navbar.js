import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Modal from "./modal"
import Login from "./login"

const NavBar = ({
	user,
	handleSubmit,
	handleLogOut,
	handleUserChange,
	handlePassChange,
	username,
	password,
	toggleModal,
	modalState
}) => {
	const [userLabel, setUserLabel] = useState("")

	useEffect(() => {
		if (user) setUserLabel(user.username)
	}, [user])
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="../">
						<img src="https://objects-us-east-1.dream.io/aprende/logo.png" className="aprende-logo" alt="Logo" />
					</a>
					<span className="navbar-burger burger" data-target="navbarMenu">
						<span></span>
						<span></span>
						<span></span>
					</span>
				</div>
				<div id="navbarMenu" className="navbar-menu">
					<div className="navbar-end">
						<div className="tabs is-right">
							{user ? (
									<ul>
										<li>
											<Link to="/">Inicio</Link>
										</li>
										
										<li>
											<Link to="/misCursos">Cursos</Link>
										</li>
										<li>
											<Link to="/certificados">Certificate</Link>
										</li>
									</ul>
								) : (
									<ul>
										<li>
											<Link to="/">Inicio</Link>
										</li>
									</ul>
								)
							}
							<span className="navbar-item">
								{!user ? (
									<a
										className="button is-white is-outlined"
										onClick={toggleModal}
									>
										<span className="icon">
											<i className="fa fa-user-circle"></i>
										</span>
										<span>Inicia sesion / Registrate</span>
									</a>
								) : (
									<div className="dropdown is-right is-hoverable">
										<div className="dropdown-trigger">
											<button
												className="button is-white is-outlined"
												aria-haspopup="true"
												aria-controls="dropdown-menu"
											>
												<span>{userLabel}</span>
												<span className="icon is-small">
													<i
														className="fa fa-angle-down"
														aria-hidden="true"
													></i>
												</span>
											</button>
										</div>
										<div
											className="dropdown-menu"
											id="dropdown-menu"
											role="menu"
										>
											<div className="dropdown-content">
												<a className="dropdown-item">Mi Perfil</a>
												<hr className="dropdown-divider" />
												<a
													className="dropdown-item"
													onClick={handleLogOut}
													href="/"
												>
													Cerrar Sesion
												</a>
											</div>
										</div>
									</div>
								)}
							</span>
							<Modal closeModal={toggleModal} modalState={modalState}>
								<Login
									closeModal={toggleModal}
									handleSubmit={handleSubmit}
									handleUserChange={handleUserChange}
									handlePassChange={handlePassChange}
									username={username}
									password={password}
								/>
							</Modal>
						</div>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
