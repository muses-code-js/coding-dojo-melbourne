const expect = require('chai').expect

const Yatzy = require('./index')

describe('Yatzi game', () => {
    describe('constructor', () => {
        it('should not validate if roll is not an array', () => {
            expect(() => new Yatzy(0)).to.throw('roll must be an array of 5 integers between 1 and 6!')
        })

        it('should not validate if roll length is not 5', () => {
            expect(() => new Yatzy()).to.throw()
        })
    
        it('should not validate if roll is not filled with integer', () => {
            const param = [1, 2, 3, 4, 'foo']
            expect(() => new Yatzy(param)).to.throw()
        })

        it('should throw an error if the value is not between 1 and 6', () => {
            const param = [1, 2, 3, 4, 1000]
            expect(() => new Yatzy(param)).to.throw()
        })

        it('should create a instance of Yatzi with the proper value', () => {
             const param = [1, 2, 3, 4, 5]
             const instance = new Yatzy(param)

             expect(instance.roll).to.be.equal(param)
        })
    })

    describe('chance', () => {
        it('should return the sum of all dice', () =>{
            const instance = new Yatzy([1,1,1,1,1])
            expect(instance.chance()).to.be.equal(5)
        })
    })

    describe('yatzy', () => {
        it('should return 0', () => {
            const instance = new Yatzy([1,1,1,1,3])
            expect(instance.yatzy()).to.be.equal(0)
        })

        it('should return 5', () => {
            const instance = new Yatzy([1,1,1,1,1])
            expect(instance.yatzy()).to.be.equal(5)
        })
    })

    describe('number', () => {
        describe('it should throw an error if parameter is not a dice value', () => {
            const instance = new Yatzy([1,1,1,5,5])
            expect(() => instance.number(0)).to.throw('value must be between 1 and 6')
        })

        it('should return 0', () => {
            const instance = new Yatzy([1,1,1,5,5])
            expect(instance.number(2)).to.be.equal(0)
        })

        it('should return 10', () => {
            const instance = new Yatzy([1,1,1,5,5])
            expect(instance.number(5)).to.be.equal(10)
        })
    })

    describe('pair', () => {
        it('should return 10', () => {
            const instance = new Yatzy([1,1,1,5,5])
            expect(instance.pair()).to.be.equal(10)
        })

        it('should return 0', () => {
            const instance = new Yatzy([1,2,3,4,5])
            expect(instance.pair()).to.be.equal(0)
        })
    })
  
    describe('two pairs', () => {
        it('should return 0 when there is only no pair', () => {
            const instance = new Yatzy([1,2,3,4,5])
            expect(instance.twopairs()).to.be.equal(0)
        })

        it('should return 0 when there is only one pair', () => {
            const instance = new Yatzy([1,2,3,5,5])
            expect(instance.twopairs()).to.be.equal(0)
        })

        it('should return 12', () => {
            const instance = new Yatzy([1,1,1,5,5])
            expect(instance.twopairs()).to.be.equal(12)
        })
    })

    describe('three of a kind', () => {
        it('should returns 3', () => {
            const instance = new Yatzy([1,1,1,5,5])
            expect(instance.threeOfAKind()).to.be.equal(3)
        })

        it('should return 12', () => {
            const instance = new Yatzy([4,4,4,3,5])
            expect(instance.threeOfAKind()).to.be.equal(12)
        })

        it('should return 0', ()=>{
            const instance = new Yatzy([3,3,2,4,5])
            expect(instance.threeOfAKind()).to.be.equal(0)
        })
    })

    describe('four of a kind', () =>{
        it('should return 12', () => {
            const instance = new Yatzy([3,3,3,3,5])
            expect(instance.fourOfAKind()).to.be.equal(12)
        })

        it('should return 0', () => {
            const instance = new Yatzy([3,3,3,4,5])
            expect(instance.fourOfAKind()).to.be.equal(0)
        })

        it('should return 16', () => {
            const instance = new Yatzy([4,4,4,4,5])
            expect(instance.fourOfAKind()).to.be.equal(16)
        })
    })

    // describe('small straight')
}) 