// ########## sum of natural numbers ##########
function sunOfNaturalNumbers(n){
    let sum=0;
    // it can be solved using loop and below formula also
    // for(let i=1;i<=n;i++){
    //     sum+=i
    // }


    return n*(n+1)/2
}

// console.log(sunOfNaturalNumbers(5)); // 15 : 1+2+3+4+5=15




// ########## sum of digits numbers ##########

function sumOfDigits(n){
    let sum=0;
   while(n>0){
   
    sum+=n%10
    n=Math.floor(n/10)
   }

    return sum
    

}

// console.log(sumOfDigits(123) );// 6 : 1+2+3=6




// ########## count the number of digits of a number ##########

function countDigits(n){
    let count=0;
    n = Math.abs(n)
   
    do{
        count++
        n=Math.floor(n/10)}
        while(n>0)
// you can use this formula also

    // count = n.toString().length
    return count

}

// console.log(countDigits(0) );// 3 : 3 digits




// ########## Check the given number is palindrome or not ##########
// A number is said to be palindrome if it is equal to its reverse number.


function isPalindrome(n){
    let copyNum = n;
    let reverseNum = 0;
   while(copyNum>0){
    let lastdigit = copyNum%10;
    reverseNum = reverseNum*10+lastdigit;
    copyNum=Math.floor(copyNum/10)
   
   }
   
 if(n===reverseNum){    
     console.log("The number is palindrome");
 }else{
    console.log("The number is not palindrome");
 }
   

}

// isPalindrome(121);// true : 121 is palindrome
// isPalindrome(123);// false : 123 is not palindrome






// ########## Find the fibonacci sequence ##########
// fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1.
// 0 1 1 2 3 5 8 13 21 34
function fibonacci(n){
    if(n<2){
        return n
    }
    let prev =0,curr=1,next;
    for(let i=2;i<=n;i++){
      next = prev+curr;
      prev= curr;
        curr=next;
    }
    return next
}

//  using recursion

function fibonacci(n){
    if(n<2){
        return n
    }else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}

// console.log(fibonacci(8));





// ########## Find the missing number from array ##########

function missingNumber(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]> max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
   let presentValue = {}
   let missing = []

   
   for(let i =0;i<arr.length;i++){
    presentValue[arr[i]] = true
   }
   for(let i=min; i<=max;i++){
    if(!presentValue[i]){
        missing.push(i)
   } 

}  
return missing 
}




// console.log(missingNumber([1,3,4,5,10]));


// ########## Find the duplicate number from array ##########

function duplicateNumber(arr){
    let duplicate=[];
    let presentValue={};

    for(let i=0;i<arr.length;i++){
        if(presentValue[arr[i]]==true){
            duplicate.push(arr[i])
        }else{
            presentValue[arr[i]]=true
        }
    }
    return duplicate

}

// console.log(duplicateNumber([1,2,8,3,4,5,5,6,7,8,9,10,10]));// [ 5, 8, 10 ]





// ######************#### Arrays in js #####*************#####


// ########## Find the first and last element from array ##########

function firstAndLastElement(arr){
    let n = arr.length;
    let firstelement = arr[0];
    let lastelement = arr[n-1];
    return [firstelement,lastelement]

}

// console.log(firstAndLastElement([21,1,2,3,4,5,6,7,8,9,10]));// [1,10]


