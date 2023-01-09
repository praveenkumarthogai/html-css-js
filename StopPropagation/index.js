function parentDiv() {
    console.log('parent div triggered');
}


function childDiv(event) {
    event.stopPropagation();  //prevents event bubbling
    console.log('child div triggered');


}