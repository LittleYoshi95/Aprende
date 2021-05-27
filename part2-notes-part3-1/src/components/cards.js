import React, {useState} from "react"
import {Link} from "react-router-dom"
import courseService from "../services/courses"


const Cards = ({ courses, fav, user }) => {

	const [faved, setFaved] = useState(false)

	const cards = courses.sort((a, b) => b.likes - a.likes).slice(0, 3)

	const handleFav = (event, id) => {
		if(user){
			if(event.target.className === "fa fa-heart fa-2x"){
				event.target.className = "fa fa-heart-o fa-2x"
			}else {
				event.target.className = "fa fa-heart fa-2x"
			}
			console.log(event.target.className)
		
			const curso = cards.find((c) => c.id === id)
			const favedCurso = {...curso, likes: curso.likes + 1}
			const body = {favedCurso, username: user.username }
	
			courseService
				.update(id, body)
				.then((returnedCurso) => fav(returnedCurso))
				.catch((err) => {
						console.log(err)
					})
		}
	}

	return (
		<div className="columns is-multiline is-centered features">
			{cards.map((card, index) => {
				return(
					<div className="column is-3" key={index}>
						<div className="card is-shady">
							<div className="image is-5by3">
								<Link to={`/curso/${card.id}`}>
									<img src={card.img}></img>
								</Link>
							</div>
							<div className="card-content">
								<div className="content">
									<h4>{card.title}</h4>
									<p>
										{card.description}
									</p>
								</div>
							</div>
							<div className="card-footer">
								<span className="icon-card">
									<i className="fa fa-heart-o fa-2x" onClick={(event) => handleFav(event, card.id)}></i>
								</span>
								<span className="tag is-info">{card.category}</span>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Cards
