import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import noteService from "./services/notes"
import courseService from "./services/courses"
import loginService from "./services/login"
import NavBar from "./components/navbar"
import Banner from "./components/banner"
import SectionTitle from "./components/SectionTitle"
import Cards from "./components/cards"
import Categories from "./components/categories"
import CourseView from "./components/courseTemp"

const App = () => {
	const [courses, setCourses] = useState([])
	const [newNote, setNewNote] = useState("")
	const [showAll, setShowAll] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)

	const [modalState, setModal] = useState(false)

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [user, setUser] = useState(null)

	useEffect(() => {
		courseService.getAll().then((initialNotes) => {
			setCourses(initialNotes)
		})
	}, [])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser")
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			setUsername(user.username)
			courseService.setToken(user.token)
		}
	}, [])

	/* const addNote = (event) => {
		event.preventDefault()
		const noteObject = {
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() > 0.5
		}

		noteService.create(noteObject).then((returnedNote) => {
			setNotes(notes.concat(returnedNote))
			setNewNote("")
		})
	} */

	/* const toggleImportanceOf = (id) => {
		const note = notes.find((n) => n.id === id)
		const changedNote = { ...note, important: !note.important }

		noteService
			.update(id, changedNote)
			.then((returnedNote) => {
				setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)))
			})
			.catch((error) => {
				setErrorMessage(
					`Note '${note.content}' was already removed from server`
				)
				setTimeout(() => {
					setErrorMessage(null)
				}, 5000)
			})
	} */

	const toggleModal = () => {
		setModal(!modalState)
	}

	/* const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	} */

	const handleUserChange = (event) => {
		console.log(event.target.value)
		setUsername(event.target.value)
	}

	const handlePassChange = (event) => {
		console.log(event.target.value)
		setPassword(event.target.value)
	}

	//const notesToShow = showAll ? notes : notes.filter((note) => note.important)

	const handleLogin = async (event) => {
		event.preventDefault()
		try {
			const user = await loginService.login({
				username,
				password
			})

			courseService.setToken(user.token)
			window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user))

			setUser(user)
			setUsername("")
			setPassword("")

			toggleModal()
		} catch (exception) {
			setErrorMessage("wrong credentials")
			setTimeout(() => {
				setErrorMessage(null)
			}, 5000)
		}
	}

	const handleLogOut = () => {
		window.localStorage.removeItem("loggedNoteappUser")
		noteService.setToken("")

		setUser(null)
		setUsername("")
		setPassword("")
	}

	const favorite = (curso) => {
		setCourses(courses.map((course) => (course.id !== curso.id ? course : curso)))
	}

/* 	const noteForm = () => (
		<form onSubmit={addNote}>
			<input value={newNote} onChange={handleNoteChange} />
			<button type="submit">save</button>
		</form>
	) */

	return (
		<Router>
			<div>
				<NavBar
					user={user}
					username={username}
					password={password}
					handleUserChange={handleUserChange}
					handlePassChange={handlePassChange}
					handleSubmit={handleLogin}
					handleLogOut={handleLogOut}
					toggleModal={toggleModal}
					modalState={modalState}
				/>
				<Switch>
					<Route path="/curso/:id">
						<CourseView courses={courses}/>
					</Route>
					<Route path="/">
						<Banner />
						<section className="container">
							<SectionTitle title="Cursos mas populares" text="Dale un vistazo a los cursos favoritos de nuestros usuarios"/>
							<Cards courses={courses} fav={favorite} user={user}/>
							<SectionTitle title="Categorias principales" text=""/>
							<Categories />
						</section>
					</Route>
				</Switch>
			</div>
		</Router>	
	)
}

export default App
