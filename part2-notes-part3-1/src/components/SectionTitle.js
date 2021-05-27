import React from "react"

const SectionTitle = ({title, text}) => {
	return (
		<div className="intro column is-8 is-offset-2">
			<h2 className="title">{title}</h2>
			<br></br>
			<p className="subtitle">
				{text}
			</p>
		</div>
	)
}

export default SectionTitle
