function reverseString (str) {
    
    let reverse = [];

    for (let i = str.length -1; i >= 0; i--) {
        reverse.push(str[i])
    }

    return reverse.join('');
}

reverseString('PRAKASH DAS')


// function reverse2(str) {
//     return str.split('').reverse().join();
// }

// reverse2("HI My");

// function reverseStringWithRecursion(str) {
// if(str === "") {
// 	return "";
// }
// 	return reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
// }

// reverseStringWithRecursion('prakash das');