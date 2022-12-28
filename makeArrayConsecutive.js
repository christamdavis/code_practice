//CodeSignal
//Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
//Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger 
//than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out 
//the minimum number of additional statues needed.
function solution(statues) {
    statues.sort(function(a, b){return a-b});
    let i = 0;
    let result = 0;
    while (i<statues.length-1){
        if((statues[i+1]-statues[i]) > 1){
            result+= statues[i+1]-statues[i]-1;
        }
        i++;
    }
    return result;
}
