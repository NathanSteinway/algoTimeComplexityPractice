let arr = [-5, -4, -3, -2, 0, 2, 4, 6, 8]

function sumZero(arr) {
    for(let i of arr) {
        for (let j = 2; j < arr.length; j++) {
            if (i + arr[j] === 0) {
                return true
            }
        }
    }
}

const result = sumZero(arr)
console.log(result)

// The time complexity of this function should be O(n^2)???