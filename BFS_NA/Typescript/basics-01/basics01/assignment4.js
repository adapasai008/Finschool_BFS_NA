var Employee = {
    id: 235422,
    empName: 'Adapa sai',
    salary: 80000
};
for (var item in Employee) {
    console.log(Employee[item]);
}
var id = Employee.id, empName = Employee.empName, salary = Employee.salary;
console.log(id);
console.log(empName);
console.log(salary);
