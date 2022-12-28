//CodeSignal
//Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
unction solution(inputArray) {
    let length = inputArray.length;
    let i = 0;
    let greatest=0;
    while(i<length-1){
        let temp = inputArray[i] * inputArray[i+1];
        if(i==0)greatest = temp;
        if(temp>greatest) greatest = temp;
        i++;
    }
    return greatest;
}
