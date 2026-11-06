
let a=[1,2,3,4,5,6,7];

function reverseArray(arr){
    let mid=a.length/2;
    for(let i=0,j=arr.length-1;i<mid;i++,j--){
        let c=arr[i];
        arr[i]=arr[j];
        arr[j]=c;
        
    }
    console.log(arr)
}
reverseArray(a);

function secondLargest(arr){
    let largestEle=-Infinity;
    let secondLargestEle=-Infinity;
    for(let i=0;i<arr.length;i++){
        if(largestEle<arr[i]){
            secondLargestEle=largestEle;
            largestEle=arr[i]
        }
    }
    return secondLargestEle;
}

console.log(secondLargest(a));

function findSecondLargest(a) {
  if (a.length < 2) return null;
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of a) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num < largest) {
      secondLargest = num;
    }
  }

  return secondLargest === -Infinity ? null : secondLargest;
}



let hello = {
    world: true,
    nested: {
        obj: {
            with: "some text",
            and: {
                numbers: {
                    count: [1,2,3,4,5,6,7,8,9,10],
                    symbol: Symbol("1"),
                }
            }
        }
    }
}




