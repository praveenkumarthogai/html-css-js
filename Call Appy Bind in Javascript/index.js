var x = {
    name: 'praveen',
    age: 25
}

var y = {
    name: 'kumar',
    age: 29
}


function display() {
    console.log(` Name - ${this.name} Age - ${this.age}`)
}


display.call(x);

display.call(y);

//call | apply | bind are prototype functions
//(call | apply)==> execution the method in given context or dynamic context
//call & apply works in same way, difference is extra parameters will be passed as comma separated in call method but in apply method it is passed as array

//--Bind--(context hardbinding)---


var fn = display.bind(x);

fn();

