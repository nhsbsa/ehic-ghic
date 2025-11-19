// External dependencies
const express = require('express')

const router = express.Router()

// Add your routes here - above the module.exports line

router.post('/dependants/new-application', function (req, res) {

    // Make a variable and give it the value from 'newApplication'
    const newApplication = req.session.data.newApplication
  
    // Check whether the variable matches a condition
    if (newApplication == "new") {
  
      // Send user to next page
      res.redirect('where-do-you-live')
    }
    else if (newApplication == "add") {
  
      // Send user to next page
      res.redirect('add-someone')
    }
    else if (newApplication == "dependant" || newApplication == "replacement") {
  
      // Send user to ineligible page
      res.redirect('radio-buttons')
    }
    else {
  
      // No answer, return to question
      res.redirect('new-application')
    }
  })

  router.post('/dependants/where-do-you-live', function (req, res) {

    // Make a variable and give it the value from 'hasSymptoms'
    const whereLive = req.session.data.whereLive
  
    // Check whether the variable matches a condition
    if (whereLive == "UK") {
  
      // Send user to next page
      res.redirect('radio-buttons')
    }
    else if (whereLive == "EU" || whereLive == "Other") {
  
      // Send user to ineligible page
      res.redirect('dob')
    }
    else {
  
      // No answer, return to question
      res.redirect('full-name')
    }
  })

  router.post('/dependants/add-someone', function (req, res) {

    // Make a variable and give it the value from 'hasSymptoms'
    const addSomeone = req.session.data.addSomeone
  
    // Check whether the variable matches a condition
    if (addSomeone == "Yes") {
  
      // Send user to next page
      res.redirect('add-partner')
    }
    else if (addSomeone == "No") {
  
      // Send user to ineligible page
      res.redirect('cya-children')
    }
    else {
  
      // No answer, return to question
      res.redirect('add-someone')
    }
  })

  router.post('/dependants/add-partner', function (req, res) {

    // Make a variable and give it the value from 'hasSymptoms'
    const addPartner = req.session.data.addPartner
  
    // Check whether the variable matches a condition
    if (addPartner == "Yes") {
  
      // Send user to next page
      res.redirect('full-name')
    }
    else if (addPartner == "No") {
  
      // Send user to ineligible page
      res.redirect('add-child-1')
    }
    else {
  
      // No answer, return to question
      res.redirect('add-partner')
    }
  })

  router.post('/dependants/add-child-1', function (req, res) {

    // Make a variable and give it the value from 'hasSymptoms'
    const addChild1 = req.session.data.addChild1
  
    // Check whether the variable matches a condition
    if (addChild1 == "Yes") {
  
      // Send user to next page
      res.redirect('full-name')
    }
    else if (addChild1 == "No") {
  
      // Send user to ineligible page
      res.redirect('cya-child')
    }
    else {
  
      // No answer, return to question
      res.redirect('add-child-1')
    }
  })
  
module.exports = router
