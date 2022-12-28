//CodeSignal
//Given the string, check if it is a palindrome.
function solution(inputString) {
    let splitStr = inputString.split(''); 
    let rev = splitStr.reverse();
    rev = rev.join('');
    if(rev == inputString) return true;
    else return false;
}
