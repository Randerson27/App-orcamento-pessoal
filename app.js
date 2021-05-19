class Despesas{
    constructor(ano, mes, dia, tipo, descricao, valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }
}

function cadastrarDespesa(){

    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao')
    let valor = document.getElementById('valor')


    let despesas = new Despesas(
        ano,
        mes,
        dia,
        tipo,
        descricao,
        valor.value
    )

    console.log(despesas)
}

