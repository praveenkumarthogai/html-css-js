// function normal() {
//     console.log(this);
// }
var age = 100 ;

var x = {
    age: 40,
    normal: {
        display: function () {
            console.log(this.age)
            console.log(this, 'normal function');
        }
    },
    arrow: {
        display: () => {
            console.log(this.age)
            console.log(this, 'arrow function');
        }
    }
}

x.normal.display();
x.arrow.display();

// const arrow = () => {
//     console.log(this);
// }

//In Normal function the value of this refers which object it called by(how a function is called)
//In Arrow function the value of this refers where it is defined (scope of the function)