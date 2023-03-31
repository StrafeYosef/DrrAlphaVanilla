let square = document.querySelector('.square');
let second = document.querySelector('.second');
let dialog = document.querySelector('.dialogConatiner');
dialog.classList.add('dn')
square.addEventListener('mouseenter', () => {
    second.src = "./assets/End_Gate.png"
})
square.addEventListener('mouseleave', () => {
    second.src = "./assets/Start_Gate.png"
})
square.addEventListener('click', () => {
    setTimeout(() => {
        dialog.classList.remove('dn')

        document.querySelector('.move').classList.remove('dn');
    }, 450);
})