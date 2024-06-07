let dom = document;
let body = dom.body;
let p = dom.querySelector('p')
let slider = dom.querySelector('input.check_slider')

var checkbox = dom.querySelector('input.check_slider')
checkbox.addEventListener( 'change' , function() {
    if(this.checked) {
        body.className ='night'
        p.className ='letter'
    }
    else{
        body.className = ' '
        p.className = ' '
    }
});         
