
let isPrime = (num:any)=>{
  let isPrime = true;
  let num1 = parseInt(num);
     for(let i=2;i<num;i++){
        if(num % i == 0){
            isPrime = false;
        }
     }
     if(isPrime){
        alert('Prime number');
     }else{
        alert('Not Prime number');
     }

}
isPrime(prompt('Enter the number'));
