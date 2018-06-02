const _ = require('lodash')

const ROLL_CONSTRUCTOR_ERROR = 'roll must be an array of 5 integers between 1 and 6!'
const ROLL_SIZE = 5;
class Yatzy {
    constructor(roll) {
        if (!_.isArray(roll) || _.size(roll) != ROLL_SIZE) {
            throw new Error(ROLL_CONSTRUCTOR_ERROR)
        }
        roll.forEach(value => {
            if (!_.isInteger(value) || !isDiceValue(value)) throw new Error(ROLL_CONSTRUCTOR_ERROR)
        })

        this.roll = roll;
    }

    chance() {
        return _.sum(this.roll)
    }

    yatzy() {
        const filledArray = _.fill(Array(ROLL_SIZE), this.roll[0])
        if (_.isEqual(this.roll, filledArray)) {
            return this.chance()
        }
        return 0
    }

    number(value) {
        if (!isDiceValue(value)) {
            throw new Error('value must be between 1 and 6')
        }
        if (_.indexOf(this.roll, value) === -1) {
            return 0
        }
        const counted = _.countBy(this.roll)
        return counted[value] * value
    }

    pair() {
        return sumMaxIteration(this.roll)
    }
 
    twopairs() {
        const firstPair = sumMaxIteration(this.roll)

        const rollWithoutFirstPair = _.filter(this.roll, v => v !== firstPair / 2)        
        const secondPair = sumMaxIteration(rollWithoutFirstPair)
        
        return firstPair && secondPair ? firstPair + secondPair : 0
    }
    
    threeOfAKind() {
        return sumMaxIteration(this.roll, 3)
    }

    fourOfAKind() {
        return sumMaxIteration(this.roll, 4)
    }
} 

const isDiceValue = value => _.inRange(value, 1, 6)
const sumMaxIteration = (values, times=2) => _(values)
    .countBy()
    .map((v, k) => v >= times ? k * times : 0)
    .maxBy()
module.exports = Yatzy;