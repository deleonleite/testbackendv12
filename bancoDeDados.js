const sequenceMotorista = {
    _id: 1,
    get id() { return this._id++ }
}

const sequenceVeiculo = {
    _id: 1,
    get id() { return this._id++ }
}

const veiculos = {}

const motoristas = {}

function salvarVeiculos(veiculo) {
    if (!veiculo.id) veiculo.id = sequenceVeiculo.id
    veiculos[veiculo.id] = veiculo
    return veiculo
}

function salvarMotoristas(motorista) {
    if (!motorista.id) motorista.id = sequenceMotorista.id
    motoristas[motorista.id] = motorista
    return motorista
}

function getMotorista(id) {
    return motoristas[id] || {}
}

function getMotoristas() {
    return Object.values(motoristas)
}

function excluirMotorista(id) {
    const motorista = motoristas[id]
    delete motoristas[id]
    return motorista
}

function getVeiculos() {
    return Object.values(veiculos)
}

function excluirVeiculo(id) {
    const veiculo = veiculos[id]
    delete veiculos[id]
    return veiculo
}

module.exports = { salvarMotoristas, getMotorista, getMotoristas, excluirMotorista, salvarVeiculos, getVeiculos, excluirVeiculo }