
const adapterDB = (repository) => ({
    getAll: getAll(new repository()),
    checkTicket: checkTicket(new repository())
})


const getAll = (repository) => (data) => {
    return repository.getAll(data)
}

const checkTicket = (repository) => (data) => {
    return repository.checkTicket(data)
}

module.exports = adapterDB;