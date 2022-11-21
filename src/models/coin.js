const { model, Schema } = require('mongoose')

const coinSchema = new Schema({
	name: { type: String, require: true },
	code: { type: String, require: true, unique: true },
	quotation: {
		buy: { type: Number, require: true },
		sell: { type: Number, require: true },
	},
	origin: { type: String, enum: ['API', 'MANUAL'] },
	updatedAt: { type: Date, default: Date.now },
})

const coin = model('Coin', coinSchema)
module.exports = coin