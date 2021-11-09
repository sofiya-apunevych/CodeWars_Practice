/* You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 */
function sortArray(arraySort) {
  // Return a sorted array.


let  oddArray = [];
let  evenArray = [];
let resArray = [];

for(let i=0; i< arraySort.length; i++){
    if (arraySort[i] %2 === 0){
         evenArray.push(arraySort[i])    
    }
    else if(arraySort[i] %2 === 1){
        //oddArray.sort((a,b) =>a<b ? -1 : 1).push(arraySort[i])
        oddArray.push(arraySort[i])
    }
}
oddArray.sort((a,b) => a-b)

for(let i=0; i< arraySort.length; i++){
    if (arraySort[i]%2 === 0){
         resArray.push(evenArray.shift()) 
    }else{
        resArray.push(oddArray.shift())
        }
}
    return resArray;
}


//return arraySort.map( item => item % 2 ? oddArray.shift() : item)
//[[...oddArray],[...evenArray]];


let sortArr = sortArray([5,9,7,8])
console.log(sortArr)

//(a, b) => a < b ? -1 : 1;