import React from "react"

const Play = (props) => {
	return (
		<div className="img-overlay-wrap columns is-vcentered">
			<div className="column">
				{props.children}
				<a href="/">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
						<polygon
							className="play-btn__svg"
							points="9.33 6.69 9.33 19.39 19.3 13.04 9.33 6.69"
						/>
						<path
							className="play-btn__svg"
							d="M26,13A13,13,0,1,1,13,0,13,13,0,0,1,26,13ZM13,2.18A10.89,10.89,0,1,0,23.84,13.06,10.89,10.89,0,0,0,13,2.18Z"
						/>
					</svg>
				</a>
			</div>
		</div>
	)
}

export default Play
