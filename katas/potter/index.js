const _ = require('lodash');

const BASE_PRICE = 8
const DISCOUNTS = [0,
                  1,
                  0.95,
                  0.9,
                  0.8,
                  0.75
                ]
const BOOKS = [0,1,2,3,4]

function potter(books = []){
    const invalidBooks = books.filter( num => num < 0 && num > 4 )
    if (invalidBooks.length > 0){
        throw new Error("Invalid book number!")
    } 

    let totalPrice = 0

    for (let freqList = freq(books); freqList.length > 0; freqList = removeSet(freqList)){
        freqList = removeZeros(freqList)

        totalPrice += calculateSetPrice(freqList.length)
    }
    return totalPrice 
}

function freq(books=[]){
    const countingBooks = [0, 0, 0, 0, 0]
    books.forEach((book) => {
        countingBooks[book] += 1
    })
    return countingBooks
}

function removeZeros (array) {
    return array.filter(number => number != 0)
}
        
function calculateSetPrice (setSize = 0) {
    return BASE_PRICE * setSize * DISCOUNTS[setSize]
}

function removeSet(array){
    return array.map(x => x-1)

}

module.exports={potter, freq, removeZeros, calculateSetPrice, removeSet };