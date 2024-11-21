const coursesRouter = require('express').Router()
const Course = require('../models/course')

// GET all courses
coursesRouter.get('/', async (request, response) => {
  const courses = await Course.find({})
  return response.json(courses)
})

// POST new courses
coursesRouter.post('/', async (request, response) => {
  try {
    const coursesData = request.body

    if (!Array.isArray(coursesData)) {
      return response.status(400).json({ error: 'Request body must be an array' })
    }

    const savedCourses = await Promise.all(
      coursesData.map(async (courseData) => {
        const course = new Course({
          name: courseData.name,
          id: courseData.id,
          parts: courseData.parts.map(part => ({
            name: part.name,
            link: part.link,
            id: part.id,
            likes: part.likes
          }))
        })
        return await course.save()
      })
    )

    response.status(201).json(savedCourses)
  } catch (error) {
    console.error('Error saving courses:', error)
    response.status(500).json({ 
      error: 'Error saving courses',
      details: error.message 
    })
  }
})

module.exports = coursesRouter