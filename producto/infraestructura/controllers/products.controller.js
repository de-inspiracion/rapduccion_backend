const adapterDB = require("../../domain/product.repository");
const mongoose = require("../DBs/Mongoose")

const db = mongoose
const service = adapterDB(db)

module.exports = class ProductController {
    checkTicket(request, response) {
        const DbResult = service.checkTicket()
        response.json({data: DbResult})
    }

    async verifyTicket(request, response) {
        const ticket = request.params.ticket
        const DbResult = await service.checkTicket(ticket)
        response.json({data: DbResult})
    }
}
