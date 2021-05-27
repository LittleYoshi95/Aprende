import React from "react"
import Playbtn from "./playBtn"
import video from "../resources/Sample.mp4"

const Banner = (props) => {
	return (
		<section className="hero is-info is-medium is-bold">
			<div className="hero-body banner body">
				<div className="container has-text-centered">
					<h1 className="title">¿Qué es aprende.org?</h1>
				</div>
				<Playbtn>
					<img src="https://objects-us-east-1.dream.io/aprende/stock-img1.jpg"></img>
				</Playbtn>
			</div>
		</section>
	)
}

export default Banner
