let vaccines = ['J&J','Pfizer','Sputnik'];
vaccines.push('Covaxin');

for(let i=0;i<vaccines.length;i++){
    console.log(vaccines[i]);
}

let [a,b,] = vaccines;
console.log(a+','+b);
