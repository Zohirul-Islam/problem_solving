const nums = [2,7,11,15];
const target = 9

function twoSum (num,target){
    for(let i=0;i < num.length;i++){
        for(let j=0;j<num.length;j++){
            if(num[i] + num[j] === target){
                return [i,j]
            }
        }
    }
    return []
}

console.log(twoSum(nums,target))