import React, { useState } from "react"
import logo from "../resources/logo.png"
import Modal from "./modal"
import Login from "./login"

const NavBar = ({
	user,
	handleSubmit,
	handleUserChange,
	handlePassChange,
	username,
	password,
	toggleModal,
	modalState
}) => {
	return (
		<nav className="navbar">
			<div className="container">
				<div className="navbar-brand">
					<a className="navbar-item" href="../">
						<img src={logo} className="aprende-logo" alt="Logo" />
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
							<ul>
								<li className="is-active">
									<a>Inicio</a>
								</li>
								<li>
									<a href="">Cursos</a>
								</li>
								<li>
									<a href="">Certificate</a>
								</li>
							</ul>
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
									<a className="button is-white is-outlined">
										<span className="icon">
											<i className="fa fa-user-circle"></i>
										</span>
										<span>{username}</span>
									</a>
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
