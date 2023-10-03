let number = '';
let sum = 0;
let operator = '';
let first_number;
function display(val){
    let value;
    switch(val){
        case '+':
            if(number == ''){
                alert("Enter a number first!");
                clr();
            }else{
                operator = '+';
                value = document.getElementById("result").value;
                first_number = parseFloat(value);
                console.log('fn = '+first_number);
                clr();
            }
           
            break;
        case '-':
            if(number == ''){
                alert("Enter a number first!");
                clr();
            }else{
                operator = '-';
                value = document.getElementById("result").value;
                first_number = parseFloat(value);
                console.log('fn = '+first_number);
                clr();
            }
            break;
        case '*':
            if(number == ''){
                alert("Enter a number first!");
                clr();
            }else{
                operator = '*';
                value = document.getElementById("result").value;
                first_number = parseFloat(value);
                console.log('fn = '+first_number);
                clr();
            }
            break;
        case '/':
            if(number == ''){
                alert("Enter a number first!");
                clr();
            }else{
                operator = '/';
                value = document.getElementById("result").value;
                first_number = parseFloat(value);
                console.log('fn = '+first_number);
                clr();
            }
            break;
        default:
            number = number+val;
            console.log(number);
            document.getElementById("result").value+=val; 
    }

}
function clr(){
    document.getElementById("result").value = "";
    number = '';
}
function equate(){
    if(number == ''){
        alert("Enter a number first!");
        clr();
    }else{
        let value = '';
        let second_number;
        let available = true;
        value = document.getElementById("result").value;
        if(value==''){
            available = false;
        }else{
            console.log('value = '+value);
        
            second_number = parseFloat(value);
            console.log('sn = '+second_number + " type " + typeof(second_number));
            available = true;
        }
       
        if(available){
            switch(operator){
                case '+':
                    sum = first_number + second_number;
                    break;
                case '-':
                    sum = first_number - second_number;
                    break;
                case '*':
                    sum = first_number * second_number;
                    break;
                case '/':
                    if(second_number == 0){
                        alert("Denominator can not be zero!");
                        clr();
                    }else{
                        sum = first_number / second_number;
                    }
                    break;
            }
            document.getElementById("result").value = sum; 
            
        }else{
            alert("Second number an available!");
            clr();
        }
    }
}