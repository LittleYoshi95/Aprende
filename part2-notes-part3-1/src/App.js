import React, { useState, useEffect } from "react"
import Note from "./components/Note"
import Notification from "./components/Notification"
import Footer from "./components/Footer"
import noteService from "./services/notes"
import loginService from "./services/login"
import NavBar from "./components/navbar"
import Banner from "./components/banner"
import SectionTitle from "./components/SectionTitle"
import Cards from "./components/cards"

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState("")
	const [showAll, setShowAll] = useState(false)
	const [errorMessage, setErrorMessage] = useState(null)

	const [modalState, setModal] = useState(false)

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const [user, setUser] = useState(null)

	useEffect(() => {
		noteService.getAll().then((initialNotes) => {
			setNotes(initialNotes)
		})
	}, [])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem("loggedNoteappUser")
		if (loggedUserJSON) {
			const user = JSON.parse(loggedUserJSON)
			setUser(user)
			setUsername(user.username)
			noteService.setToken(user.token)
		}
	}, [])

	const addNote = (event) => {
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
	}

	const toggleImportanceOf = (id) => {
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
	}

	const toggleModal = () => {
		setModal(!modalState)
	}

	const handleNoteChange = (event) => {
		console.log(event.target.value)
		setNewNote(event.target.value)
	}

	const handleUserChange = (event) => {
		console.log(event.target.value)
		setUsername(event.target.value)
	}

	const handlePassChange = (event) => {
		console.log(event.target.value)
		setPassword(event.target.value)
	}

	const notesToShow = showAll ? notes : notes.filter((note) => note.important)

	const handleLogin = async (event) => {
		event.preventDefault()
		try {
			const user = await loginService.login({
				username,
				password
			})

			noteService.setToken(user.token)
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

	const loginForm = () => (
		<form onSubmit={handleLogin}>
			<div>
				username
				<input
					type="text"
					value={username}
					name="Username"
					onChange={handleUserChange}
				/>
			</div>
			<div>
				password
				<input
					type="password"
					value={password}
					name="Password"
					onChange={handlePassChange}
				/>
			</div>
			<button type="submit">login</button>
		</form>
	)

	const noteForm = () => (
		<form onSubmit={addNote}>
			<input value={newNote} onChange={handleNoteChange} />
			<button type="submit">save</button>
		</form>
	)

	return (
		<div>
			<Banner>
				<NavBar
					user={user}
					username={username}
					password={password}
					handleUserChange={handleUserChange}
					handlePassChange={handlePassChange}
					handleSubmit={handleLogin}
					toggleModal={toggleModal}
					modalState={modalState}
				/>
			</Banner>
			<section className="container">
				<SectionTitle />
				<Cards />
			</section>
			{/* <h1>Notes</h1>
			<Notification message={errorMessage} />

			{user === null ? (
				loginForm()
			) : (
				<div>
					<p>{user.name} logged in</p>
					{noteForm()}
				</div>
			)}

			<div>
				<button onClick={() => setShowAll(!showAll)}>
					show {showAll ? "important" : "all"}
				</button>
			</div>
			<ul>
				{notesToShow.map((note) => (
					<Note
						key={note.id}
						note={note}
						toggleImportance={() => toggleImportanceOf(note.id)}
					/>
				))}
			</ul>

			<Footer /> */}
		</div>
	)
}

export default App
