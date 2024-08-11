
const ticketsRouter = require('./producto/routes')


module.exports = LoanRoutes = (app) => {
    app.use('/tickets', ticketsRouter)
}