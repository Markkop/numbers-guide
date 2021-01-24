function getDateNumber(date) {
    const dateNumbers = date.replace(/\D/g, '').split('').map(Number)
    const reducedNumber = dateNumbers.reduce((sum, number) => sum + number, 0)
    return reducedNumber   
}

module.exports = getDateNumber
