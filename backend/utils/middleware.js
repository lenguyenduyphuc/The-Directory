const logger = require('./logger')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method)
  logger.info('Path:  ', request.path)
  logger.info('Body:  ', request.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

const errorHandler = (error, request, response, next) => {
  logger.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    return response.status(400).json({ error: 'expected `username` to be unique' })
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'invalid token'})
  }

  next(error)
}

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

const userExtractor = async (request, response, next) => {
  const token = getTokenFrom(request)

  if (!token){
    return response.status(401).json({ error: 'token missing' })
  }
  
  const decodedToekn = jwt.verify(token, process.env.SECRET)
  if (!decodedToekn.id) {
    return response.status(401).json({ error: 'invalid token' })
  }

  const user = await User.findById(decodedToekn.id)

  if (!user){
    return response.status(401).json({ error: 'user not found' })
  }

  request.user = user

  next()
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler,
  userExtractor
}