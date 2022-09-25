const container = document.getElementById('container');
const content_text = Array.from(document.querySelectorAll('.content_text'));

container.addEventListener('click', (e)=> {
    let number = e.target.dataset.number;
    let value = e.target.classList.contains("btn");
    if(value) {
        search(number);
        return;
    }
})

const search=(value)=> {
    content_text.map(index=> {
        index.classList.remove('block');
        index.dataset.seccion === value ? index.classList.add('block') : "";
    })
}

//Crear el navbar sticky
window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navUnidades");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } 
  else {
    navbar.classList.remove("sticky");
  }
}