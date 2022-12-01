

const Employee = {
   id:235422,
  empName: 'Adapa sai',
  salary: 80000
}

for(let item in Employee){
    console.log(Employee[item]);
}

let {id, empName, salary} = Employee;
console.log(id);
console.log(empName);
console.log(salary);

