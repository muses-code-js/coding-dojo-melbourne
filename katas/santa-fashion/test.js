const { transformInputs } = require('./index.js')

describe('transformInputs', function() {
    it('returns an array', function() {
        expect(Array.isArray(transformInputs([]))).toBeTruthy()
    })

    it('returns the correct ID from input', function() {
        const input = ["#123 @ 3,2: 5x4"]
        const result = transformInputs(input)
        expect(result[0].id).toBe('123')
    })

    it('returns the coordinate from input', function() {
        const input = ["#123 @ 3,2: 5x4"]
        const result = transformInputs(input)
        expect(result[0].coord).toBeTruthy()
        expect(result[0].coord.x).toBe(3)
        expect(result[0].coord.y).toBe(2)
    })

    it('returns the width and height from input', function() {
        const input = ["#123 @ 3,2: 5x4"]
        const result = transformInputs(input)
        expect(result[0].size).toBeTruthy()
        expect(result[0].size.width).toBe(5)
        expect(result[0].size.height).toBe(4)
    })

    it('returns an array with the same length as the input', function() {
        const input = ["#123 @ 3,2: 5x4"]
        const result = transformInputs(input)
        expect(result.length).toBe(input.length)
        
    })

    it('returns an an array with two claims', function() {
        const input = ["#123 @ 3,2: 5x4", "#456 @ 4,6: 5x4"]
        const result = transformInputs(input)
        expect(result).toEqual([{id: "123", coord: {x: 3, y: 2}, size: {height: 4, width: 5}}, {id: "456", coord: {x: 4, y: 6}, size: {height: 4, width: 5}}])
    })



})


