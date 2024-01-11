// first task 

function calcaverage( a , b , c , d , e , f , g , h , r , t) {
    var sum =  a + b + c + d + e + f + g + h + r + t ;
    var average = sum / 10 ;
    return average;
}
console.log (calcaverage(1,2,3, 4,5,6,7,8,9,10));


// second task 

function area(height, base) {
    return height * base * 0.5;
}
console.log(area(10, 8));

// third task 

function age(years) {
    return years * 365;
}
console.log(age(2));

// forth task 

function calc( num1 , num2 ) {
    return num1 + num2;
}
console.log(calc( 5 , 10 ));


// task five

// var developers = ["abdo", "mohamed", "alaa", "adulrahman", "Mosaad", "Ibrahim", "salah", "mohsen", "boda", "body"];
// console.log(developers[0]);

function names() {
    var developers = ["abdo", "mohamed", "alaa", "adulrahman", "Mosaad", "Ibrahim", "salah", "mohsen", "boda", "body"];
     return developers[0];
}
console.log(names())

// task six 

function myname() {
    var name = "Abdelfattah";
    return name;
}
document.getElementById("abdo").innerHTML = myname();

// task seven

function Hours(hours) {
    return hours * 3600;
}
console.log(Hours(3));

// task eight

function morethan350(n1,n2) {
    var total = n1 + n2; 

    if (total > 350 ) {
        return true;
    }
    else {
        return false;
    }
}
console.log(morethan350(200,400));

// task nine

function equal0(number) {
    if (number == 0 ) {
        return true;
    }
    else {
        return false;
    }
}
console.log(equal0(3))

// task 10 

function twonumbers(number1, number2) {
    return  (100 * number1) / number2 ;
}
console.log(twonumbers(2, 10));


// task 11 

function bigger(m1,m2) {
    if (m1 > m2) {
        return m1;
    } 
    else if (m2 > m1) {
        return m2;
    }
    else if (m1 == m2 ) {
        return "equal";
    }
}
console.log(bigger(2,2))

// task 12

function variable(h1) {
    if (isNaN(h1)) {
        return "Not a number";
    } 
    else {
        return h1;
    }
}
console.log(variable("23"));


// task 13 

// This function returns the current date in the format of mm/dd/yyyy
function getCurrentDate() {

    var today = new Date();
    return today
  }
console.log(getCurrentDate())  