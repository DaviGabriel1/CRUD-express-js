class Tabelas{
    init(conexao){
        this.conexao = conexao;
        this.criarTabelaAtendimentos()
    }

    criarTabelaAtendimentos(){
        const sql = `
            CREATE TABLE IF NOT EXISTS atendimentos (
            id int NOT NULL AUTO_INCREMENT,
            DATA date DEFAULT NULL,
            servico varchar(100) DEFAULT NULL,
            cliente varchar(100) DEFAULT NULL,
            STATUS enum("pendente","realizado","cancelado")
            )
            `;
            this.conexao.query(sql,(error) => {
                if(error){
                    console.log(`erro ao enviar tabela`);
                    console.log(error.message)
                    return;
                }
                console.log("tabela criada com sucesso")
            })
    }
}

module.exports = new Tabelas();