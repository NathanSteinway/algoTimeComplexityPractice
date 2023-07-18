const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array?

// Try it with first function
perf.start();                     // Starts timer
    doublerAppend(tinyArray);
let resultsAppendTiny = perf.stop();  // Stops timer and save time results

perf.start();
    doublerAppend(smallArray);
let resultsAppendSmall = perf.stop();

perf.start();
    doublerAppend(mediumArray);
let resultsAppendMedium = perf.stop();

perf.start();
    doublerAppend(largeArray);
let resultsAppendLarge = perf.stop();

perf.start();
    doublerAppend(extraLargeArray);
let resultsAppendExtraLarge = perf.stop();

perf.start();
    doublerInsert(tinyArray);
let resultsInsertTiny = perf.stop();

perf.start();
    doublerInsert(smallArray);
let resultsInsertSmall = perf.stop();

perf.start();
    doublerInsert(mediumArray);
let resultsInsertMedium = perf.stop();

perf.start();
    doublerInsert(largeArray);
let resultsInsertLarge = perf.stop();

perf.start();
    doublerInsert(extraLargeArray);
let resultsInsertExtraLarge = perf.stop();

console.log('-----------------------------------------------')
console.log('Results for the Append Functions');
console.log('-----------------------------------------------')
console.log("Tiny", resultsAppendTiny.preciseWords);
console.log("Small", resultsAppendSmall.preciseWords);
console.log("Medium", resultsAppendMedium.preciseWords);
console.log("Large", resultsAppendLarge.preciseWords);
console.log("Extra Large", resultsAppendExtraLarge.preciseWords)
console.log('-----------------------------------------------')
console.log('Results for the Insert Functions');
console.log('-----------------------------------------------')
console.log("Tiny", resultsInsertTiny.preciseWords);
console.log("Small", resultsInsertSmall.preciseWords);
console.log("Medium", resultsInsertMedium.preciseWords);
console.log("Large", resultsInsertLarge.preciseWords);
console.log("Extra Large", resultsInsertExtraLarge.preciseWords);

// In terms of speed, the Append functions tend to perform better than Insert. As the payload gets bigger Insert appears to scale significantly more poorly than Append, as the runtimes get increasingly further ahead of Append runtimes as the program runs.