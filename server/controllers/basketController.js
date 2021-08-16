const {BasketDevice} = require('../models/models')
const ApiError = require('../error/ApiError');

class BasketController {
    async create(req, res) {
        const {deviceId, basketId} = req.body
        const deviceID = await BasketDevice.create({deviceId, basketId})
        return res.json(deviceID)
    }

}

module.exports = new BasketController()