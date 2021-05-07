import React from "react"
import StockIT from "../resources/stockIT.jpg"
import StockPiano from "../resources/stockPiano.jpg"
import StockBari from "../resources/stockBarista.jpg"

const Cards = () => {
	return (
		<div className="column features">
			<div className="column is-4">
				<div className="card is-shady">
					<div className="card-image has-text-centered">
						<img src={StockIT}></img>
					</div>
					<div className="card-content">
						<div className="content">
							<h4>Tristique senectus et netus et. </h4>
							<p>
								Purus semper eget duis at tellus at urna condimentum mattis. Non
								blandit massa enim nec. Integer enim neque volutpat ac tincidunt
								vitae semper quis. Accumsan tortor posuere ac ut consequat
								semper viverra nam.
							</p>
							<p>
								<a href="#">Learn more</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="column is-4">
				<div className="card is-shady">
					<div className="card-image has-text-centered">
						<img src={StockPiano}></img>
					</div>
					<div className="card-content">
						<div className="content">
							<h4>Tristique senectus et netus et. </h4>
							<p>
								Purus semper eget duis at tellus at urna condimentum mattis. Non
								blandit massa enim nec. Integer enim neque volutpat ac tincidunt
								vitae semper quis. Accumsan tortor posuere ac ut consequat
								semper viverra nam.
							</p>
							<p>
								<a href="#">Learn more</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="column is-4">
				<div className="card is-shady">
					<div className="card-image has-text-centered">
						<img src={StockBari}></img>
					</div>
					<div className="card-content">
						<div className="content">
							<h4>Tristique senectus et netus et. </h4>
							<p>
								Purus semper eget duis at tellus at urna condimentum mattis. Non
								blandit massa enim nec. Integer enim neque volutpat ac tincidunt
								vitae semper quis. Accumsan tortor posuere ac ut consequat
								semper viverra nam.
							</p>
							<p>
								<a href="#">Learn more</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cards
