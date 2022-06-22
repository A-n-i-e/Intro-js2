function calculator(first,second,oper){
    if (oper == '+') {
        return first + second
        
    }
    else if (oper == "-") {
        return first - second
    }
    else if (oper == "*") {
        return first*second
    }
    else if (oper == "/") {
        return first/second
    }


}

var first_number = window.prompt('Enter Your First Number:');
var second_number = window.prompt('Enter Second Number');
var operator = window.prompt("Enter Operator Like: '+' , '-' , '*' , '/' ");

first_number = parseFloat(first_number);
second_number = parseFloat(second_number);
const result = calculator(first_number, second_number, operator);

alert(result);