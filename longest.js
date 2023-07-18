let str = "take chances make mistakes and get messy"

function isLongest(str) {
    let words = str.split(' ');

    let longestWord = 0;

    for(var i = 0; i < words.length; i++) {
        if(words[i].length > longestWord){
            longestWord = words[i].length
        }
    }

    return longestWord
}

const result = isLongest(str)
console.log(result)

// O(n)

