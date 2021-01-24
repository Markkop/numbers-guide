
/**
 * Splits a number received as text and sum its
 * digits until there's only one
 * @param { String } numberText 
 * @returns { String }
 */
function splitAndSumNumbers(numberText) {
    const splittedNumbers = numberText.split('').map(Number)
    const sum = String(splittedNumbers.reduce((sum, number) => sum + number, 0))
    if (sum.length === 1) {
        return sum
    }
    return splitAndSumNumbers(sum)
}

/**
 * Gets a single number for a given string date
 * @param { String } date such as 2021-12-19
 * @returns { Number } 
 */
function getDateNumber(date) {
    const dateNumbers = date.replace(/\D/g, '')
    const sum = splitAndSumNumbers(dateNumbers)
    return Number(sum)   
}

module.exports = getDateNumber
