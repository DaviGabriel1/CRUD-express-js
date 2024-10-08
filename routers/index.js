const atendimentoRouter = require("./atendimentoRoute")
module.exports = (app) => {
    app.use(atendimentoRouter)
}