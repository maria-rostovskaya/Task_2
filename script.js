//1. Первая задача на Freecodecamp - Convert Celsius to Fahrenheit (раздел Basic Algorithm Scripting)
/*
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius*(9/5)+32;
    return fahrenheit;
}

convertToF(30);
*/


//2. Вторая задача на Freecodecamp - Reverse a String (раздел Basic Algorithm Scripting)


/*
function reverseStr(str) {
    var newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
console.log(reverseStr('hello'));*/


//3. Седьмая задача на Freecodecamp - Repeat a String Repeat a String (раздел Basic Algorithm Scripting)
/*function repeatStringNumTimes(str, num) {
    var lengthStr='',i;
    if (num <= 0){
        return ('');
    }else if (num === 1)
        return (str);
    else {
        for(i=0; i<num; i++)
            lengthStr+=str;
        return lengthStr;
    }
}
console.log(repeatStringNumTimes("abc", 3));*/


//4. Создайте массив arr с числовыми величинами 45,78,10,3.
// Добавьте в массив arr еще одно число. Посчитайте
// в переменную sum сумму чисел в нем, при помощи цикла for/while.


/*
var arr = [45, 78, 10, 3];
arr.push(54);
var sum=0, i;
function sumArr(arr) {
    for (i=0; i<=arr.length-1; i++){
        sum += arr[i];
    }
    console.log (sum);
}
sumArr(arr);*/


/*
5.Дан объект
var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    Напишите код для суммирования всех зарплат и сохраните результат в переменной sum.
}*/

var salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
var sum = 0;
for (var key in salaries) {
    sum += salaries[key];
}
console.log(sum);



