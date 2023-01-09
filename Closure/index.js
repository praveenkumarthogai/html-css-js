

function parent() {
    let age = 100;
    function child() {
        age++;
        console.log(age, 'child fn')
    }

    return child;
}


let result = parent();

result();
result();
result();
result();

//closure (lexical scope): Inner function has scope to parent function eventhought the function is closed.