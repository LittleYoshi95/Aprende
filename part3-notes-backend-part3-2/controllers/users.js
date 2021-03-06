const bcrypt = require("bcrypt")
const usersRouter = require("express").Router()
const User = require("../models/user")

usersRouter.get("/", async (request, response) => {
	const users = await User.find({}).populate("favCourses", { content: 1 })
	response.json(users)
})

usersRouter.post("/", async (request, response) => {
	const body = request.body

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(body.password, saltRounds)

	const user = new User({
		username: body.username,
		email: body.email,
		passwordHash
	})

	const savedUser = await user.save()

	response.json(savedUser)
})

usersRouter.put("/:id", (request, response, next) => {
	const body = request.body

	const user = {
		username: body.username,
		name: body.name
	}

	User.findByIdAndUpdate(request.params.id, user, { new: true })
		.then((updatedNote) => {
			response.json(updatedNote.toJSON())
		})
		.catch((error) => next(error))
})

module.exports = usersRouter
