
// ######************#### Arrays in js #####*************#####


// ########## Find the first and last element from array ##########

function firstAndLastElement(arr){
    let n = arr.length;
    let firstelement = arr[0];
    let lastelement = arr[n-1];
    return [firstelement,lastelement]

}

// console.log(firstAndLastElement([21,1,2,3,4,5,6,7,8,9,10]));// [1,10]


// Array methods:
// 1. push() : add element at the end of the array
// 2. pop() : remove element from the end of the array
// 3. shift() : remove element from the start of the array
// 4. unshift() : add element at the start of the array
// 5. splice() : add or remove element from the array
// 6. slice() : copy the array elements
// 7. concat() : merge two or more arrays
// 8. indexOf() : find the index of element
// 9. lastIndexOf() : find the last index of element
// 10. includes() : check the element is present or not
// 11. find() : find the element from the array
// 12. findIndex() : find the index of element from the array
// 13. filter() : filter the element from the array
// 14. map() : map the element from the array
// 15. reduce() : reduce the element from the array
// 16. forEach() : iterate the element from the array
// 17. some() : check the element is present or not
// 18. every() : check all the element is present or not
// 19. sort() : sort the element from the array
// 20. reverse() : reverse the element from the array
// 21. join() : join the element from the array
// 22. toString() : convert the array to string
// 23. isArray() : check the element is array or not
// 24. fill() : fill the element in the array
// 25. copyWithin() : copy the element from the array
// 26. flat() : flat the array
// 27. flatMap() : flat the array and map the element
// 28. keys() : return the keys of the array
// 29. values() : return the values of the array
// 30. entries() : return the entries of the array
// 31. from() : create the array from the object




// ########## Check element is present in array or not ##########

function isElementPresent(arr,target){
   for (let x of arr){
    if(x==target){
        return true
    }
   }
    return false


}

// console.log(isElementPresent([1,2],2));// true



// ########## Check element is present in array or not and return the index ##########



function isElementPresentAndIndex(arr,target){
    for (let i=0;i<arr.length;i++){
     if(arr[i]==target){
         return i
     }
    }
     return -1
 
 
 }
 
//  console.log(isElementPresentAndIndex([1,2,4,5,6,23,3],23));// 5


// ########## Delete , add and update element from a specific index ##########

const arr = [1,2,3,4,5]
// console.log(arr);  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// arr.splice(4,4) // delete element from index 4 to next 4: 5,6,7,8 will be deleted

// console.log(arr); // [ 1,2,3,4, 9, 10 ]

 


//  adding element

// arr.splice(3,5,90)
// console.log(arr);

//update arr

// arr.splice(0,2,90,100)

// while deleting your next argument should be greater then the 1st one means if you want to delete 2 elements then your next argument should be 2+1=3
// console.log(arr);


//slice takes a sub array from the array
const subArray = arr.slice(2,4)   // it starts from index 2 and end at 4-1=3  means 3,4 will be returned from an array of 1,2,3,4,5
// console.log(subArray,arr); // [ 3, 4, 5 ]

// slice does not change the original array it returns the new array from the original array but splice changes the original array 


// ########## Check Two arrays are equal or not ##########

function isEqualArray(arr1,arr2){
    // if(arr1.length !=arr2.length){
    //     return false
    // }
    // for(let i=0;i<arr1.length;i++){
    //     if(arr1[i]!==arr2[i]){
    //         return false
    //     }
    // }
    // return true

    // we can also do it using every method

    return arr1.length === arr2.length && arr1.every((ele,i)=>{
        return arr1[i]===arr2[i]
    })
}

// console.log(isEqualArray([1,2,3],[1,2,3]));// true




// ########## Sorting array is asanding and decending order  ##########

function sortArrayAsanding(arr){
    
 return arr.sort((a,b)=>a-b)

}

function sortArrayDecanding(arr){
    
    return arr.sort((a,b)=>b-a)
   
   }


// console.log(sortArrayAsanding([3,5,1,6,8,2,9,4,10,7])); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(sortArrayDecanding([3,5,1,6,8,2,9,4,10,7])); // [ 10, 9, 8, 7, 6



let newarry= arr.filter((ele,i)=>{

    return ele %2!==0
})

let y = newarry.reduce((acc,ele)=>{
    
    return sum = acc+ele
})

// console.log(y,newarry,arr);


const yy = [1,2,[3,4],[[5,6,7]],8]

// console.log(yy.flat(2)); // here 2 means the depth of the array

let yyy=arr.find((ele,i)=>{
    return ele%2!==0
})

// console.log(yyy);