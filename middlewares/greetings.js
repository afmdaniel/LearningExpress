function greeting(name) {
    return function(req, res, next) {
        console.log(`Seja bem vindo, ${name}!`)
        next()
    }
}

module.exports = greeting