let str = "The quick brown fox jumps over the lazy dog"

function isPangram(str) {

    let strArr = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        }
    }

    return true;
}

let result = isPangram(str)

console.log(result)

// O(n)