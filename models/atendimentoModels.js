const conexao = require("../infraestrutura/conexao")
class AtendimentoModel{
    listar(){
        const sql = "SELECT * FROM atendimentos"
        return new Promise((resolve,reject) => {
            return conexao.query(sql,{},(error,resposta) => {
                if(error){
                    console.log(`erro ao listar os dados ${error.message}`)
                    reject(error)
                }
                console.log("acesso realizado")
                resolve(resposta)
            });
        })
    }
    criar(novoAtendimento){
        const sql = `INSERT INTO atendimentos SET ?`
        return new Promise((resolve,reject) => {
            conexao.query(sql,novoAtendimento,(error,resposta) => {
                if(error){
                    console.log("erro ao criar...")
                    reject(error)
                }
                console.log('criado com sucesso')
                resolve(resposta)
            })
        })
    }
    atualizar(atendimentoAtualizado,id){
        const sql = `UPDATE atendimentos SET ? WHERE id = ?`
        return new Promise((resolve,reject) => {
            conexao.query(sql,[atendimentoAtualizado,id],(error,resposta) => {
                if(error){
                    console.log("erro ao atualizar...")
                    reject(error)
                    return;
                }
                console.log('atualizado com sucesso')
                resolve(resposta)
            })
        })
    }
    deletar(id){
        const sql = `DELETE FROM atendimentos WHERE id = ?`
        return new Promise((resolve,reject) => {
            conexao.query(sql,id,(error,resposta) => {
                if(error){
                    console.log("erro ao atualizar...")
                    reject(error)
                    return;
                }
                console.log('atualizado com sucesso')
                resolve(resposta)
            })
        })
    }
    
}

module.exports = new AtendimentoModel();