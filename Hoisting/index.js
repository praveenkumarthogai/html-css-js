display();
  






function display(){
    console.log('display called');
    console.log(message);
}


var message = "Hello everyone";


//All global variable declaration and function declaration will go to top of the scope before code execution this behaviour is called hoisting
//let and const will not comes under hoisting
//by default all variables are assigned as undefined;