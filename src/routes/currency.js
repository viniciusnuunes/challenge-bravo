const express = require('express')
const router = express.Router()
const controller = require('../controllers')
const utils = require('../utils')
const HandledError = require('../helpers/HandledError')

router.get('/list', async (req, res) => {
	try {
		const response = await controller.currency.listAllCurrencies()

		res.status(200).json(response)
	} catch (err) {
		if (err instanceof HandledError) {
			res.status(err.statusCode).json(err.showError())
		} else {
			res.status(500).json(utils.defaultResponse(500, err.message))
		}
	}
})

module.exports = router
