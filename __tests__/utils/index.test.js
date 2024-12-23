const utils = require('../../src/utils')

test('It should return a default response with error false and 2xx status code', (done) => {
	const response = utils.defaultResponse(200, 'Tudo certo', {
		message: 'Tudo certo',
	})

	expect(response.error).toEqual(false)
	expect(response.statusCode).toEqual(200)
	expect(response.message).toEqual('Tudo certo')
	done()
})

test('It should return a default response with error true and !2xx and !3xx status code', (done) => {
	const response = utils.defaultResponse(400, 'Bad Request', {
		message: 'Erro de validação',
	})

	expect(response.error).toEqual(true)
	expect(response.statusCode).toEqual(400)
	expect(response.message).toEqual('Bad Request')
	done()
})

test('It should validate with success a payload object', () => {
	const payload = {
		name: 'vinicius',
		lastName: 'nunes',
	}

	const requiredFields = ['name', 'lastName']

	expect(utils.verifyKeysPayload(payload, requiredFields)).toEqual([])
})

test('It should validate with fail a payload object', () => {
	const payload = {
		name: 'vinicius',
	}

	const requiredFields = ['name', 'lastName']

	expect(utils.verifyKeysPayload(payload, requiredFields)).toEqual(['lastName'])
})
