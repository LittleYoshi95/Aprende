import React from "react"

const Modal = ({ children, closeModal, modalState }) => {
	if (!modalState) {
		return null
	}
	return (
		<div className="modal is-active">
			<div className="modal-background" onClick={closeModal} />
			<div className="modal-card">
				<div className="content">{children}</div>
			</div>
		</div>
	)
}

export default Modal
