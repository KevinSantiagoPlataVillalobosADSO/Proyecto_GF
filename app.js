let dom = document;
let body = dom.body;
let checkbox = dom.querySelector('input.check_slider');
let paragraphs = dom.querySelectorAll('p');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        body.className = 'night';
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.add('letter');
        });
    } else {
        body.className = '';
        paragraphs.forEach(function(paragraph) {
            paragraph.classList.remove('letter');
        });
    }
});


