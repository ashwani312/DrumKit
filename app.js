let btnLength = document.querySelectorAll(".btn");
// console.log(btnLength);
for (let i = 0; i < btnLength.length; i++) {
    document.querySelectorAll('.btn')[i].addEventListener('click', function () {
        let text = this.innerText;
        console.log(text)
        makeSound(text);
        clicked(text);
    })
}

document.addEventListener('keypress', (e)=>{
    console.log(e.key)
    makeSound(e.key);
    clicked(e.key);

})


const makeSound = (text) => {
    switch (text) {
        case 'w':
            let sound = new Audio('./sounds/tom-1.mp3')
            sound.play();
            break;
        case 'a':
            let sound1 = new Audio('./sounds/tom-2.mp3')
            sound1.play();
            break;
        case 's':
            let sound2 = new Audio('./sounds/tom-3.mp3')
            sound2.play();
            break;
        case 'd':
            let sound3 = new Audio('./sounds/tom-4.mp3')
            sound3.play();
            break;
        case 'j':
            let sound4 = new Audio('./sounds/crash.mp3')
            sound4.play();
            break;
        case 'k':
            let sound5 = new Audio('./sounds/snare.mp3')
            sound5.play();
            break;
        case 'l':
            let sound6 = new Audio('./sounds/kick-bass.mp3')
            sound6.play();
            break;

        default:
            break;
    }
}


const clicked = (text) =>{
    let sel = document.querySelector('.'+ text);
    sel.classList.add('clicked');

    setTimeout(()=>{
        sel.classList.remove('clicked');
    },500)
}
   
