function clickOptions(){
    var navigation = document.getElementById('navigation');
    var header = document.getElementById('header');

    if (navigation.style.display == 'flex'){
        navigation.style.display = 'none'
        header.style.height = '0vh'
        
    } else {
        if(window.innerWidth <= 430)
        {
            navigation.style.display = 'flex'
            header.style.height = '100vh'
            header.style.width = '100vw'
        }
        else
        {
            navigation.style.display = 'flex'
            header.style.height = '100vh'
            header.style.width = '15vw'
        }
        
    }
}

function bals(){
    let count = 380;
    let scene = document.querySelector('.ava');
    let i = 0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 50;
        star.style.left = x + 'vh';
        star.style.width = 3 + 'vh';
        star.style.height = 3 + 'vh';
        star.style.animationDuration = duration + 's';
        scene.appendChild(star);
        i++;
    }
}
bals();
