
const fabricFactory = (inputs = []) => { }

const transformInputs = (inputs = []) => {
    return inputs.map(transformInputWithRegex)
}

const transformInput = (claim = "") => {
    const inputWithoutHash = claim.slice(1)
    const tokens = inputWithoutHash.split(" ")
    // const id = tokens[0]
    const id = claim.match(/^\#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/)
    const [x, y] = tokens[2].slice(0, -1).split(',').map(Number)
    const [width, height] = tokens[3].split('x').map(Number)
    return {
        id,
        coord: { x, y },
        size: { width, height }
    }
}

const transformInputWithRegex = (claim = "") => {
    const [, id, x, y, width, height] = claim.match(/^\#(\d+) @ (\d+),(\d+): (\d+)x(\d+)$/)
    return {
        id,
        coord: {
            x: Number(x),
            y: Number(y)
        },
        size: {
            width: Number(width),
            height: Number(height)
        }
    }
}

const createGrid = (inputs = []) => { }

const printGrid = (inputs = []) => { }

module.exports = {
    transformInputs
}