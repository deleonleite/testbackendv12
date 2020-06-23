const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/motoristas', (req, res, next) => {
    res.send(bancoDeDados.getMotoristas())
})

app.get('/motoristas/:id', (req, res, next) => {
    res.send(bancoDeDados.getMotorista(req.params.id))
})

app.post('/motoristas', (req, res, next) => {
    const motorista = bancoDeDados.salvarMotoristas({
        nome: req.body.nome,
        sobreNome: req.body.sobreNome,
        CPF: req.body.CPF,
        dtNasc: req.body.dtNasc,
        status: req.body.status,
        dtCad: req.body.dtCad,
        dtAt: req.body.dtAt,
        veics: 
            [{idVeic: req.body.idVeic}]
    })
    res.send(motorista) // JSON
})

app.put('/motoristas/:id', (req, res, next) => {
    const motorista = bancoDeDados.salvarMotoristas({
        id: req.params.id,
        nome: req.body.nome,
        sobreNome: req.body.sobreNome,
        CPF: req.body.CPF,
        dtNasc: req.body.dtNasc,
        status: req.body.status,
        dtCad: req.body.dtCad,
        dtAt: req.body.dtAt,
        veics: 
            [{idVeic: req.body.idVeic}]
    })
    res.send(motorista) // JSON
})

app.delete('/motoristas/:id', (req, res, next) => {
    const motorista = bancoDeDados.excluirMotorista(req.params.id)
    res.send(motorista) // JSON
})

app.post('/veiculos', (req, res, next) => {
    const veiculo = bancoDeDados.salvarVeiculos({
        nomeproprietario: req.body.nomeproprietario,
        sobreNome: req.body.sobreNome,
        placa: req.body.placa,
        renavam: req.body.renavam
    })
    res.send(veiculo) // JSON
})

app.put('/veiculos', (req, res, next) => {
    const veiculo = bancoDeDados.salvarVeiculos({
        id: req.params.id,
        nomeproprietario: req.body.nomeproprietario,
        sobreNome: req.body.sobreNome,
        placa: req.body.placa,
        renavam: req.body.renavam
    })
    res.send(veiculo) // JSON
})

app.get('/veiculos', (req, res, next) => {
    res.send(bancoDeDados.getVeiculos())
})

app.delete('/veiculos/:id', (req, res, next) => {
    const veiculo = bancoDeDados.excluirVeiculo(req.params.id)
    res.send(veiculo) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})