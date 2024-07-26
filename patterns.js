

function printLeftAngle(){
    for(let i=0;i<5;i++){
        let row='';
        for(let j=0;j<=i;j++){
            row+="* "
        }
        console.log(row);
    }
}
// printLeftAngle();
// *
// * *
// * * *
// * * * *
// * * * * *

function printRightAngle(){
for(let i=0;i<5;i++){
    let start = ""
    
    for(let j=5;j>i;j--){
        start+=" "
    }
    console.log(start);
    for(let k=0;k<=i;k++){
        start+="*"
    }
    console.log(start);
    
}

}

printRightAngle();