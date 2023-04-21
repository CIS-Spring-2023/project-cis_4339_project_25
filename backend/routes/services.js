const express = require('express')
const router = express.Router()

const org = process.env.ORG

// importing data model schemas
const { orgs, services } = require('../models/models')

//get 10 most recent services
router.get('/', (req, res, next) => {
    services
      .find({ orgs: org }, (error, data) => {
        if (error) {
          return next(error)
        } else {
          return res.json(data)
        }
      })
      .sort({ updatedAt: -1 })
      .limit(10)
  })


// GET single event by ID
router.get('/id/:id', (req, res, next) => {
    // use findOne instead of find to not return array
    services.findOne({ _id: req.params.id }, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('Event not found')
      } else {
        res.json(data)
      }
    })
  })
  
  // GET services based on search query
  // Ex: '...?name=Food&searchBy=name'
  router.get('/search/', (req, res, next) => {
    const dbQuery = { org: org }
    switch (req.query.searchBy) {
      case 'name':
        // match services name, no anchor
        dbQuery.name = { $regex: `${req.query.name}`, $options: 'i' }
        break
      case 'date':
        dbQuery.date = req.query.eventDate
        break
      default:
        return res.status(400).send('invalid searchBy')
    }
    services.find(dbQuery, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // POST new service
  router.post('/', (req, res, next) => {
    const newservice = req.body
    newService.org = org
    services.create(newEvent, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  // PUT update event
  router.put('/update/:id', (req, res, next) => {
    services.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

  
  // PUT remove attendee from event
  router.put('/deregister', (req, res, next) => {
    services.findByIdAndUpdate(
      req.query.service,
      { $pull: { attendees: req.query.client } },
      (error, data) => {
        if (error) {
          console.log(error)
          return next(error)
        } else {
          res.send('Client deregistered with event')
        }
      }
    )
  })
  
  // hard DELETE service by ID, as per project specifications
  router.delete('/:id', (req, res, next) => {
    services.findByIdAndDelete(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else if (!data) {
        res.status(400).send('service not found')
      } else {
        res.send('Service deleted')
      }
    })
  })
  