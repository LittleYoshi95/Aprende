import React from "react"
import { Link, useParams } from "react-router-dom"
import Playbtn from "./playBtn"

const CourseTemp = ({courses}) => {
  const id = useParams().id
  const curso = courses.find(c => c.id === id)

	return (
		<section className="container">
			<div className="columns is-multiline is-centered course-header">
          <div className="column">
            <iframe width="680" height="380" src="https://www.youtube.com/embed/KFmA9W8i4X4" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
          </div>
          <div className="column is-two-fifths">
            <div className="card course-card">
              <div className="card-content">
                <div className="content">
                  <h2>{curso.title}</h2>
                  <p>
                    {curso.description}
                  </p>
                  <h3>{`Categoria: ${curso.category}`}</h3>
                </div>
              </div>
              <div className="course-card-footer">
								<span className="icon-card course-likes">
									<i className="fa fa-heart fa-2x"> {`Favoritos: ${curso.likes}`}</i>
								</span>
								<progress className="progress is-primary course-prog" value="10" max="100"></progress>
              </div>
            </div>
          </div>
          <div className="column">
          </div>
      </div>
		</section>
	)
}

export default CourseTemp
