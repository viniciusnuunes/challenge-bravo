const express = require('express')
const router = express.Router()
const controller = require('../controllers')
const utils = require('../utils')

router.post('/update', async (req, res) => {
	try {
		const response = await controller.quotation.updateApiQuotations()

		res.status(200).json(response)
	} catch (err) {
		console.log(err)
		res.status(500).json(utils.defaultResponse(500, err.message))
	}
})

module.exports = router
