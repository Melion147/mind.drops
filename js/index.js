// COLORS
const orange = '#F39C12'
const violet = '#802d59'
const blue = '#16278c'
const green = '#254922'
const red = '#bb5233'

// Checking if user opens it for the first time
window.onload = function() {
    setStatusBarColor();
    localFirstCheck();
    localColorCheck();

}

function setStatusBarColor(){
    let LSC = localStorage.Pcolor;
    
    document.querySelector('head').innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="${LSC}">

        
    <title>mind.drops</title>
    <link rel="stylesheet" href="style/glider.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,100,400" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="style/main.css">
    <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css">
    
    
    <link rel="manifest" href="manifest.json">
    <!-- IOS Support -->
    <link rel="apple-touch-icon" href="icons/icon-96x96.png">`
}

function localFirstCheck() {
    if (localStorage.First === undefined) {
        location.href = 'preferences.html'
        localStorage.setItem('sound', '1')
    } else {
        return;
    }
}

function localColorCheck() {
    let LSC = localStorage.Pcolor;
    const initBtns = document.querySelectorAll('.init-btn');
    if (LSC == orange) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-orange')
        })
    } else if (LSC == violet) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-violet')
        })
    } else if (LSC == blue) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-blue')
        })
    } else if (LSC == green) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-green')
        })
    } else if (LSC == red) {
        initBtns.forEach(curr => {
            curr.classList.add('init-btn-red')
        })
    }


    document.documentElement.style.setProperty('--main-bg-color', LSC);


}

// Animation
const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const burgerdiv = document.querySelector('.burger>div');
const bTop = document.querySelector('.burger>div:first-child');
const bham = document.querySelector('.burger>div:nth-child(2)');
const bBottom = document.querySelector('.burger>div:last-child');
const soundBtn = document.querySelector('.mute-btn')



burger.addEventListener('click', toggleMenu);

soundBtn.addEventListener('click', ()=>{
    if(localStorage.sound == 0) localStorage.sound = 1;
    else if (localStorage.sound ==1) localStorage.sound = 0;
    else localStorage.sound =1;
});



async function toggleMenu() {
    navLinks.classList.toggle('open');
    soundBtn.classList.toggle('none');


    setTimeout(() => {
        bTop.classList.toggle('white');

    }, 200);
    setTimeout(() => {
        bham.classList.toggle('white');
        bTop.classList.toggle('b1animate');
    }, 500);
    setTimeout(() => {
        bham.classList.toggle('b2animate');
    }, 700);

    setTimeout(() => {
        bBottom.classList.toggle('white');
        bBottom.classList.toggle('b3animate');
    }, 800);
}

// soundBtn.addEventListener('click', )
/////////////////////////!/////////////////////////////////////////////
// navlist
const howToBtn = document.querySelector('.nav-links li:first-child');
howToBtn.addEventListener('click', () => location.href = 'howto.html')
const aboutBtn = document.querySelector('.nav-links li:nth-child(2)');
aboutBtn.addEventListener('click', () => location.href = 'about.html')
const introBtn = document.querySelector('.nav-links li:nth-child(3)');
introBtn.addEventListener('click', () => location.href = 'intro.html')
const prefBtn = document.querySelector('.nav-links li:nth-child(4)');
prefBtn.addEventListener('click', () => location.href = 'preferences.html')


//////////////////////////////////////////////////////////////////////////////

const initBtn1 = document.querySelector('.init-btn');

const quotesArr = txt;
const app = document.querySelector('#quote-output');

initBtn1.addEventListener('click', () => {
    document.querySelector('#quote').style.opacity = 1;


    document.querySelectorAll('.init-btn').forEach((curr) => {
        curr.classList.add('none');
    })

    const quotesRndIndex = Math.floor(Math.random() * quotesArr.length);



    typewriterSingle(quotesRndIndex);
    setTimeout(() => {
        document.querySelector('.Typewriter__cursor').classList.add('none')
    }, 9000);

})


const typewriterSingle = (indx) => {
    const typewriter = new Typewriter(app, {
        delay: 80
    });
    typewriter
        .deleteAll()
        .typeString(`${quotesArr[indx]}.`)
        .start()
    setTimeout(() => {
        typewriter.stop();
    }, 9000);

}