function count (string) {  
    let countStr = {};
    let ui = string.split('').map(as => countStr[as] = countStr[as]+1 ||1)
    return countStr;
}

let countResult  = count ('sdgdfhgfj')
console.log(countResult)