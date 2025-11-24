  AOS.init({
    duration: 1200,
    once: true,
  });
 function hamburgertogler(){
const navIcon = document.getElementById('nav-items');
navIcon.classList.toggle('nav-items');
      }
//active item 
const nav = document.querySelector("#nav-items");

/*nav.addEventListener("click", function (e) {
    e.preventDefault();
    if(e.target.id === 'nav-items') return;
    document.querySelector('#nav-items .active').
    classList.remove('active');
 e.target.classList.add('active')
});*/


const typingElement = document.querySelector('.hero-title');
const typingText = typingElement.innerText;

let index = 1;
let isDeleting = false;

const startTyping = () => {
    // update text
    typingElement.innerText = typingText.slice(0, index);

    // typing speed
    setTimeout(startTyping, 150);

    // logic
    if(!isDeleting){
        index++;
        if(index > typingText.length){
            isDeleting = true;
        }
    }
    else {
        index--;
        if(index === 1){
isDeleting = false;
        }
    }
};

startTyping();

  