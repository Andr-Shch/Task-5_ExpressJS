const express = require('express')
const router = express.Router()

const {getPeople} = require('../controller/router-controler')

router.get('/', getPeople)
 
  module.exports = router