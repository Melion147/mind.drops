const glider = document.querySelector('.glider')
document.querySelector('.init-btn').addEventListener('click', initMala)

document.querySelector('#self-feed').addEventListener('click', () => {
    initMala();
    document.querySelectorAll('.init-btn').forEach((curr) => {
        curr.classList.add('none');
    })
})

function initMala() {
    createPerls();

    document.querySelector('.rope-img ').classList.toggle('opacity')
    document.querySelector('.counter').classList.toggle('opacity');
    document.querySelector('.glider-next').addEventListener('click', () => {
        let count = document.querySelector('#counter-span').textContent;
        document.querySelector('#counter-span').textContent = parseInt(count) + 1;
        counterCheck(parseInt(count) + 1);
    })
    let counter = 0;
    var glider = new Glider(document.querySelector('.glider'), {
        slidesToShow: 5,
        duration: 5,
        arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
        }
    });
}




function createPerls() {
    for (let index = 0; index <= 109; index++) {
        let newPearl = document.createElement('div')
        newPearl.classList.add('element')
        let pearlImg = document.createElement('img')
        const penrose = document.querySelector('.counter img');
        const lotus = document.querySelector('.lotus');
        let LSC = localStorage.Pcolor;
        if (LSC === '#F39C12') {
            lotus.setAttribute('src', 'icons/lotusorange.png')
            pearlImg.setAttribute('src', 'img/Porange.png');
            penrose.setAttribute('src', 'img/penrose-orange.png')
        } else if (LSC === '#802d59') {
            lotus.setAttribute('src', 'icons/lotusviolet.png')
            pearlImg.setAttribute('src', 'img/Pviolet.png');
            penrose.setAttribute('src', 'img/penrose-violet.png')
        } else if (LSC == '#16278c') {
            lotus.setAttribute('src', 'icons/lotusblue.png')
            pearlImg.setAttribute('src', 'img/Pblue.png');
            penrose.setAttribute('src', 'img/penrose-blue.png')
        } else if (LSC == '#254922') {
            lotus.setAttribute('src', 'icons/lotusgreen.png')
            pearlImg.setAttribute('src', 'img/Pgreen.png');
            penrose.setAttribute('src', 'img/penrose-green.png')
        } else if (LSC == '#bb5233') {
            lotus.setAttribute('src', 'icons/lotusred.png')
            pearlImg.setAttribute('src', 'img/Pred.png');
            penrose.setAttribute('src', 'img/penrose-red.png')
        }

        newPearl.appendChild(pearlImg)
        document.querySelector('.glider').appendChild(newPearl)
    }

}

// Counter if = #counter-span
 

const counterCheck = (count) => {
    var endMala = 10;

    if (count < endMala && localStorage.sound == 1){
        setTimeout(()=>{
    
        var pAud = new Audio('../audio/PerlSound.mp3');
        pAud.volume = 0.1;
        pAud.play();
    },100)
    }
    
    if (count === endMala) {
        if (localStorage.sound == 1) {
            new Audio('../audio/water.mp3').play() 
        }
                    
        toggleClasses();
        showModal();
        showModalChildren();
        document.querySelector('#quote').style.opacity = '0'
        
    }
    
 
    
    console.log(count);
}

