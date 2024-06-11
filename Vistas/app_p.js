let dom = document;
let main = dom.querySelector('main')
let checkbox = dom.querySelector('input.check_slider')

checkbox.addEventListener( 'change' , function() {
    if(this.checked) {
        console.log("active")
        main.className ='night'
    }
    else{
        console.log("inactive")
        main.className = ' '
    }
});         
