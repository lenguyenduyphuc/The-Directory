const coursesRouter = require('express').Router()
const Course = require('../models/course')

// GET all courses
coursesRouter.get('/', async (request, response) => {
  const courses = await Course.find({})
  return response.json(courses)
})

coursesRouter.get('/:courseId', async (request, response) => {
  const course = await Course.findById(request.params.courseId)
  response.json(course)
});


// POST new courses
coursesRouter.post('/', async (request, response) => {
  try {
    const coursesData = request.body

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

coursesRouter.get('/:courseId/:partId', async (request, response) => {
  try {
    const course = await Course.findById(request.params.courseId);
    
    if (!course) {
      return response.status(404).json({ error: 'Course not found' });
    }

    const part = course.parts.find(p => p._id.toString() === request.params.partId);
    
    if (!part) {
      return response.status(404).json({ error: 'Part not found' });
    }

    response.json(part);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

coursesRouter.put('/:courseId/:partId', async (request, response) => {
  const { courseId, partId } = request.params;
  const { likes } = request.body;

  try {
    const course = await Course.findById(courseId);

    if (!course) {
      return response.status(404).json({ error: 'Course not found' });
    }

    const part = course.parts.find((p) => p._id.toString() === partId);
    if (!part) {
      return response.status(404).json({ error: 'Part not found' });
    }

    part.likes = likes; 
    await course.save(); 

    response.status(200).json(part);
  } catch (error) {
    console.error('Error updating part:', error);
    response.status(500).json({ error: 'Server error' });
  }
});



module.exports = coursesRouter