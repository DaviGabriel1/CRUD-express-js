class AtendimentoController{
    buscar(){
        return "buscando atendimentos...";
    }
    criar(){
        return "Criando atendimento..."
    }
    alterar(id){
        return  `alterando atendimento número ${id}...`
    }
    deletar(id){
        return `deletando atendimento número ${id}...`
    }
}

module.exports = new AtendimentoController();