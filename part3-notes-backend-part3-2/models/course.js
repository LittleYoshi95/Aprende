const mongoose = require("mongoose")

const courseSchema = new mongoose.Schema({
	title: {
    type: String
  },
  category: {
    type: String
  },
	likes: {
    type: Number
  },
  description: {
    type: String
  },
  date: {
    type: Date
  },
  content: {
    type: Object
  },
  intro: {
    type: String
  },
  img: {
    type: String
  }
})

courseSchema.set("toJSON", {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

const Course = mongoose.model("Course", courseSchema)

module.exports = Course
