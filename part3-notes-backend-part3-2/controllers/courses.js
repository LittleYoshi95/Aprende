const config = require("../utils/config")
const coursesRouter = require("express").Router()
const jwt = require("jsonwebtoken")
const Course = require("../models/course")
const User = require("../models/user")

const getTokenFrom = (request) => {
	const authorization = request.get("authorization")
	if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
		return authorization.substring(7)
	}
	return null
}

coursesRouter.get("/", async (request, response) => {
	const courses = await Course.find({})
	response.json(courses.map((course) => course.toJSON()))
})

coursesRouter.get("/:id", async (request, response) => {
	const course = await Course.findById(request.params.id)
	if (course) {
		response.json(course.toJSON())
	} else {
		response.status(404).end()
	}
})

coursesRouter.put("/:id", async (request, response, next) => {
	const body = request.body
  const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, config.SECRET)

  if (!token || !decodedToken.id) {
		return response.status(401).json({ error: "token missing or invalid" })
	}

	const course = {
    ...body.favedCurso,
		likes: body.favedCurso.likes,
	}

	Course.findByIdAndUpdate(request.params.id, course, { new: true })
		.then((updatedCourse) => {
			response.json(updatedCourse.toJSON())
		})
		.catch((error) => next(error))

	const user = await User.find({username: body.username})
	console.log(user)
	if(!user[0].favCourses.includes(request.params.id)){
		user[0].favCourses = user[0].favCourses.concat(request.params.id)
		await user[0].save()
	}else{
		console.log("ya existe el curso");
	}

})

module.exports = coursesRouter