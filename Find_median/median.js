let array1 = [2,3,4]
let array2 = [9,8,7]

const findMedian =(array1,array2)=>{
    let mergeArray = array1.concat(array2);
    let n = mergeArray.length;
    if(n%2 === 0){
        return (mergeArray[n/2 -1]+ mergeArray[n/2])/2
    }else{
        return mergeArray[Math.floor(n/2)]
    }
}

console.log(findMedian([2,3,4],[9,8,7]))


