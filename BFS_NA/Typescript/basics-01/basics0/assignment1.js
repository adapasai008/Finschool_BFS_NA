var num1 = 20;
console.log(num1);
var num2 = 3.14;
console.log(num1);
var word = 'Success is the best revenge';
console.log(word);
var weekDays;
(function (weekDays) {
    weekDays[weekDays["Mondya"] = 0] = "Mondya";
    weekDays[weekDays["Tuesday"] = 1] = "Tuesday";
    weekDays[weekDays["Wednesday"] = 2] = "Wednesday";
    weekDays[weekDays["Thursday"] = 3] = "Thursday";
    weekDays[weekDays["Friday"] = 4] = "Friday";
    weekDays[weekDays["Saturday"] = 5] = "Saturday";
    weekDays[weekDays["Sunday"] = 6] = "Sunday";
})(weekDays || (weekDays = {}));
console.log(Object.values(weekDays));
