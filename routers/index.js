const atendimentoRouter = require("./atendimentoRoute")
module.exports = (app,express) => {
    app.use(atendimentoRouter)
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))
}