const mongoose = require("mongoose")

if (process.argv.length < 3) {
	console.log(
		"Please provide the password as an argument: node mongo.js <password>"
	)
	process.exit(1)
}

const password = process.argv[2]

console.log(password)

const url = `mongodb+srv://fullstack:${password}@aprende.iq2ax.mongodb.net/Aprende?retryWrites=true&w=majority`

mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
})

const noteSchema = new mongoose.Schema({
	content: String,
	date: Date,
	important: Boolean
})

const Note = mongoose.model("Note", noteSchema)

const note = new Note({
	content: "Callback functions suck",
	date: new Date(),
	important: true
})

note
	.save()
	.then((result) => {
		console.log("note saved!")
		mongoose.connection.close()
	})
	.catch((error) => {
		console.log(error)
	})
