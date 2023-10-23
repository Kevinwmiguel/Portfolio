function clickOptions(){
    var navigation = document.getElementById('navigation');
    var header = document.getElementById('header');

    if (navigation.style.display == 'flex'){
        navigation.style.display = 'none'
        header.style.height = '0vh'
        
    } else {
        navigation.style.display = 'flex'
        header.style.height = '100vh'
        header.style.width = '15vw'
    }
}

const controls = document.querySelectorAll('.control');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft = control.classList.contains("arrow-left");

        if(isLeft){
            currentItem -=1;
        } else {
            currentItem +=1;
        }

        if (currentItem >= maxItems){
            currentItem = 0;
        }
        if (currentItem < 0){
            currentItem = maxItems - 1;
        }

        items.forEach(item => item.classList.remove('current-item'));

        items[currentItem].scrollIntoView({
            inline: "center",
            behavior: "smooth",
        });

        items[currentItem].classList.add('current-item')
    });
});

function stars(){
    let count = 50;
    let scene = document.querySelector('.rocket-div');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;
        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 60 + 'px';
        star.style.animationDuration = duration + 's';
        scene.appendChild(star);
        i++;
    }
}
stars();
