function Percent(maths:number,physics:number,chemistry:number){

let result = (maths+physics+chemistry)/3

if(result <= 70){
    console.log('C Grade');
    
}
else if(result > 70 && result <= 90){
    console.log('B Grade');
    
}else{
    console.log('A Grade');
    
}
return result;
}

console.log(Percent(100,68,98));
