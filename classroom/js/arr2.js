let arr=[96,25,56,87,32,45];
console.log(rev(arr));




function rev(arr){
    let newArr=[];
    for(let i=0,j=arr.length-1;i<arr.length;i++,j--){
        newArr[j]=arr[i];
    }
    return newArr;
}
greet();

const greet=()=>{
    console.log("Hello")
}





function findLargest(arr){
    if(arr.length<2){
        return null;
    }

    let largest=-Infinity;
    let secondLargest=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(largest<arr[i]){
            secondLargest=largest;
            largest=arr[i];
        }else if(arr[i]>secondLargest && arr[i]<largest){
            secondLargest=arr[i];
        }
    }
    return secondLargest;
}

console.log(findLargest(arr)); //96 87