const express = require('express')
const { getdata, deletedata } = require('../controllers/homecontrollers')
const router = express.Router()
router.get('/Get-data',getdata)
router.delete('/Delete-data/:id',deletedata)
module.exports=router