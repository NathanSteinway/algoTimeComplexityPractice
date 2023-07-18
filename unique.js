function isUnique(str) {
    let unique = "";

    for (let i=0; i < str.length; i++) {
        if (unique.includes(str[i]) === false) {
            unique += str[i]
        }
    }

    return unique;
}

console.log(isUnique("Moondaaay"))

// O(n)